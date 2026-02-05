import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const LoginScreen = () => {
  return (
    <View style = {Styles.body}>
    <View style = {Styles.container}> {/*substituição da "div"*/}
      <Text style = {Styles.title}>Login</Text>
      <View style = {Styles.inputGroup}>
        <Text style = {Styles.label}>Usuário:</Text>
        <TextInput style = {Styles.input} placeholder="Digite seu usuário"/>
      </View>
      <View style = {Styles.inputGroup}>
        <Text style = {Styles.label}>Senha:</Text>
        <TextInput style = {Styles.input} placeholder="Digite sua senha"/>
      </View>
      <TouchableOpacity style = {Styles.button}> {/*botão clicável*/}
        <Text style = {Styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style = {Styles.forgot}>Esqueci minha senha</Text>
    </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  body:{
    flex: 1, //cor ocupa toda a tela
    backgroundColor: 'light gray',
    justifyContent: 'center',
    alignItems: 'center'
  },

  container:{
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 30,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 2
    },
    shadowOpacity: 0.1,
    elevation: 5,
    alignItems: 'center'
  },

  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },

  inputGroup:{
    marginBottom: 15,
    width: '100%'
  },

  label:{
    textAlign: 'left',
    marginBottom: 5,
    color: '#555',
    width: '100%',
  },

  input:{
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: 'white',
    color: '#333',

  },

  button:{
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },

  buttonText:{
    color:'#fff',
    fontSize: 16,
  },

  forgot:{
    marginTop: 10,
    color: '#007bff'
  }

});

export default LoginScreen;
