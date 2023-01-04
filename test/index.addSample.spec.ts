import { expect, test } from 'vitest'
import { CodeSample } from '../src/index'

test('addSample :: Add a sample to the object', () => {  
  const codeSample = new CodeSample({})

  codeSample.addSample('sample', { 
    language: 'javascript',
    fileName: 'sample.js',
    content: `const foo = 'bar'` 
  })

  expect(codeSample.samples).toBeInstanceOf(Object)
  expect(Object.entries(codeSample.samples).length).toBe(1)
  expect(Object.keys(codeSample.samples)[0]).toBe('sample')

  expect(codeSample.samples.sample.language).toBe('javascript')
  expect(codeSample.samples.sample.fileName).toBe('sample.js')
  expect(codeSample.samples.sample.content).toBe(`const foo = 'bar'`)
})
test('addSample :: raise exception trying to add an existing sample', () => {
  expect.assertions(1)
  const codeSample = new CodeSample({
    samples: {
      sample: { 
        language: 'javascript',
        fileName: 'sample.js',
        content: `const foo = 'bar'` 
      }
    }
  })

  try {
    codeSample.addSample('sample', { 
      language: 'javascript',
      content: `const foo = 'bar'` 
    })
  } catch (error) {
    expect(error.message).toBe('Key [sample] already existing')
  }
})
test('addSample :: raise exception trying to add a sample with no language', () => {
  expect.assertions(1)
  const codeSample = new CodeSample({})

  try {
    // @ts-ignore
    codeSample.addSample('sample', { 
      content: `const foo = 'bar'` 
    })
  } catch (error) {
    expect(error.message).toBe('Language not defined')
  }
})
test('addSample :: raise exception trying to add a sample with no content', () => {
  expect.assertions(1)
  const codeSample = new CodeSample({})

  try {
    // @ts-ignore
    codeSample.addSample('sample', { 
      language: `javascript` 
    })
  } catch (error) {
    expect(error.message).toBe('Content not defined')
  }
})