import React from 'react'
import { SInput } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return <SInput {...props} />
}
