import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from 'pages/home'
import { Issue } from 'pages/issue'

import DefaultLayout from 'layouts/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue/:issueId" element={<Issue />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}
