import HtmlFormatter from './../content/HtmlFormatter'

export default class HtmlGenerator {
  generateWidget(samples: samples) {
    return this.generateSamples(samples, this.generateWrapper())
  }

  generateWrapper() {
    return `<div class="cs">$1</div>`
  }

  generateSamples(samples: samples, wrapper: string) {
    const formattedSamples = []
    for (const sampleKey in samples) {
      const sample = samples[sampleKey]
      const formatter = new HtmlFormatter()
      formattedSamples.push(
        `<div class="sample ${sampleKey}">${formatter.format(sample.content, sample.language)}</div>`)
    }
    return wrapper.replace('$1', formattedSamples.join(''))
  }
}