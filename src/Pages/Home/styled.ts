import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	margin: 0 auto;
	max-width: 1200px;
	padding: 20px 14px 20px;
`

export const FilterWrapper = styled.div`
	display: flex;
	gap: 0.9375rem;
	justify-content: center;
	flex-wrap: wrap;
`

export const Content = styled.div`
	display: grid;
	grid-gap: 20px;
	max-width: 950px;
	margin: 0 auto;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 968px) {
		grid-template-columns: repeat(3, 1fr);
	}
`
