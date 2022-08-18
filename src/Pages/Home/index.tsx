import Card from 'components/Card'
import Header from 'components/Header'
import * as Styled from './styled'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from 'components/Search'
import Filter from 'components/Filter'

type DataProps = {
	_id: string
	about: string
	address: string
	email: string
	image: string
	isActive: boolean
	latitude: number
	longitude: number
	name: string
	phone: string
	price: number
	type: string
}

const Home = () => {
	const [data, setData] = useState<DataProps[]>([])
	const [search, setSearch] = useState('')
	const [select, setSelect] = useState('')

	const labelButtons = [
		{ label: 'Hospedagem', type: 'hotel' },
		{ label: 'Transporte', type: 'transport' },
		{ label: 'Atração', type: 'attraction' },
	]

	const URL =
		'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge'

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios?.get(URL)
				setData(response?.data)
				console.log(response.data)
			} catch (err) {
				console.log(err)
			}
		}
		getData()
		console.log(data)
	}, [])

	const filterByActive = data?.filter((card) => card.isActive === true)

	const lowercaseSearch = search.toLowerCase()

	const handleInputSearch = filterByActive.filter((data) => {
		const name = data.name.toLowerCase()
		const type = data.type.toLowerCase()
		const about = data.about.toLowerCase()
		const address = data.address.toLowerCase()

		return [name, type, about, address].some((value) =>
			value.includes(lowercaseSearch)
		)
	})

	const handleChangeFilter = (value: string) => {
		return () => setSelect(value)
	}

	const orderByName = handleInputSearch.sort((a, b) =>
		a.name.localeCompare(b.name)
	)

	const filterByCategory = orderByName.filter((category) =>
		!category ? category : category?.type.includes(select)
	)

	return (
		<>
			<Header />
			<Styled.Container>
				<Search value={search} onChange={(e) => setSearch(e.target.value)} />
				<Styled.FilterWrapper>
					{labelButtons.map(({ label, type }) => (
						<Filter
							label={type}
							active={select}
							onClick={handleChangeFilter(type)}
						>
							{label}
						</Filter>
					))}
				</Styled.FilterWrapper>
				<Styled.Content>
					{filterByCategory.map((card) => (
						<Card
							key={card?._id}
							image={card?.image}
							name={card.name}
							price={card.price}
						/>
					))}
				</Styled.Content>
			</Styled.Container>
		</>
	)
}
export default Home
