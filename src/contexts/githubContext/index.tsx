import { githubApi } from 'lib/axios'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import type {
  GithubContextProps,
  GithubContextProviderProps,
  User,
} from './types'

export const GithubContext = createContext({} as GithubContextProps)

export function GithubContextProvider({
  children,
}: GithubContextProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  const handleGetUserInfos = useCallback(async (username: string) => {
    setLoading(true)

    try {
      const response = await githubApi.get(`/users/${username}`)

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
    <GithubContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export function useGithubContext() {
  const context = useContext(GithubContext)

  if (!context) {
    throw new Error(
      'useGithubContext must be used within a GithubContextProvider',
    )
  }

  return context
}
