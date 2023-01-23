import Widget from './widget/Widget'

export const generateCodeSamples = (samples: samples, $element?: Element) => {
  const widget = new Widget($element)
  return widget.generateWidget(samples)
}