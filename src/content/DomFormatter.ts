import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

export default class DomFormatter implements Formatter {
  $element: Element

  constructor($element: Element ) {
    this.$element = $element
  }

  format(content: string, language: string) {
    const $code = this.generateCode()
    const unformattedLines = content.split('\n')
    for (const [index, line] of unformattedLines.entries()) {
      const formattedCode = hljs.highlight(line, {
        language
      }).value;
      this.addLine(formattedCode, index + 1, $code)
    }
  }

  generateCode() {
    const $pre = document.createElement('pre')
    const $code = document.createElement('code')
    $pre.appendChild($code)
    this.$element.appendChild($pre)

    return $code
  }

  addLine(line: string, number: number, $code: Element) {
    const $line = document.createElement('div')
    $line.classList.add('line')
    this.addLineNumber(number, $line)
    $line.innerHTML += line
    $code.appendChild($line)

    return $line
  }

  addLineNumber(number: number, $line: Element) {
    const $number = document.createElement('span')
    $number.classList.add('line-number')
    $number.innerHTML = number.toString()
    $line.appendChild($number)
  }
}