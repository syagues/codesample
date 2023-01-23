import ContentParser from './format/ContentParser'

export const generateDomCodeSamples = (
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
    const contentParser = new ContentParser($sample)
    contentParser.format(sample.content, sample.language)
    $wrapper.appendChild($sample)
  }
  $element.appendChild($wrapper)
}

export const generateHtmlCodeSamples = (
  samples: samples
) => {
  let html = `<div class="cs">`
  for (const sampleKey in samples) {
    const sample = samples[sampleKey]
    const contentParser = new ContentParser()
    const sampleHtml = `<div class="sample ${sampleKey}">
      ${contentParser.format(sample.content, sample.language)}
    </div>`
    html += sampleHtml
  }
  
  html += `</div>`

  return html
}