import { format } from './formatter'

export const generateCodeSamples = async (
  $element: Element,
  samples: samples
) => {
  const $wrapper = document.createElement('div')
  $wrapper.classList.add('cs')
  for (const sampleKey in samples) {
    const $sample: Element = document.createElement('div')
    $sample.classList.add('sample')
    $sample.classList.add(sampleKey)
    const sample = samples[sampleKey]
    format($sample, sample.content, sample.language)
    $wrapper.appendChild($sample)
  }
  $element.appendChild($wrapper)
}
