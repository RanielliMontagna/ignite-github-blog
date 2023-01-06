import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from 'styles/themes/default'
import { Router } from 'routes/router'
import Global from 'styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <Global />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
