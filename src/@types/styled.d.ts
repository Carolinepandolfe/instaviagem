import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		base: {
			blue: string
			black: string
			gray: string
			white: string
		}
	}
}
