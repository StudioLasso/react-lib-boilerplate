import React from 'react';
import ReactDom from 'react-dom';

import Library from '../../lib';

ReactDom.render(
	<div>
		<div className="container">
			<div className="row">
				<h1><Library /></h1>
			</div>
		</div>
	</div>,
	document.getElementById('main')
);
