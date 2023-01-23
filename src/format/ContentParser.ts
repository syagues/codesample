import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import DomFormatter from './DomFormatter'
import HtmlFormatter from './HtmlFormatter'

export default class ContentParser {
  formatter: DomFormatter | HtmlFormatter

  constructor($element?: Element ) {
    this.formatter = $element ? new DomFormatter($element) : new HtmlFormatter()
  }

  format(content: string, language: string) {
    return this.formatter.format(content, language)
  }
}