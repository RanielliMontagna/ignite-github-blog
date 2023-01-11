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

  const fetchIssuesInfos = useCallback(async (query: string = '') => {
    setLoading(true)

    try {
      const response = await githubRepoApi.get('', {
        params: {
          q: query + 'is:issue repo:RanielliMontagna/ignite-github-blog',
        },
      })

      setIssues(response.data?.items)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchIssuesInfos()
  }, [fetchIssuesInfos])

  return (
    <GithubIssuesContext.Provider
      value={{
        issues,
        loading,
        fetchIssuesInfos,
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
