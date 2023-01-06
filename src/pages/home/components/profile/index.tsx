import {
  ImageContainer,
  ProfileContainer,
  ProfileInfoContainer,
} from './styles'

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
          <h1>Ranielli Montagna</h1>
          <a>Github</a>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo
          odit sequi ut consequuntur qui reprehenderit!
        </p>
      </ProfileInfoContainer>
    </ProfileContainer>
  )
}
