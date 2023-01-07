import styled from '@emotion/styled'
import { toRem } from 'utils/toRem'

export const SInput = styled.input`
  width: 100%;

  padding: ${toRem(12)} ${toRem(16)};
  font-size: ${toRem(16)};

  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  border-radius: ${toRem(6)};

  color: ${({ theme }) => theme.colors['base-text']};
  background-color: ${({ theme }) => theme.colors['base-input']};

  ::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
