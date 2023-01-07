import { Global as GlobalStyles, css, useTheme } from '@emotion/react'

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

        :focus {
          outline: none;
          box-shadow: 0 0 0 1px ${colors.blue};
          transition: box-shadow 0.1s ease-in-out;
        }

        ::-webkit-scrollbar {
          width: 0.3rem;
          height: 0.3rem;
        }

        ::-webkit-scrollbar-track {
          background: ${colors['base-input']};
        }

        ::-webkit-scrollbar-thumb {
          background: ${colors['base-label']};
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${colors.blue};
        }
      `}
    />
  )
}
