import { toRem } from 'utils/toRem'
import styled from '@emotion/styled'

export const Loader = styled.span`
  width: 100%;
  height: calc(${toRem(218)} - ${toRem(64)});
  display: block;
  position: relative;
  background-image: linear-gradient(
      100deg,
      transparent,
      rgba(38, 50, 56, 0.5) 50%
    ),
    linear-gradient(
      ${({ theme }) => theme.colors['base-border']},
      30px,
      transparent 0
    ),
    linear-gradient(
      ${({ theme }) => theme.colors['base-border']} 60px,
      transparent 0
    );

  background-repeat: no-repeat;
  background-size: 75px 100px, 60% 30px, 100% 60px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;

  ::after {
    content: '';
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors['base-border']};
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes animloader {
    0% {
      background-position: 0% 0, 170px 0, 170px 40px, 170px 80px;
    }
    100% {
      background-position: 100% 0, 170px 0, 170px 40px, 170px 80px;
    }
  }
`
