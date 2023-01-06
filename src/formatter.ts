import Prism from 'prismjs'

export const setup = () => {
  Prism.hooks.add('before-highlight', (env) => {
    addLineNumbers(env.grammar);
  });
}

export const format = (content: string, language: string) => {
  return Prism.highlight(content, Prism.languages[language], language);
}

const addLineNumbers = (grammar) => {
  console.log(grammar);
  
}