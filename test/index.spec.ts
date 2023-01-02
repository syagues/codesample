import { expect, test } from 'vitest'
import { CodeSample } from '../src/index'

test('code sample instance', () => {
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
  expect(codeSample.theme).toBeTypeOf('string')
  expect(codeSample.theme).toBe('nord')
})
