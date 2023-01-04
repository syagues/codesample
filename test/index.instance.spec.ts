import { expect, test } from 'vitest'
import { CodeSample } from '../src/index'

test('instance :: simple instance', () => {
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
  expect(codeSample.samples).toBeInstanceOf(Object)
  expect(Object.entries(codeSample.samples).length).toBe(1)
})
test('instance :: instance with no theme data should use the default', () => {
  const codeSample = new CodeSample({})
  
  expect(codeSample.theme).toBeTypeOf('string')
  expect(codeSample.theme).toBe('nord')
})
test('instance :: instance with no samples should raise no error', () => {
  const codeSample = new CodeSample({})
  
  expect(codeSample.samples).toBeInstanceOf(Object)
  expect(Object.entries(codeSample.samples).length).toBe(0)
})
