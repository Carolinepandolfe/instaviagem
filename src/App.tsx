import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../src/styles/global'
import { defaultTheme } from 'styles/theme/default'

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter />
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default App
