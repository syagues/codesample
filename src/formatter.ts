import shiki from 'shiki'

export const format = async (content: string, language: string) => {
  const highlighter = await shiki.getHighlighter({})
  return highlighter.codeToHtml(content, { lang: language })  
}

const addLineNumbers = () => {
  console.log();
  
}