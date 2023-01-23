import HtmlFormatter from './../content/HtmlFormatter'
import HtmlNavigation from '../navigation/HtmlNavigation'

export default class HtmlGenerator implements Renderer {
  generateWidget(samples: samples) {
    let wrapper = this.generateWrapper()
    wrapper = this.generateNavigation(samples, wrapper)
    return this.generateSamples(samples, wrapper)
  }

  generateWrapper() {
    return `<div class="cs">$1</div>`
  }

  generateNavigation(samples: samples, wrapper: string) {
    return wrapper.replace('$1', `${new HtmlNavigation().generateNavigation(samples)}$1`)
  }

  generateSamples(samples: samples, wrapper: string) {
    const formattedSamples = []
    for (const sampleKey in samples) {
      const sample = samples[sampleKey]
      const formatter = new HtmlFormatter()
      formattedSamples.push(
        `<div class="sample ${sampleKey}">${formatter.format(sample.content, sample.language)}</div>`)
    }
    return wrapper.replace('$1', `<div class="samples">${formattedSamples.join('')}</div>`)
  }
}