import React, { Fragment, useState } from 'react'
import currencyList from '../data/currencyList.js'
import ResultHistory from './ResultHistory'
import axios from 'axios'

const Converter = () => {
	const currencyCodes = Object.keys(currencyList)

	const [formData, setformData] = useState({
		from: '',
		amount: '',
		to: ''
	})
	const [result, setResult] = useState('')
	const [resultHistory, setResultHistory] = useState([])

	const [error, setError] = useState('')

	const onChange = e => {
		if (e.target.name === 'from' || e.target.name === 'to') {
			e.target.value = e.target.value.toUpperCase()
		}
		setformData({ ...formData, [e.target.name]: e.target.value })
	}

	const onSubmit = async e => {
		e.preventDefault()
		const { from, amount, to } = formData

		if (!from || !to || !amount) {
			return setError('Please enter all fields')
		}

		if (!currencyCodes.includes(from) || !currencyCodes.includes(to)) {
			return setError('Please enter a valid currency')
		}

		if (isNaN(amount)) {
			return setError('Please enter a number as the amount')
		}

		if (from && currencyCodes.includes(from) && to && currencyCodes.includes(to) && amount) {
			setError('')
			const querySlug = from + '_' + to
			const res = await axios.get(
				`https://free.currconv.com/api/v7/convert?q=${querySlug}&apiKey=4572df44652d2005247c`
			)
			const exchangeRate = res.data.results[querySlug].val
			const exchangeResult = (exchangeRate * amount).toFixed(2)
			setResult(exchangeResult)
			setResultHistory([...resultHistory, { from, amount, to, result: exchangeResult }])
		}
	}

	return (
		<Fragment>
			{error && <p className="error-message">{error}</p>}
			<form className="l-fd-row xs-fd-col" onSubmit={onSubmit}>
				<input placeholder="From" list="currencies" name="from" value={formData.from} onChange={onChange} />
				<datalist id="currencies">
					{currencyCodes.map(currency => (
						<option id={currency} key={currency} value={currency}>
							{currency + ' (' + currencyList[currency].currencyName + ')'}
						</option>
					))}
				</datalist>
				<input placeholder="Amount" name="amount" value={formData.amount} onChange={onChange} />
				<input placeholder="To" list="currencies" name="to" value={formData.to} onChange={onChange} />
				<button type="submit">Convert</button>
			</form>
			<div className="result-container">
				<p>
					<label>Result</label>
					{result && <span>{result}</span>}
				</p>
			</div>

			<ResultHistory resultHistory={resultHistory} />
		</Fragment>
	)
}

export default Converter
