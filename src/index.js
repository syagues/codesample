import Prism from 'prismjs'

const code = `const data = 'example'`

const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');