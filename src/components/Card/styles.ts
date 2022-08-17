import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export const Card = styled.figure`
	border-radius: 0.625rem;
	height: 350px;
	overflow: hidden;
	position: relative;
	width: 28.125rem;

	img {
		height: 100%;
		object-fit: cover;
		overflow: hidden;
		width: 100%;
	}
`
export const Overlay = styled.div`
	${({ theme }) => css`
		background-color: ${rgba(theme.base.blue, 0.4)};
		font-size: 2rem;
		inset: 0;
		object-fit: contain;
		position: absolute;
	`}
`

export const Content = styled.div`
	align-items: center;
	color: white;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	height: 100%;
	justify-content: center;
	width: 100%;
	padding: 0 40px;
`
export const Name = styled.h1`
	font-size: 1.5625rem;
	font-weight: 900;
`

export const Price = styled.p`
	font-size: 2.1875rem;
	font-weight: 700;

	span {
		font-size: 1.25rem;
	}
`
