import { expect, test } from 'vitest'
import { format } from '../src/formatter'
import jsContent from './samplesContent/javascript'

/* npx vitest test/formatter.format.spec.ts */
/**
 * @vitest-environment jsdom
 */
test('format :: line Numbers', async () => {
  const content: string = jsContent
  
  const formatted = await format(content, 'javascript')
  console.log(formatted);
  
  
  
})