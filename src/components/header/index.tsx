import { HeaderContainer } from './styles'

import effect from 'assets/header/effect.svg'
import logo from 'assets/header/logo-with-text.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={effect} alt="" />
      <img src={logo} alt="Logo do projeto" />
      <img src={effect} alt="" />
    </HeaderContainer>
  )
}
