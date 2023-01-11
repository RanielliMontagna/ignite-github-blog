import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { throttle } from 'throttle-debounce'

import { InputLabelContainer, SearchFormContainer } from './styles'
import Input from 'components/input'
import { useGithubIssuesContext } from 'contexts/githubIssuesContext'

const SearchFormSchema = zod.object({
  search: zod.string().optional(),
})

export type SearchFormProps = zod.infer<typeof SearchFormSchema>

export function SearchForm() {
  const { fetchIssuesInfos } = useGithubIssuesContext()

  const { register } = useForm<SearchFormProps>({
    resolver: zodResolver(SearchFormSchema),
  })

  const handleGetIssues = throttle(
    200,
    (query: string) => {
      fetchIssuesInfos(query)
    },
    { noTrailing: false, noLeading: false },
  )

  return (
    <SearchFormContainer>
      <InputLabelContainer>
        <label htmlFor="search">Publicações</label>
        <span>6 publicações</span>
      </InputLabelContainer>
      <div>
        <Input
          type="text"
          id="search"
          placeholder="Buscar conteúdo"
          {...register('search')}
          onChange={(e) => handleGetIssues(e.target.value)}
        />
      </div>
    </SearchFormContainer>
  )
}
