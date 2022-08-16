import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`

export const Input = styled.input`
	${({ theme }) => css`
		padding: 0 10px;
		height: 40px;
		width: 100%;
		border: 2px solid ${theme.base.blue};
		border-radius: 5px;
		color: ${theme.base.black};
		transition: border-color 0.2s ease-out;

		&::placeholder {
			color: transparent;
		}

		&:focus {
			border-color: ${theme.base.blue};
		}
	`}
`

export const Label = styled.label`
	${({ theme }) => css`
		padding: 0 5px;
		position: absolute;
		top: 50%;
		left: 10px;
		font-size: 16px;
		color: ${theme.base.black};
		pointer-events: none;
		transform: translateY(-50%);
		transition: all 0.2s ease-out;

		input:focus + &,
		input:not(:placeholder-shown) + & {
			top: 0;
			background: ${theme.base.white};
			font-size: 14px;
		}
	`}
`
