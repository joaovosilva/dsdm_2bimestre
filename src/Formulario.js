import React from 'react';
import { Text, StyleSheet, View, TextInput, AsyncStorage, TouchableOpacity, Number } from 'react-native';
import { crudUrl } from '../config/crud';

export default class Formulario extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			tipo: '',
			quantidade: null,
			preco: null,
		};
	}

	salvarDados = async () => {
		try {
			const produtoDeLimpeza = this.state;
			
			fetch(crudUrl + '/produtosDeLimpeza', {
				headers: { 'Content-Type': 'application/json; charset=utf-8' },
				method: 'POST',
				body: JSON.stringify(produtoDeLimpeza),
			})
				.then((response) => response.json())
				.then((data) => {
					this.props.navigation.navigate('Lista');
				})
				.catch((error) => {
					console.error("Erro ao cadastrar", error);
				});
		} catch (e) {
			console.error('Falha ao salvar dados', e);
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Produto de Limpeza</Text>

				<TextInput
					style={styles.input}
					value={this.state.nome}
					onChangeText={(nome) => {
						this.setState({ nome });
					}}
					placeholder="Nome..."
				/>
				<TextInput
					style={styles.input}
					value={this.state.tipo}
					onChangeText={(tipo) => {
						this.setState({ tipo });
					}}
					placeholder="Tipo..."
				/>
				<TextInput
					keyboardType="numeric"
					style={styles.input}
					value={this.state.quantidade}
					onChangeText={(quantidade) => {
						this.setState({ quantidade });
					}}
					placeholder="Quantidade..."
				/>
				<TextInput
					keyboardType="numeric"
					style={styles.input}
					value={this.state.preco}
					onChangeText={(preco) => {
						this.setState({ preco });
					}}
					placeholder="Preço..."
				/>

				<TouchableOpacity style={styles.button} onPress={this.salvarDados.bind(this)}>
					<Text style={styles.buttonText}>Salvar</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						this.props.navigation.navigate('Lista');
					}}
				>
					<Text style={styles.buttonText}>Voltar</Text>
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
	resText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	card: {
		padding: 30,
		flex: 1,
		justifyContent: 'center',
	},
});
