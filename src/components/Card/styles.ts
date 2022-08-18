import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { MdClose } from 'react-icons/md'

export const Card = styled.figure`
	border-radius: 0.625rem;
	overflow: hidden;
	position: relative;

	img {
		height: 100%;
		object-fit: cover;
		overflow: hidden;
		width: 100%;
	}

	@media (min-width: 768px) {
		height: 300px;
	}

	@media (min-width: 968px) {
		height: 250px;
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

export const ModalOverlay = styled.div`
	${({ theme }) => css`
		position: fixed;
		inset: 0;
		display: grid;
		place-items: center;
		backdrop-filter: blur(2px);
		background-color: ${rgba(theme.base.gray, 0.4)};
		z-index: 100;
		padding: 0 1.25rem;
	`}
`

export const ModalContainer = styled.main`
	${({ theme }) => css`
		align-items: center;
		background-color: ${theme.base.white};
		border-radius: 0.625rem;
		display: flex;
		flex-direction: column;
		height: 25rem;
		padding: 26px;
		position: relative;
		width: clamp(300px, 100%, 730px);
	`}

	@media (min-width: 600px) {
		height: 340px;
		width: 510px;
	}

	@media (min-width: 768px) {
		height: 370px;
	}

	@media (min-width: 1024px) {
		height: 392px;
		width: 610px;
	}

	@media (min-width: 1440px) {
		height: 461px;
		width: 730px;
	}
`
export const Header = styled.header`
	display: flex;
	align-items: center;

	h1 {
		font-size: 1.5rem;
		font-weight: 900;
	}
`

export const CloseButton = styled.button`
	${({ theme }) => css`
		position: absolute;
		right: 2.25rem;
		min-height: 26px;
		min-width: 26px;
		display: grid;
		place-items: center;
		background-color: ${theme.base.blue};
		border-radius: 5px;
	`}
`

export const CloseIcon = styled(MdClose)`
	${({ theme }) => css`
		color: ${theme.base.white};
	`}
`

export const ContentModal = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	gap: 1.25rem;

	p {
		align-self: flex-start;
		font-size: 1rem;
		font-weight: 400;
		margin-top: 0.3125rem;

		@media (min-width: 600px) {
			align-self: center;
		}
	}
`

export const FooterModal = styled.footer`
	${({ theme }) => css`
		p {
			display: flex;
			align-items: center;
			gap: 10px;

			svg {
				color: ${theme.base.blue};
			}
		}

		@media (min-width: 500px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			margin: 0 auto;
			grid-gap: 0 20px;
		}
	`}
`
