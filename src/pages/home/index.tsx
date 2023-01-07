import { HomeContainer, PostsContainer } from './styles'

import { Post } from './components/post'
import { Profile } from './components/profile'
import { SearchForm } from './components/searchForm'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <PostsContainer>
        {new Array(9).fill(0).map((_, index) => (
          <Post key={index} />
        ))}
      </PostsContainer>
    </HomeContainer>
  )
}
