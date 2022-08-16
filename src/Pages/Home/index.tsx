import Card from 'components/Card'
import Header from 'components/Header'
import * as Styled from './styled'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Search from 'components/Search'

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

	const URL =
		'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge'

	const getData = async () => {
		try {
			const response = await axios.get(URL)
			setData(response?.data)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	const filterByActive = data.filter((card) => card.isActive === true)

	const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	const handleInputSearch = useMemo(() => {
		const lowercaseSearch = search.toLowerCase()
		return filterByActive.filter(
			(data) =>
				data.name.toLowerCase().includes(lowercaseSearch) ||
				data.type.toLowerCase().includes(lowercaseSearch) ||
				data.about.toLowerCase().includes(lowercaseSearch) ||
				data.address.toLowerCase().includes(lowercaseSearch)
		)
	}, [search])

	return (
		<>
			<Header />
			<Styled.Container>
				<Search value={search} onChange={handleChangeSearch} />
				{handleInputSearch.map((card) => (
					<Card image={card.image} key={card._id} />
				))}
			</Styled.Container>
		</>
	)
}
export default Home
