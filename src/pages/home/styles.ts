import styled from '@emotion/styled'
import { toRem } from 'utils/toRem'

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${toRem(64)};
  padding-bottom: ${toRem(32)};
`

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${toRem(32)};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
