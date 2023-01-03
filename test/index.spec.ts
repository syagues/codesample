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
