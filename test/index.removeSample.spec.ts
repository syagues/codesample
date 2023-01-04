import { expect, test } from 'vitest'
import { CodeSample } from '../src/index'

test('removeSample :: remove an existing sample', () => {
  const codeSample = new CodeSample({
    samples: {
      sample: { 
        language: 'javascript',
        fileName: 'sample.js',
        content: `const foo = 'bar'` 
      }
    }
  })

  expect(codeSample.samples).toBeInstanceOf(Object)
  expect(Object.entries(codeSample.samples).length).toBe(1)
  expect(Object.keys(codeSample.samples)[0]).toBe('sample')

  codeSample.removeSample('sample')
  expect(Object.entries(codeSample.samples).length).toBe(0)
  expect(codeSample.samples.sample).toBeUndefined()
})
test('removeSample :: raise exception trying to remove non-existing sample', () => {
  expect.assertions(3)

  const codeSample = new CodeSample({})
  expect(codeSample.samples).toBeInstanceOf(Object)
  expect(Object.entries(codeSample.samples).length).toBe(0)

  try {
    codeSample.removeSample('sample')
  } catch (error) {
    expect(error.message).toBe('Key [sample] not existing')
  }
})
