import { useMemo } from 'react'
import {
  EmptyContainer,
  HomeContainer,
  LoadingContainer,
  PostsContainer,
} from './styles'

import { Post } from './components/post'
import { Profile } from './components/profile'
import { SearchForm } from './components/searchForm'
import { useGithubIssuesContext } from 'contexts/githubIssuesContext'
import { CircularLoading } from 'components/circularLoading'

import EmptyImage from 'assets/issues/empty.svg'

export function Home() {
  const { issues, loading } = useGithubIssuesContext()

  const content = useMemo(() => {
    const emptyIssues = issues?.length === 0

    if (loading) {
      return (
        <LoadingContainer>
          <CircularLoading />
        </LoadingContainer>
      )
    }

    if (emptyIssues) {
      return (
        <EmptyContainer>
          <img src={EmptyImage} alt="Nenhuma issue encontrada" />
          <div>
            <h1>Nenhuma issue encontrada</h1>
            <p>
              Tente pesquisar por outra palavra-chave ou tente novamente mais
              tarde
            </p>
          </div>
        </EmptyContainer>
      )
    }

    return (
      <PostsContainer>
        {issues?.map((issue) => (
          <Post
            key={issue.id}
            body={issue.body}
            id={issue.id}
            title={issue.title}
            updated_at={issue.updated_at}
          />
        ))}
      </PostsContainer>
    )
  }, [issues, loading])

  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      {content}
    </HomeContainer>
  )
}
