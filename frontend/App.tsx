import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { Header } from 'react-native-elements';

import ContractContextProvider from './src/Contexts/ContractContext';

const Stack = createStackNavigator();

import AddNft from './src/Screens/Add';
import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';
import { shouldDeployContract } from './src/Utils/deploy';

const Tab = createMaterialBottomTabNavigator();

export default function App(): JSX.Element {
	return (
		<ContractContextProvider>
		<NavigationContainer>
			<StatusBar backgroundColor='#3F0071' barStyle='default' />
			<Stack.Navigator>
				<Stack.Screen
					options={{
						headerBackgroundContainerStyle: {
							backgroundColor: 'black',
							borderBottomColor: 'black',
						},
						headerStyle: {
							backgroundColor: 'black',
							borderBottomColor: 'black',
						},
						header: () => (
							<Header
								containerStyle={{
									backgroundColor: '#fff',
									height: 90,
									borderBottomColor: '#fff',
								}}
								centerComponent={{
									text: 'Discover',
									style: { color: '#000', fontSize: 20, fontWeight: '700' },
								}}
							/>
						),
					}}
					name='Home'
					component={MyTab}
				/>
				<Stack.Screen name='NFT' component={MyTab} />
			</Stack.Navigator>
		</NavigationContainer>
		</ContractContextProvider>
	);
}

const MyTab = () => (
	<Tab.Navigator
		barStyle={{
			backgroundColor: '#fff',
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 2 },
			position: 'relative',
			left: '15%',
			bottom: 20,
			width: '70%',
			overflow: 'hidden',
			borderRadius: 100,
		}}
	>
		<Tab.Screen
			options={{
				tabBarIcon: () => <Ionicons name='home' size={24} color='#000' />,
				tabBarLabel: '',
			}}
			name='Home'
			component={Home}
		/>
		<Tab.Screen
			options={{
				tabBarIcon: () => (
					<Ionicons name='notifications' size={24} color='#000' />
				),
				tabBarLabel: '',
			}}
			name='Notifications'
			component={Profile}
		/>
		<Tab.Screen
			options={{
				tabBarIcon: () => (
					<Ionicons name='md-add-circle' size={24} color='#000' />
				),
				tabBarLabel: '',
			}}
			name='Add'
			component={AddNft}
		/>
		<Tab.Screen
			options={{
				tabBarIcon: () => <Ionicons name='list' size={24} color='#000' />,
				tabBarLabel: '',
			}}
			name='MyNfts'
			component={Profile}
		/>
	</Tab.Navigator>
);
