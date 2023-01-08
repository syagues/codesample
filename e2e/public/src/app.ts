import { CodeSample } from './../../../dist/index.js'

const codeSample = new CodeSample({
  theme: 'nord',
  samples: {
    // Id
    sample: {
      language: 'javascript',
      fileName: 'sample.js', // optional
      content: `
// This is a comment
const foo = 'bar';
for (const item of array) {
  console.log(item);
}
      `
    }
  }
})

console.log(codeSample)

codeSample.attachToElement('.my-code-sample')
