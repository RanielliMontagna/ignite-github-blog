import { HomeContainer, PostsContainer } from './styles'

import { Post } from './components/post'
import { Profile } from './components/profile'
import { SearchForm } from './components/searchForm'
import { useGithubIssuesContext } from 'contexts/githubIssuesContext'
import { CircularLoading } from 'components/circularLoading'

export function Home() {
  const { issues, loading } = useGithubIssuesContext()

  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      {loading ? (
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <CircularLoading />
        </div>
      ) : (
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
      )}
    </HomeContainer>
  )
}
