import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Lista from './src/Lista';
import Formulario from './src/Formulario';

const Project = createStackNavigator(
	{
		Lista,
		Formulario
	},
	{
		defaultNavigationOptions: {
			headerStyle: { backgroundColor: '#60386e' },
			headerTintColor: '#fff',
			headerTitleStyle: { fontWeight: 'bold' },
			headerBackTitle: 'voltar',
		},
	}
);

export default createAppContainer(Project);