export default class DomNavigation {
  generateNavigation(samples: samples) {
    const $navigation = document.createElement('div')
    $navigation.classList.add('navigation')
    for (const sampleKey in samples) {
      const $sample = document.createElement('div')
      $sample.classList.add('navigation__sample')
      $sample.classList.add(sampleKey)
      const $span = document.createElement('span')
      $span.innerHTML = samples[sampleKey].fileName || sampleKey
      $sample.appendChild($span)
      $navigation.appendChild($sample)
    }
    return $navigation
  }
}