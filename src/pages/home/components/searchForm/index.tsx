import { InputLabelContainer, SearchFormContainer } from './styles'
import { Input } from 'components/input'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <InputLabelContainer>
        <label htmlFor="search">Publicações</label>
        <span>6 publicações</span>
      </InputLabelContainer>
      <div>
        <Input type="text" id="search" placeholder="Buscar conteúdo" />
      </div>
    </SearchFormContainer>
  )
}
