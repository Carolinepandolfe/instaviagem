import styled, { css } from 'styled-components'

export const Header = styled.header`
	${({ theme }) => css`
		align-items: center;
		background-color: ${theme.base.white};
		display: flex;
		height: 3.75rem;
		padding: 0 10px;
		width: 100%;
	`}
`
