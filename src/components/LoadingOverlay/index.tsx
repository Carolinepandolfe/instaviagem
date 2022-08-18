import Spinner from 'components/Spinner'

import * as Styled from './styles'

const LoadingOverlay = () => {
	return (
		<Styled.Container>
			<Spinner />
		</Styled.Container>
	)
}

export default LoadingOverlay
