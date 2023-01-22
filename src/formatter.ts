import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const generateCode = ($element: Element) => {
  const $pre = document.createElement('pre')
  const $code = document.createElement('code')
  $pre.appendChild($code)
  $element.appendChild($pre)

  return $code
}

const addLine = ($code: Element, line: string, number: number) => {
  const $line = document.createElement('div')
  $line.classList.add('line')
  addLineNumber($line, number)
  $line.innerHTML += line
  $code.appendChild($line)

  return $line
}

const addLineNumber = ($line: Element, number: number) => {
  const $number = document.createElement('span')
  $number.classList.add('line-number')
  $number.innerHTML = number.toString()
  $line.appendChild($number)
}

export const format = (
  $element: Element,
  content: string,
  language: string
) => {
  const $code = generateCode($element)

  const unformattedLines = content.split('\n')
  for (const [index, line] of unformattedLines.entries()) {
    const formattedCode = hljs.highlight(line, {
      language
    }).value;
    addLine($code, formattedCode, index + 1)
  }
}
