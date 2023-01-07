import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from 'styles/themes/default'
import { Router } from 'routes/router'
import Global from 'styles/global'
import { GithubContextProvider } from 'contexts/githubContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GithubContextProvider>
        <BrowserRouter>
          <Router />
          <Global />
        </BrowserRouter>
      </GithubContextProvider>
    </ThemeProvider>
  )
}

export default App
