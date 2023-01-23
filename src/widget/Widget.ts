import DomRenderer from './DomRenderer'
import HtmlGenerator from './HtmlGenerator'

export default class Widget {
  attendant: DomRenderer | HtmlGenerator

  constructor($element?: Element) {
    this.attendant = $element ? new DomRenderer($element) : new HtmlGenerator()
  }

  generateWidget(samples: samples) {
    return this.attendant.generateWidget(samples)
  }
}