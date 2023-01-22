import { expect, test } from 'vitest'
import { CodeSample } from '../src/index'
import { generateCodeSamples } from '../src/generator'
import jsContent from './samplesContent/javascript'

test('generateHtml :: generate sample HTML', async () => {
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
  
  const $element = document.createElement('div')
  const codeSample = new CodeSample(options)
  generateCodeSamples($element, codeSample.samples)
  
  expect($element).toMatchSnapshot()
})