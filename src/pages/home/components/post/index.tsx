import { PostContainer } from './styles'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ptBr from 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale(ptBr)

interface PostProps {
  id: number
  title: string
  body: string
  updated_at: string
}

export function Post(props: PostProps) {
  return (
    <PostContainer>
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
