import styled from '@emotion/styled'
import { toRem } from 'utils/toRem'

export const ProfileContainer = styled.div`
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin-top: -${toRem(32)};
  padding: ${toRem(32)} ${toRem(40)};

  display: flex;
  align-items: center;
  gap: ${toRem(32)};
`

export const ImageContainer = styled.div`
  img {
    width: ${toRem(148)};
    height: ${toRem(148)};
    border-radius: 8px;
  }
`

export const ProfileInfoContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
`
