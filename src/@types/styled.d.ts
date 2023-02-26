import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      background: string
      text_input: string
      text_label: string

      border_bottom: string

      line_arrow: string
      bulleted: string

      buttons: string
    }
  }
}
