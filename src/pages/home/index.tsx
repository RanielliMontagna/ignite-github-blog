import { Profile } from './components/profile'
import { SearchForm } from './components/searchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
    </HomeContainer>
  )
}
