import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../src/styles/global'
import { defaultTheme } from 'styles/theme/default'
import AppRoutes from 'routes'

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default App
