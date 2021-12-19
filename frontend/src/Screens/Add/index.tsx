import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from 'react-native-elements';

export default function AddNft() {
	const [selectedImage, setSelectedImage] = React.useState(null);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			price: 0,
		},
	});
	const onSubmit = (data) => console.log(data);

	let openImagePickerAsync = async () => {
		let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (permissionResult.granted === false) {
			alert('Permission to access camera roll is required!');
			return;
		}

		let pickerResult = await ImagePicker.launchImageLibraryAsync();

		if (pickerResult.cancelled === true) {
			return;
		}

		setSelectedImage({ localUri: pickerResult.uri });
	};

	return (
		<View style={styles.screen}>
			<View style={styles.container}>
				{selectedImage !== null ? (
					<View>
						<Image
							source={{ uri: selectedImage.localUri }}
							style={styles.preview}
						/>
						<Ionicons
							style={styles.close}
							name='trash-bin-sharp'
							color={'red'}
							size={20}
							onPress={() => setSelectedImage(null)}
						/>
					</View>
				) : (
					<TouchableOpacity onPress={openImagePickerAsync}>
						<View style={styles.pickercontainer}>
							<Ionicons name='add-circle-outline' size={100} color='#423F3E' />
						</View>
					</TouchableOpacity>
				)}
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							// style={styles.input}
							placeholder='Name'
							containerStyle={{
								width: 320,
								position: 'relative',
								top:  12,
							}}
							inputContainerStyle={{
								borderRadius: 100,
								backgroundColor: '#F5F5F5',
								borderWidth: 1,
								borderStyle: 'solid',
								paddingHorizontal: 15,
								paddingVertical: 5,
							}}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							errorMessage={errors.name && 'Name is required'}
						/>
					)}
					name='name'
				/>

				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							// style={styles.input}
							placeholder='Price'
							containerStyle={{
								width: 320,
								position: 'relative',
								bottom:  12,
							}}
							inputContainerStyle={{
								borderRadius: 100,
								backgroundColor: '#F5F5F5',
								borderWidth: 1,
								borderStyle: 'solid',
								paddingHorizontal: 15,
								paddingVertical: 5,
							}}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					)}
					name='price'
				/>
				<Button
					buttonStyle={{
						paddingHorizontal: 20,
						paddingVertical: 10,
						borderRadius: 100,
					}}
					title='Submit'
					onPress={handleSubmit(onSubmit)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: '#fff',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	preview: {
		width: 320,
		height: 250,
		borderRadius: 5,
	},
	pickercontainer: {
		width: 320,
		height: 250,
		borderRadius: 5,
		borderWidth: 5,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#423F3E',
	},
	close: {
		marginTop: 10,
		alignSelf: 'flex-end',
	},
	container: {
		height: '85%',
		justifyContent: 'space-around',
	}
});
