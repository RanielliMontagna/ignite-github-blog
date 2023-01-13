import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'
import {
  FaCalendar,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
} from 'react-icons/fa'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ptBr from 'dayjs/locale/pt-br'

import { useGithubIssuesContext } from 'contexts/githubIssuesContext'
import {
  ContentContainer,
  InfoContainer,
  PostInfoContainer,
  PostInfoHeader,
  TitleContainer,
} from './styles'
import remarkGfm from 'remark-gfm'

dayjs.extend(relativeTime)
dayjs.locale(ptBr)

export function Issue() {
  const { issues } = useGithubIssuesContext()
  const _navigate = useNavigate()

  const id = window.location.pathname.split('/')[2]
  const issue = issues?.find((issue) => issue.id === Number(id))

  useEffect(() => {
    console.log(issue)
  }, [_navigate, issue])

  const _handleBack = () => {
    _navigate(-1)
  }

  const _handleOpenGithub = () => {
    window.open(issue?.html_url, '_blank')
  }

  return (
    <div>
      <PostInfoContainer>
        <PostInfoHeader>
          <button onClick={_handleBack}>
            <FaChevronLeft size={12} />
            Voltar
          </button>
          <button onClick={_handleOpenGithub}>
            Ver no github <FaExternalLinkAlt size={12} />
          </button>
        </PostInfoHeader>
        <TitleContainer>
          <h1>{issue?.title}</h1>
        </TitleContainer>
        <InfoContainer>
          <div>
            <FaGithub />
            <p>{issue?.user.login}</p>
          </div>
          <div>
            <FaCalendar />
            <p>{dayjs(issue?.created_at).fromNow()}</p>
          </div>
          <div>
            <FaComment />
            <p>
              {issue?.comments} comentário{issue?.comments !== 1 && 's'}
            </p>
          </div>
        </InfoContainer>
      </PostInfoContainer>
      <ContentContainer>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ node, ...props }) => <a target="_blank" {...props} />,
          }}
        >
          {issue?.body || ''}
        </ReactMarkdown>
      </ContentContainer>
    </div>
  )
}
