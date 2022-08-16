import { InputHTMLAttributes } from 'react'

import * as Styled from './styles'

type SearchProps = InputHTMLAttributes<HTMLInputElement>

const Search = ({ ...props }: SearchProps) => {
	return (
		<Styled.InputContainer>
			<Styled.Input
				type="text"
				placeholder="Procure por sua experiência"
				{...props}
			/>
			<Styled.Label>Procure por sua experiência</Styled.Label>
		</Styled.InputContainer>
	)
}

export default Search
