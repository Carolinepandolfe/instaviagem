import styled, { keyframes, css } from 'styled-components'

import { rgba } from 'polished'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
	${({ theme }) => css`
		height: 50px;
		width: 50px;
		border-radius: 100%;
		border-style: solid;
		border-width: 0.25rem;
		border-color: ${rgba(theme.base.blue, 0.8)};
		border-top-color: #2a76f1;
		animation: ${rotate} 0.75s infinite;
	`}
`
