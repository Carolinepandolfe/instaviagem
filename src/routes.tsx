import Home from 'Pages/Home'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	)
}

export default AppRoutes
