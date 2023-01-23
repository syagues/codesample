declare type sample = {
  fileName?: string
  language: string
  content: string
}

declare type samples = {
  [key: string]: sample
}

declare interface CodeSample {
  theme: string
  samples: samples
  attachToElement: (selector: string) => void
  getHtml: () => string
  addSample: (sampleKey: string, options: sample) => void
  removeSample: (sampleKey: string) => void
  highlightBlock: (sampleKey: string, location: Array<number>) => Promise<any>
  goToBlock: (sampleKey: string, location: Array<number>) => Promise<any>
  navigateToSample: (sampleKey: string) => Promise<any>
}
