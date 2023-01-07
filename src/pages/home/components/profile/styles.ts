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
  display: grid;
  gap: ${toRem(24)};

  > div:first-of-type {
    display: grid;
    gap: ${toRem(8)};
  }

  h1 {
    font-size: ${toRem(24)};
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${toRem(8)};
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${toRem(12)};

  > a {
    color: ${({ theme }) => theme.colors.blue};

    svg {
      width: ${toRem(12)};
      height: ${toRem(12)};
    }

    cursor: pointer;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${toRem(24)};

  > div {
    display: flex;
    align-items: center;
    gap: ${toRem(8)};
  }

  svg {
    width: ${toRem(18)};
    height: ${toRem(18)};
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
