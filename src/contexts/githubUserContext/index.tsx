import { githubUserApi } from 'lib/axios'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import type {
  GithubUserContextProps,
  GithubUserContextProviderProps,
  User,
} from './types'

export const GithubUserContext = createContext({} as GithubUserContextProps)

export function GithubUserContextProvider({
  children,
}: GithubUserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  const handleGetUserInfos = useCallback(async (username: string) => {
    setLoading(true)

    try {
      const response = await githubUserApi.get(`/users/${username}`)

      setUser(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleGetUserInfos('raniellimontagna')
  }, [handleGetUserInfos])

  return (
    <GithubUserContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </GithubUserContext.Provider>
  )
}

export function useGithubUserContext() {
  const context = useContext(GithubUserContext)

  if (!context) {
    throw new Error(
      'useGithubUserContext must be used within a GithubUserContextProvider',
    )
  }

  return context
}
