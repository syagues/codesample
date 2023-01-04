import { expect, test } from 'vitest'
import { CodeSample } from '../src/index'
import { generateHtmls } from '../src/generator'

test('generateHtml :: generate sample HTML', () => {
  const options = {
    theme: 'nord',
    samples: {
      // Id
      sample: {
        language: 'javascript',
        fileName: 'sample.js', // optional
        content: `const foo = 'bar'`
      }
    }
  }
  
  const codeSample = new CodeSample(options)
  
  expect(generateHtmls(codeSample)).toMatchSnapshot()
})