import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as Styled from './styles'

type FilterProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	label: string
	active: string
	children: ReactNode
}

const Filter = ({ label, active, children, ...props }: FilterProps) => {
	const activeButton = active === label

	return (
		<Styled.Button active={activeButton} {...props}>
			<Styled.Span active={activeButton}>{children}</Styled.Span>
		</Styled.Button>
	)
}

export default Filter
