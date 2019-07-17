import React from 'react'
import Converter from './components/Converter'
import './styles/App.scss'

const App = () => {
	return (
		<div className="wl-75 wm-80 ws-90 wxs-95">
			<h1>Currency Converter</h1>
			<Converter />
		</div>
	)
}

export default App
