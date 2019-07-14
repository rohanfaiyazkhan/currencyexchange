import React, { Fragment, useState } from 'react'
import axios from 'axios'

const Converter = () => {
	const [value, setValue] = useState('')

	const [result, setResult] = useState('')

	const onClick = async () => {
		if (value) {
			const res = await axios.get(
				'https://free.currconv.com/api/v7/convert?q=BDT_USD&apiKey=4572df44652d2005247c'
			)
			const exchangeRate = res.data.results['BDT_USD'].val
			console.log(exchangeRate)
			setResult(exchangeRate * value)
		}
	}

	return (
		<Fragment>
			<input placeholder="Amount" value={value} onChange={e => setValue(e.target.value)} />
			<button onClick={onClick}>Convert</button>
			{result && <p>{result}</p>}
		</Fragment>
	)
}

export default Converter
