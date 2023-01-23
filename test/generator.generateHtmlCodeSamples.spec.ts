import { expect, test } from 'vitest'
import { CodeSample } from '../src/index'
import { generateHtmlCodeSamples } from '../src/generator'
import jsContent from './samplesContent/javascript'

test('generateDomCodeSamples :: generate sample HTML', async () => {
  const options = {
    theme: 'nord',
    samples: {
      // Id
      sample: {
        language: 'javascript',
        fileName: 'sample.js', // optional
        content: jsContent
      }
    }
  }
  
  const codeSample = new CodeSample(options)
  const html = generateHtmlCodeSamples(codeSample.samples)
  
  expect(html).toMatchSnapshot()
})