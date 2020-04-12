import React from 'react';
import Router from './router';

import GlobalStyleReset from './assets/css/reset';
import GlobalStyleGeneric from './assets/css/generic';
import GlobalStyleVariables from './assets/css/variables';

export default function App() {
	return (
		<React.Fragment>
			<GlobalStyleReset />
			<GlobalStyleGeneric />
			<GlobalStyleVariables />
			<Router />
		</React.Fragment>
	);
}
