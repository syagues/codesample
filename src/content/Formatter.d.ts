interface Formatter {
  format(content: string, language: string): void|string,
  generateCode(): Element|string,
  addLine(line: string, number: number, $code?: Element): Element|string,
  addLineNumber(number: number, $line?: Element): void|string
}