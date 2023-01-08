import { generateCodeSamples } from './generator'
import { loadTheme } from './loader'

export class CodeSample {
  theme: string
  samples: samples

  constructor(options) {
    this.theme = options.theme || 'nord'
    this.samples = options.samples || {}

    loadTheme(this.theme)
  }

  /**
   * Attach the generated CodeSample to the given
   * DOM selector
   * @param selector String
   */
  async attachToElement(selector: string) {
    const $element: Element | null = document.querySelector(selector)
    if (!$element) throw new Error(`selector ${selector} is not in the DOM`)

    await generateCodeSamples($element, this.samples)
  }

  /**
   * Gets the generated CodeSample as a String
   * @returns String
   */
  async getHtml() {
    return ''
  }

  /**
   * Add a new sample to the samples object
   * @param sampleKey string
   * @param options object
   */
  addSample(sampleKey: string, options: sample) {
    if (this.samples[sampleKey])
      throw new Error(`Key [${sampleKey}] already existing`)
    if (!options.language) throw new Error('Language not defined')
    if (!options.content) throw new Error('Content not defined')

    this.samples[sampleKey] = options
  }

  /**
   * Removes the given sample from samples object
   * @param sampleKey string
   */
  removeSample(sampleKey: string) {
    if (!this.samples[sampleKey])
      throw new Error(`Key [${sampleKey}] not existing`)

    delete this.samples[sampleKey]
  }

  /**
   * Hichlights the indicated block of code using
   * classes
   * @param sampleKey string
   * @param location Array<number>
   */
  highlightBlock(sampleKey: string, location: Array<number>) {
    return Promise.resolve()
  }

  /**
   * Scrolls the view to the given location.
   * @param sampleKey string
   * @param location Array<number>
   */
  goToBlock(sampleKey: string, location: Array<number>) {
    return Promise.resolve()
  }

  /**
   * Activates the sample with the given key.
   * @param sampleKey string
   */
  navigateToSample(sampleKey: string) {
    return Promise.resolve()
  }
}
