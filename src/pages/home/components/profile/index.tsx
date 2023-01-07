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
import { useGithubUserContext } from 'contexts/githubUserContext'
import { Loader } from 'components/skeletonLoading/styles'

export function Profile() {
  const { user, loading } = useGithubUserContext()

  if (loading) {
    return (
      <ProfileContainer>
        <Loader />
      </ProfileContainer>
    )
  }

  return (
    <ProfileContainer>
      <ImageContainer>
        <img src={user?.avatar_url} alt={user?.name} />
      </ImageContainer>
      <ProfileInfoContainer>
        <div>
          <HeaderContainer>
            <h1>{user?.name}</h1>
            <a href={user?.html_url} target="_blank" rel="noreferrer">
              Github <FaExternalLinkAlt />
            </a>
          </HeaderContainer>
          <p>{user?.bio}</p>
        </div>
        <InfoContainer>
          <div>
            <FaGithub />
            <p>{user?.public_repos} repositórios</p>
          </div>
          <div>
            <FaBuilding />
            <p>{user?.company}</p>
          </div>
          <div>
            <FaUserFriends />
            <p>{user?.followers} seguidores</p>
          </div>
        </InfoContainer>
      </ProfileInfoContainer>
    </ProfileContainer>
  )
}
