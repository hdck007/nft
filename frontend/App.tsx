import { HARDHAT_PORT, HARDHAT_PRIVATE_KEY } from '@env';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { Header } from 'react-native-elements';
import localhost from 'react-native-localhost';
import Web3 from 'web3';

const Stack = createStackNavigator();

import Hello from '../artifacts/contracts/Hello.sol/Hello.json';

import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';

const Tab = createMaterialBottomTabNavigator();

// deploying contract on hardhat
const shouldDeployContract = async (web3, abi, data, from: string) => {
	const deployment = new web3.eth.Contract(abi).deploy({ data });
	const gas = await deployment.estimateGas();
	const {
		options: { address: contractAddress },
	} = await deployment.send({ from, gas });
	return new web3.eth.Contract(abi, contractAddress);
};

export default function App(): JSX.Element {
	const [message, setMessage] = React.useState<string>('Loading...');
	const web3 = React.useMemo(
		() =>
			new Web3(
				new Web3.providers.HttpProvider(`http://${localhost}:${HARDHAT_PORT}`)
			),
		[HARDHAT_PORT]
	);

	React.useEffect(() => {
		void (async () => {
			const { address } = await web3.eth.accounts.privateKeyToAccount(
				HARDHAT_PRIVATE_KEY
			);
			const contract = await shouldDeployContract(
				web3,
				Hello.abi,
				Hello.bytecode,
				address
			);
			setMessage(await contract.methods.sayHello('React Native').call());
			console.log('This happens here');
		})();
	}, [web3, shouldDeployContract, setMessage, HARDHAT_PRIVATE_KEY]);

	return (
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
			component={Profile}
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
