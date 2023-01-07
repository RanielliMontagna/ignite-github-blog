import {
  HeaderContainer,
  ImageContainer,
  InfoContainer,
  ProfileContainer,
  ProfileInfoContainer,
} from './styles'

import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
} from 'react-icons/fa'

export function Profile() {
  return (
    <ProfileContainer>
      <ImageContainer>
        <img
          src="https://github.com/RanielliMontagna.png"
          alt="Rani Montagna"
        />
      </ImageContainer>
      <ProfileInfoContainer>
        <div>
          <HeaderContainer>
            <h1>Ranielli Montagna</h1>
            <a>
              Github <FaExternalLinkAlt />
            </a>
          </HeaderContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo
            odit sequi ut consequuntur qui reprehenderit!
          </p>
        </div>
        <InfoContainer>
          <div>
            <FaGithub />
            <p>rannimontagna</p>
          </div>
          <div>
            <FaBuilding />
            <p>SB Sistemas</p>
          </div>
          <div>
            <FaUserFriends />
            <p>32 seguidores</p>
          </div>
        </InfoContainer>
      </ProfileInfoContainer>
    </ProfileContainer>
  )
}
