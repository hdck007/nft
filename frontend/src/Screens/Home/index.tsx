import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardComponent from '../../Components/Card';

import { nftArray } from '../../data';

function Home() {
	return (
		<ScrollView style={styles.screen}>
			<StatusBar backgroundColor='#3F0071' barStyle='default' />
			{nftArray.map((item, index) => (
				<CardComponent item={item} />
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: '#f2f2f2',
	},
});

export default Home;
