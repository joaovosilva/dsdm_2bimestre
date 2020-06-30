import React from 'react';
import { Text, TouchableOpacity, View, AsyncStorage, StyleSheet, Image } from 'react-native';
import { crudUrl } from '../config/crud';

export default class Lista extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			produtosDeLimpeza: [],
		};

		this.getProdutosLimpeza()
	}

	willFocus = this.props.navigation.addListener('willFocus', (payload) => {
		this.getProdutosLimpeza();
	});

	getProdutosLimpeza() {
		fetch(crudUrl + '/produtosDeLimpeza')
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					produtosDeLimpeza: data,
				});
			})
			.catch((error) => console.error('AQUI', error));
	}

	renderLista() {
		return this.state.produtosDeLimpeza.map((l, i) => (
			<Text key={i} style={styles.resText}>
				{l.nome} - {l.tipo} - {l.quantidade} - {l.preco}
			</Text>
		));
	}

	render() {
		return (
			<View style={styles.container}>
				<Image
					source={{
						uri: 'https://higtop.com.br/wp-content/uploads/2018/06/produtos-corretos.jpg',
					}}
					style={styles.banner}
				/>
				<Text style="display: flex; alignItens: center">Produtos de Limpeza</Text>

				<View style={styles.res}>
					<Text style={styles.resHead}>Produto - Tipo - Quantidade - Preço</Text>
					{this.renderLista()}
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						this.props.navigation.navigate('Formulario');
					}}
				>
					<Text style={styles.buttonText}>Novo</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewInfo: {
		alignItems: 'center',
	},
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'white',
		padding: 10,
	},
	button: {
		backgroundColor: '#60386e',
		shadowRadius: 5,
		alignItems: 'center',
		padding: 10,
		marginBottom: 10,
		marginTop: 10,
		marginHorizontal: 40,
		borderRadius: 7,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Roboto',
	},
	input: {
		height: 50,
		padding: 10,
		borderBottomColor: '#60386e',
		borderBottomWidth: 2,
		margin: 10,
		fontSize: 16,
	},
	res: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		shadowColor: '#000',
		elevation: 5,
		padding: 25,
		backgroundColor: '#fbff7d',
	},
	resHead: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	resText: {
		fontSize: 14,
	},
	card: {
		padding: 30,
		flex: 1,
		justifyContent: 'center',
	},
	banner: {
		width: '100%',
		height: 240,
	},
});
