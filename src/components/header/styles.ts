import styled from '@emotion/styled'
import { toRem } from 'utils/toRem'

import cover from 'assets/header/cover.svg'

export const HeaderContainer = styled.div`
  width: 100%;
  height: ${toRem(296)};

  background-image: url(${cover});
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img:last-of-type {
    transform: scaleX(-1);
  }

  img:nth-of-type(2) {
    margin-top: ${toRem(64)};
    align-self: baseline;
  }

  @media (max-width: 966px) {
    justify-content: center;
    overflow: hidden;
  }
`
