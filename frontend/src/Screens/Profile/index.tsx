import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Profile() {
	return (
		<View style={styles.screen}>
			<Text>Profile</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#1c313a',
		width: 150,
		borderRadius: 50,
	},
	container: {
		borderRadius: 5,
		display: 'flex',
		flexDirection: 'column',
		height: 300,
		justifyContent: 'space-between',
	},
	screen: {
		backgroundColor: '#000000',
		flex: 1,
		color: 'white',
	},
});
