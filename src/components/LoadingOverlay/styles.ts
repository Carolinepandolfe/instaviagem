import styled, { css } from 'styled-components'

import { rgba } from 'polished'

export const Container = styled.div`
	${({ theme }) => css`
		align-items: center;
		backdrop-filter: blur(2px);
		background-color: ${rgba(theme.base.gray, 0.2)};
		display: flex;
		flex-direction: column;
		height: 100%;
		inset: 0;
		justify-content: center;
		place-items: center;
		position: fixed;
		z-index: 10;
	`}
`
