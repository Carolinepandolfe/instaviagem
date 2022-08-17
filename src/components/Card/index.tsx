import Button from 'components/Button'
import * as Styled from './styles'

type CardProps = {
	image: string
}

const Card = ({ image }: CardProps) => {
	return (
		<Styled.Card>
			<img src={image} alt="" />
			<Styled.Overlay>
				<Styled.Content>
					<Styled.Name>Rio de Janeiro</Styled.Name>
					<Styled.Price>
						<span>R$</span>186
					</Styled.Price>
					<Button>Ver mais</Button>
				</Styled.Content>
			</Styled.Overlay>
		</Styled.Card>
	)
}

export default Card
