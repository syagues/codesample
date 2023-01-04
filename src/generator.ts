import Prism from 'prismjs'

export const generateHtmls = (codeSample: CodeSample) => {
  let html = '<div class="cs-samples">'
  for (const sampleKey in codeSample.samples) {
    const sample: sample = codeSample.samples[sampleKey]
    html += generateSampleHtml(sample)
  }
  html += '</div>'
  return html
}

export const generateSampleHtml = (sample: sample) => {
  const rawHtml = Prism.highlight(sample.content, Prism.languages[sample.language], sample.language);

  return rawHtml
}

export const injectLineNumbers = (html: string) => {
  return html
}