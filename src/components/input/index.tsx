import React, { forwardRef } from 'react'
import { SInput } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps, ref: any) {
  return <SInput {...props} />
}

export default forwardRef(Input)
