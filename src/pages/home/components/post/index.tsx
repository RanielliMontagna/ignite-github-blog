import { PostContainer } from './styles'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ptBr from 'dayjs/locale/pt-br'
import { useNavigate } from 'react-router-dom'

dayjs.extend(relativeTime)
dayjs.locale(ptBr)

interface PostProps {
  id: number
  title: string
  body: string
  updated_at: string
}

export function Post(props: PostProps) {
  const _navigate = useNavigate()

  return (
    <PostContainer onClick={() => _navigate(`/issue/${props.id}`)}>
      <div>
        <h2>{props.title}</h2>
        <span>{dayjs(props.updated_at).fromNow()}</span>
      </div>
      <div>
        <p>{props.body.split('\r\n')[0]}</p>
      </div>
    </PostContainer>
  )
}
