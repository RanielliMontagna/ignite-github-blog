import styled from '@emotion/styled'
import { toRem } from 'utils/toRem'

export const SearchFormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${toRem(12)};
`

export const InputLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  span {
    color: ${({ theme }) => theme.colors['base-span']};
  }
`
