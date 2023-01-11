import { toRem } from 'utils/toRem'
import styled from '@emotion/styled'

export const PostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-post']};
  padding: ${toRem(32)};
  border-radius: ${toRem(10)};

  display: grid;
  grid-template-columns: 1fr;
  gap: ${toRem(20)};

  div:first-of-type {
    display: flex;
    gap: ${toRem(16)};

    color: ${({ theme }) => theme.colors['base-title']};

    h2 {
      font-size: ${toRem(20)};
    }

    span {
      font-size: ${toRem(14)};
      white-space: nowrap;
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }

  div:last-of-type {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${toRem(16)};
  }

  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors['base-label']};
  }
`
