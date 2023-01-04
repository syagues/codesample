import { expect, test } from 'vitest'
import { CodeSample } from '../src/index'

test('attachToElement :: attach to dom element', () => {
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
})