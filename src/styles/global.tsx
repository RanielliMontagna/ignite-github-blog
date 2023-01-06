import { useTheme } from '@emotion/react'
import { Global as GlobalStyles, css } from '@emotion/react'

export default function Global() {
  const { colors } = useTheme()

  return (
    <GlobalStyles
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;

          font-family: 'Nunito', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        body {
          background-color: ${colors['base-background']};
          color: ${colors['base-text']};
        }
      `}
    />
  )
}
