import vsctm from 'vscode-textmate'
import registry from './registry'

const generateCode = ($element: Element) => {
  const $pre = document.createElement('pre')
  const $code = document.createElement('code')
  $pre.appendChild($code)
  $element.appendChild($pre)

  return $code
}

const addTokenClass = ($token: Element, scopes: string[]) => {
  for (const scope of scopes) {
    if (scope.includes('comment')) $token.classList.add('comment')
    if (scope.includes('storage')) $token.classList.add('storage')
    if (scope.includes('assignment')) $token.classList.add('assignment')
    if (scope.includes('string')) $token.classList.add('string')
    if (scope.includes('keyword')) $token.classList.add('keyword')
    if (scope.includes('constant')) $token.classList.add('constant')
    if (scope.includes('meta.function-call'))
      $token.classList.add('function-call')
  }
}

const addLineNumber = ($line: Element, number: number) => {
  const $number = document.createElement('span')
  $number.classList.add('line-number')
  $number.innerHTML = number.toString()
  $line.appendChild($number)
}

export const format = async (
  $element: Element,
  content: string,
  language: string
) => {
  const grammar = await registry.loadGrammar(
    language === 'javascript' ? 'source.js' : 'source.ts'
  )
  if (!grammar) return content

  const text = content.split('\n')

  let ruleStack = vsctm.INITIAL
  const $code = generateCode($element)
  for (let i = 0; i < text.length; i++) {
    const line = text[i]
    const lineTokens = grammar.tokenizeLine(line, ruleStack)
    console.log(`\nTokenizing line: ${line}`)
    const $line = document.createElement('div')
    $line.classList.add('line')
    addLineNumber($line, i + 1)
    for (let j = 0; j < lineTokens.tokens.length; j++) {
      const token = lineTokens.tokens[j]
      console.log(
        ` - token from ${token.startIndex} to ${token.endIndex} ` +
          `(${line.substring(token.startIndex, token.endIndex)}) ` +
          `with scopes ${token.scopes.join(', ')}`
      )
      const $token = document.createElement('span')
      $token.classList.add('token')
      addTokenClass($token, token.scopes)
      $token.innerHTML = line.substring(token.startIndex, token.endIndex)
      $line.appendChild($token)
    }
    ruleStack = lineTokens.ruleStack
    $code.appendChild($line)
  }
}
