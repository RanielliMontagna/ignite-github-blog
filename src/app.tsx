import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from 'styles/themes/default'
import { Router } from 'routes/router'
import Global from 'styles/global'
import { GithubUserContextProvider } from 'contexts/githubUserContext'
import { GithubIssuesContextProvider } from 'contexts/githubIssuesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GithubUserContextProvider>
        <GithubIssuesContextProvider>
          <BrowserRouter>
            <Router />
            <Global />
          </BrowserRouter>
        </GithubIssuesContextProvider>
      </GithubUserContextProvider>
    </ThemeProvider>
  )
}

export default App
