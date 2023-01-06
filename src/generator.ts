import { format } from './formatter'

export const generateHtmls = async (codeSample: CodeSample) => {
  let html = ''
  for (const sampleKey in codeSample.samples) {
    const sample: sample = codeSample.samples[sampleKey]
    const sampleHtml = await generateSampleHtml(sample)
    html += `<div class="cs-sample" cs-id="${sampleKey}">${sampleHtml}</div>`
  }

  // Add pre-code wrapper
  html = `<div class="cs-wrapper">${html}</div>`
  return html
}

export const generateSampleHtml = async (sample: sample) => {
  return format(sample.content, sample.language)
}

export const injectLineNumbers = (html: string) => {
  return html
}