import { format } from './formatter'

export const generateHtmls = (codeSample: CodeSample) => {
  let html = ''
  for (const sampleKey in codeSample.samples) {
    const sample: sample = codeSample.samples[sampleKey]
    html += `<div class="cs-sample" cs-id="${sampleKey}">${generateSampleHtml(sample)}</div>`
  }

  // Add pre-code wrapper
  html = `<pre><code class="cs-wrapper">${html}</code></pre>`
  return html
}

export const generateSampleHtml = (sample: sample) => {
  return format(sample.content, sample.language)
}

export const injectLineNumbers = (html: string) => {
  return html
}