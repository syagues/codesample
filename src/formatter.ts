import { getHighlighter } from 'shiki'

export const format = async (content: string, language: string) => {
  const highlighter = await getHighlighter({})
  return highlighter.codeToHtml(content, { lang: language })  
}

const addLineNumbers = () => {
  console.log();
  
}