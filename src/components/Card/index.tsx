import Button from 'components/Button'
import * as Styled from './styles'

type CardProps = {
	image: string
	name: string
	price: number
}

const Card = ({ image, name, price }: CardProps) => {
	return (
		<Styled.Card>
			<img src={image} alt="" />
			<Styled.Overlay>
				<Styled.Content>
					<Styled.Name>{name}</Styled.Name>
					<Styled.Price>
						<span>R$</span>
						{price}
					</Styled.Price>
					<Button>Ver mais</Button>
				</Styled.Content>
			</Styled.Overlay>
		</Styled.Card>
	)
}

export default Card
