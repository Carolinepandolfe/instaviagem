import styled, { css } from 'styled-components'

export const Button = styled.button`
	${({ theme }) => css`
		align-items: center;
		background: transparent;
		border-radius: 0.5rem;
		border: 2px solid white;
		color: white;
		display: flex;
		font-size: 1rem;
		font-weight: 900;
		height: 3.125rem;
		justify-content: center;
		text-transform: uppercase;
		transition: background 0.2s;
		width: 150px;

		&:hover {
			background: ${theme.base.blue};
		}
	`}
`
