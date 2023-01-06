import { expect, test } from 'vitest'
import { CodeSample } from '../src/index'
import { generateHtmls } from '../src/generator'
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
  
  const codeSample = new CodeSample(options)
  const html: string = await generateHtmls(codeSample)
  
  expect(html).toMatchSnapshot()
})