import React, { Fragment, useState } from 'react'
import currencyList from '../data/currencyList.js'
import axios from 'axios'

const Converter = () => {
	const currencyCodes = Object.keys(currencyList)

	const [formData, setformData] = useState({
		from: '',
		amount: '',
		to: ''
	})
	const [result, setResult] = useState('')

	const onChange = e => setformData({ ...formData, [e.target.name]: e.target.value })

	const onSubmit = async e => {
		e.preventDefault()
		const { from, amount, to } = formData

		if (from && currencyCodes.includes(from) && to && currencyCodes.includes(to) && amount) {
			const querySlug = from + '_' + to
			const res = await axios.get(
				`https://free.currconv.com/api/v7/convert?q=${querySlug}&apiKey=4572df44652d2005247c`
			)
			const exchangeRate = res.data.results[querySlug].val
			setResult((exchangeRate * amount).toFixed(2))
		}
	}

	return (
		<Fragment>
			<form onSubmit={onSubmit}>
				<input placeholder="From" list="currencies" name="from" value={formData.from} onChange={onChange} />
				<datalist id="currencies">
					{currencyCodes.map(currency => <option id={currency} value={currency} />)}
				</datalist>
				<input placeholder="Amount" name="amount" value={formData.amount} onChange={onChange} />
				<input placeholder="To" list="currencies" name="to" value={formData.to} onChange={onChange} />
				<button type="submit">Convert</button>
				{result && <p>{result}</p>}
			</form>
		</Fragment>
	)
}

export default Converter
