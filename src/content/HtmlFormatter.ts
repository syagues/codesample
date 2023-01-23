import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

export default class HtmlFormatter implements Formatter {
  format(content: string, language: string) {
    const code = this.generateCode()
    const unformattedLines = content.split('\n')
    const lines = [] 
    for (const [index, line] of unformattedLines.entries()) {
      const formattedCode = hljs.highlight(line, {
        language
      }).value;
      lines.push(this.addLine(formattedCode, index + 1))
    }

    return code.replace('$1', lines.join(''))
  }

  generateCode() {
    return `<pre><code>$1</code></pre>`
  }

  addLine(line: string, number: number) {
    return `<div class="line">${this.addLineNumber(number)}</span>${line}</div>`
  }

  addLineNumber(number: number) {
    return `<span class="line-number">${number}</span>`
  }
}