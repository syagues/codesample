import defTheme from './themes/solarized.css?inline'

export const loadTheme = (theme: string) => {
  if (theme === 'nord') {
    const $style = document.createElement('style')
    $style.id = 'csTheme'
    $style.innerHTML = defTheme
    document.head.appendChild($style)
  }
}
