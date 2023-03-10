# Ideas

The idea of this library is to be able to make a code block with a couple
of themes and capable of diferent rich modes of display. Totally configurable
and stylable.

It should be something like:

```javascript
import { CodeSample } from 'codesample'

const options = {
  theme: 'nord'
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
```

This will generate a dom element (or string) with the proper content.

```javascript
codeSample.attachToElement('.selector')

const html = codeSample.getHtml()
```

If it only has one sample, it will display just the sample in a minimal
way. When it has more than one, will display a navbar to switch between
samples.

You should be able to also add or remove samples on the fly.

```javascript
const options = {
  language: 'python',
  fileName: 'example.py'
  content: `foo = "bar"`
}
await codeSample.addSample('python', options)

await codeSample.removeSample('python')
```

It will also have some methods to interact with code. e.g:

```javascript
await codeSample.highlightBlock('sample', [31,46])
```
This method will scroll and highlight only the lines sent in the
second parameter.

```javascript
await codeSample.goToBlock('sample', [31,46])
```
This method will navigate and scroll to the lines sent in the second parameter.

```javascript
await codeSample.navigateToSample('sample')
```
This method will navigate to the sample sent.

# Todo

Things to do:

- [x] getHtml method
- [x] Samples navigation
- [ ] Navigation + active states and interactivity
- [ ] Fill other methods (Client side only most of them).
- [ ] Unit test everything 😊
- [ ] Setup CI with github actions 🌞🌴
- [ ] Should not expose attachToElement in the Node side
- [ ] Fill the styles with all the subclasses and elements
- [ ] Try different languages
- [ ] Workaround usage with different themes (should be loaded async)
- [ ] Color configuration? Everything with vars (why not?)
- [ ] Make e2e usecase with client/server usage
- [ ] Content copy button