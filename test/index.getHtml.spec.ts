import { expect, test } from 'vitest'
import { CodeSample } from '../src/index'

test('getHtml :: get 1 sample html', () => {
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
  const html = codeSample.getHtml()
  expect(html).toMatchSnapshot()
})