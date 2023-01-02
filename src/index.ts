/* import Prism from 'prismjs'

const code = `const data = 'example'`

const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

console.log(html) */

export class CodeSample {
  theme: string
  samples: object

  constructor({theme, samples}) {
    this.theme = theme
    this.samples = samples
  }

  /**
   * Attach the generated CodeSample to the given
   * DOM selector
   * @param selector String
   */
  attachToElement(selector: string) {

  }

  /**
   * Gets the generated CodeSample as a String
   * @returns String
   */
  getHtml() {

  }

  /**
   * Add a new sample to the samples object
   * @param sampleKey string
   * @param options object
   */
  addSample(sampleKey: string, options: object) {

  }

  /**
   * Removes the given sample from samples object
   * @param sampleKey string
   */
  removeSample(sampleKey: string) {

  }

  /**
   * Hichlights the indicated block of code using
   * classes
   * @param sampleKey string
   * @param location Array<number>
   */
  highlightBlock(sampleKey: string, location: Array<number>) {

  }

  /**
   * Scrolls the view to the given location.
   * @param sampleKey string
   * @param location Array<number>
   */
  goToBlock(sampleKey: string, location: Array<number>) {
  }

  /**
   * Activates the sample with the given key.
   * @param sampleKey string
   */
  navigateToSample(sampleKey: string) {

  }
}