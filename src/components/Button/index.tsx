import { ButtonHTMLAttributes } from 'react'

import * as Styled from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ ...props }: ButtonProps) => {
	return <Styled.Button {...props} />
}

export default Button
