import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ResultHistory = ({ resultHistory }) => {
	return (
		<Fragment>
			{resultHistory.length > 0 && (
				<Fragment>
					<h3>Result History</h3>
					<ol className="result-history">
						{resultHistory.map(result => (
							<li>
								{result.amount + ' ' + result.from} <img src="arrow-right.svg" width="24px" />{' '}
								{result.result + ' ' + result.to}
							</li>
						))}
					</ol>
				</Fragment>
			)}
		</Fragment>
	)
}

ResultHistory.propTypes = {
	resultHistory: PropTypes.array.isRequired
}

export default ResultHistory
