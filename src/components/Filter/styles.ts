import styled, { css } from 'styled-components'

type FilterProps = {
	active: boolean
}

export const Button = styled.button<FilterProps>`
	${({ theme, active }) => css`
		align-items: center;
		border: 2px solid ${theme.base.blue};
		cursor: pointer;
		display: flex;
		font-size: 1rem;
		height: 2.8125rem;
		justify-content: center;
		transition: border-color 0.2s, color 0.2s;
		min-width: 80px;
		border-radius: 10px;
		padding: 0 0.625rem;
		background-color: ${active ? theme.base.blue : theme.base.white};

		&:hover {
			background: ${theme.base.blue};

			span {
				color: ${theme.base.white};
				font-weight: 900;
			}
		}
	`}
`
export const Span = styled.span<FilterProps>`
	${({ theme, active }) => css`
		color: ${active ? theme.base.white : theme.base.black};
		font-weight: ${active ? 900 : 500};
		letter-spacing: 0.03em;
		text-transform: capitalize;
	`}
`
