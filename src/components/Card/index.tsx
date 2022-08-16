import * as Styled from './styled'

type CardProps = {
	image: string
}

const Card = ({ image }: CardProps) => {
	return (
		<Styled.Card>
			<img src={image} alt="" />
		</Styled.Card>
	)
}

export default Card
