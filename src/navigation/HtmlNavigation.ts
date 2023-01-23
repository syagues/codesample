export default class HtmlNavigation {
  generateNavigation(samples: samples) {
    const navigation = []
    for (const sampleKey in samples) {
      navigation.push(`<div class="navigation__sample ${sampleKey}"><span>${samples[sampleKey].fileName || sampleKey}</span></div>`)
    }
    return `<div class="navigation">${navigation.join('')}</div>`
  }
}