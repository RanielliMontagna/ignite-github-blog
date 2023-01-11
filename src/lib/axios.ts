import axios from 'axios'

export const githubUserApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
})

export const githubRepoApi = axios.create({
  baseURL: 'https://api.github.com/search/issues',
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
})
