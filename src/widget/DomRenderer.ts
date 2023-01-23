import DomFormatter from './../content/DomFormatter'
import DomNavigation from '../navigation/DomNavigation'

export default class DomRenderer implements Renderer {
  $element: Element

  constructor($element: Element) {
    this.$element = $element
  }

  generateWidget(samples: samples) {
    const $wrapper = this.generateWrapper()
    this.generateNavigation(samples, $wrapper)
    this.generateSamples(samples, $wrapper)
    this.$element.appendChild($wrapper)

    return this.$element
  }

  generateWrapper() {
    const $wrapper = document.createElement('div')
    $wrapper.classList.add('cs')
    return $wrapper
  }

  generateNavigation(samples: samples, wrapper: Element) {
    const $navigation = new DomNavigation().generateNavigation(samples)
    wrapper.appendChild($navigation)
  }

  generateSamples(samples: samples, wrapper: Element) {
    const $samples = document.createElement('div')
    $samples.classList.add('samples')
    for (const sampleKey in samples) {
      const $sample: Element = document.createElement('div')
      $sample.classList.add('sample')
      $sample.classList.add(sampleKey)
      const sample = samples[sampleKey]
      const formatter = new DomFormatter($sample)
      console.log(sample.content);
      
      formatter.format(sample.content, sample.language)
      $samples.appendChild($sample)
    }
    wrapper.appendChild($samples)
  }
}