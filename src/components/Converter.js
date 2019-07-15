import React, { Fragment, useState } from 'react';
import currencyList from '../data/currencyList';
import axios from 'axios';

const Converter = () => {
	const [ formData, setformData ] = useState({
		from: '',
		amount: '',
		to: ''
	});
	const [ result, setResult ] = useState('');

	const onChange = (e) => setformData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		const { from, amount, to } = formData;

		if (from && amount && to) {
			const querySlug = from + '_' + to;
			const res = await axios.get(
				`https://free.currconv.com/api/v7/convert?q=${querySlug}&apiKey=4572df44652d2005247c`
			);
			const exchangeRate = res.data.results[querySlug].val;
			setResult(exchangeRate * amount);
		}
	};

	return (
		<Fragment>
			<form onSubmit={onSubmit}>
				<input placeholder="From" list="currencies" name="from" value={formData.from} onChange={onChange} />
				<datalist id="currencies">
					{currencyList.map((currency) => (
						<option id={currency.id} value={currency.id}>
							{currency.currencyName}
						</option>
					))}
				</datalist>
				<input placeholder="Amount" name="amount" value={formData.amount} onChange={onChange} />
				<input placeholder="To" list="currencies" name="to" value={formData.to} onChange={onChange} />
				<button type="submit">Convert</button>
				{result && <p>{result}</p>}
			</form>
		</Fragment>
	);
};

export default Converter;
