interface Renderer {
  generateWidget(samples: samples): string | Element,
  generateWrapper(): string | Element,
  generateNavigation(samples: samples, wrapper: string | Element): string | void,
  generateSamples(samples: samples, wrapper: string | Element): string | void
}