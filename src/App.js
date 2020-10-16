import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import store from './store'

const App = () => {
	return (
		<Provider store={store}>
			<HashRouter>
				<Routes />
			</HashRouter>
		</Provider>
	)
}

export default App
