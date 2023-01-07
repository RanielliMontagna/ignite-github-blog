import { githubRepoApi } from 'lib/axios'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import type {
  GithubIssuesContextProps,
  GithubIssuesContextProviderProps,
  Issue,
} from './types'

export const GithubIssuesContext = createContext({} as GithubIssuesContextProps)

export function GithubIssuesContextProvider({
  children,
}: GithubIssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issue[] | null>(null)
  const [loading, setLoading] = useState(false)

  const handleGetIssuesInfos = useCallback(async () => {
    setLoading(true)

    try {
      const response = await githubRepoApi.get('')

      setIssues(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleGetIssuesInfos()
  }, [handleGetIssuesInfos])

  return (
    <GithubIssuesContext.Provider
      value={{
        issues,
        loading,
      }}
    >
      {children}
    </GithubIssuesContext.Provider>
  )
}

export function useGithubIssuesContext() {
  const context = useContext(GithubIssuesContext)

  if (!context) {
    throw new Error(
      'useGithubIssuesContext must be used within a GithubIssuesContextProvider',
    )
  }

  return context
}
