import React from 'react'
import PropTypes from 'prop-types'

const ResultHistory = ({ resultHistory }) => {
	return (
		<div>
			{resultHistory.length > 0 &&
				resultHistory.map((result, index) => (
					<p key={index}>
						{result.amount} {result.from} -> {result.to} = {result.result}
					</p>
				))}
		</div>
	)
}

ResultHistory.propTypes = {
	resultHistory: PropTypes.array.isRequired
}

export default ResultHistory
