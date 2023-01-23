import { expect, test } from 'vitest'
import { CodeSample } from '../src/index'
import { generateCodeSamples } from '../src/generator'
import jsContent from './samplesContent/javascript'

test('generateCodeSamples :: generate sample with DOM manipulation', async () => {
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
  generateCodeSamples(codeSample.samples, $element)
  
  expect($element).toMatchSnapshot()
})

test('generateCodeSamples :: generate sample with plain HTML', async () => {
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
  const html = generateCodeSamples(codeSample.samples)
  
  expect(html).toMatchSnapshot()
})