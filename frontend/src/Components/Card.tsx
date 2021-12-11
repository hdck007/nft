import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { Avatar } from 'react-native-elements';

export default function CardComponent({ item }: any) {
	return (
		<Card
			containerStyle={styles.parentContainer}
			wrapperStyle={styles.container}
		>
			<View style={styles.header}>
				<Avatar
					rounded
					title='HD'
					titleStyle={{
						color: 'gray',
						borderWidth: 1,
            fontSize: 10,
            padding: 5,
						borderColor: 'gray',
						borderRadius: 50,
					}}
				/>
				<Text
          style={styles.headerText}
        >{`  ${item.name}`}</Text>
			</View>
			<Card.Image
				style={styles.image}
				source={require('../../../assets/image/test.jpeg')}
			/>
			<View></View>
			<Button
				buttonStyle={styles.button}
				title='view now'
			/>
		</Card>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#423F3E',
		borderRadius: 5,
		width: 320,
		marginTop: 20,
	},
	container: {
		borderRadius: 5,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	description: {
		width: 320,
		marginTop: 10,
	},
	image: {
		width: 320,
		height: 250,
		borderRadius: 5,
	},
	header: {
		flexDirection: 'row',
		width: 320,
		textAlign: 'left',
		marginBottom: 10,
	},
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'relative',
    top: 3,
  },
	parentContainer: {
		width: '100%',
		margin: 0,
	},
});
