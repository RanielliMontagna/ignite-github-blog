import styled from '@emotion/styled'
import { toRem } from 'utils/toRem'

export const PostInfoContainer = styled.div`
  display: grid;
  gap: ${toRem(8)};
  padding: ${toRem(32)};
  margin-top: -${toRem(96)};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  background: ${({ theme }) => theme.colors['base-profile']};
`

export const PostInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${toRem(12)};

  > button {
    background: none;
    border: none;

    display: flex;
    align-items: center;
    gap: ${toRem(8)};

    color: ${({ theme }) => theme.colors.blue};

    text-transform: uppercase;
    cursor: pointer;
  }
`

export const TitleContainer = styled.div`
  h1 {
    font-size: ${toRem(24)};
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${toRem(24)};

  @media (max-width: 600px) {
    flex-direction: column;
  }

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

export const ContentContainer = styled.div`
  padding: ${toRem(40)} ${toRem(32)};

  display: flex;
  flex-direction: column;
  gap: ${toRem(8)};

  h2,
  h3,
  strong {
    color: ${({ theme }) => theme.colors['base-title']};
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;

    &:visited {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  img {
    width: 100%;
  }
`
