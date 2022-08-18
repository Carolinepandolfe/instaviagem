import Button from 'components/Button'
import * as Styled from './styles'
import Modal from 'react-modal'
import { useState } from 'react'
import { DataProps } from 'Pages/Home'
import {
	MdAttachMoney,
	MdLocationOn,
	MdEmail,
	MdPhoneIphone,
} from 'react-icons/md'

const Card = ({
	image,
	name,
	price,
	about,
	address,
	email,
	phone,
}: DataProps) => {
	const [open, setOpen] = useState(false)

	const handleCloseModal = () => setOpen(false)

	return (
		<>
			<Styled.Card>
				<img src={image} alt="" />
				<Styled.Overlay>
					<Styled.Content>
						<Styled.Name>{name}</Styled.Name>
						<Styled.Price>
							<span>R$</span>
							{price}
						</Styled.Price>
						<Button onClick={() => setOpen(true)}>Ver mais</Button>
					</Styled.Content>
				</Styled.Overlay>
			</Styled.Card>
			<Modal
				isOpen={open}
				appElement={document.getElementById('root')!}
				className="_"
				overlayClassName="_"
				contentLabel="Modal ver mais"
				onRequestClose={handleCloseModal}
				contentElement={(props, contentElement) => (
					<Styled.ModalOverlay {...props}>{contentElement}</Styled.ModalOverlay>
				)}
			>
				<Styled.ModalContainer>
					<Styled.Header>
						<Styled.CloseButton onClick={handleCloseModal}>
							<Styled.CloseIcon size={20} />
						</Styled.CloseButton>
						<h1>{name}</h1>
					</Styled.Header>
					<Styled.ContentModal>
						<p>{about}</p>
						<Styled.FooterModal>
							<p>
								<MdAttachMoney size={20} />
								{price}
							</p>
							<p>
								<MdLocationOn size={20} />
								{address.split(',').slice(2, 3)}
							</p>
							<p>
								<MdEmail size={20} />
								{email}
							</p>
							<p>
								<MdPhoneIphone size={20} />
								{phone}
							</p>
						</Styled.FooterModal>
					</Styled.ContentModal>
				</Styled.ModalContainer>
			</Modal>
		</>
	)
}

export default Card
