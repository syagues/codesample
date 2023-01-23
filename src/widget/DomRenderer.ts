import DomFormatter from './../content/DomFormatter'

export default class DomRenderer {
  $element: Element

  constructor($element: Element) {
    this.$element = $element
  }

  generateWidget(samples: samples) {
    const $wrapper = this.generateWrapper()
    this.generateSamples(samples, $wrapper)
    this.$element.appendChild($wrapper)
  }

  generateWrapper() {
    const $wrapper = document.createElement('div')
    $wrapper.classList.add('cs')
    return $wrapper
  }

  generateSamples(samples: samples, $wrapper: Element) {
    for (const sampleKey in samples) {
      const $sample: Element = document.createElement('div')
      $sample.classList.add('sample')
      $sample.classList.add(sampleKey)
      const sample = samples[sampleKey]
      const formatter = new DomFormatter($sample)
      console.log(sample.content);
      
      formatter.format(sample.content, sample.language)
      $wrapper.appendChild($sample)
    }
  }
}