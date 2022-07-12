import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity,  KeyboardAvoidingView, Alert, Touchable} from 'react-native';
//formatacao css de um componente
import styles from '../GlobalStyle/styles'
import firebase from '../../config/configFirebase'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Login({navigation}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erroLogin, setErroLogin] = useState("");
  
    

    const loginFirebase = () => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          navigation.navigate("Home");
          setEmail("")
          setSenha("")
          setErro(false)
        })
        .catch((error) => {
            setErroLogin(true)
            var errorCode = error.code;
            var errorMessage = error.message;
          // ..
        });

    }

  return (

    <KeyboardAvoidingView behavior="height">
                    <View style={styles.viewLogin}>  

  
                      <Text style={styles.title}> Cadastro novo Usuario</Text> 
  
                      <Text style={styles.texto}>Digite seu nome:</Text>
                      <TextInput 
                       style={styles.CampodeTexto}
                       placeholder="Digite seu Nome"
                       />
                      <Text style={styles.texto}>Email:</Text>
                      <TextInput 
                        style={styles.CampodeTexto}
                        placeholder="Digite seu email"
                        onChangeText={(text)=> setEmail(text)}
                        value={email}
                        />

                      <Text style={styles.texto}>Digite sua senha:</Text>
                      <TextInput 
                       style={styles.CampodeTexto}
                       secureTextEntry={true}
                       placeholder="Digite a sua senha"
                       onChangeText={(text)=> setSenha(text)}
                       value={senha}
                       />

                       {erroLogin === true
                       ?
                       <View style={styles.erroLogin}>
                           <Icon name="error" size={30} color="red" style={styles.iconErroLogin}/>
                           <Text style={styles.textoErro}>Email no formato incorreto ou senha
                            menor que 6 digitos</Text>
                       </View>
                       :
                       <View/>
                       }

                        {email === "" || senha === ""
                        ?
                        <TouchableOpacity style={styles.botaoLogin}
                            onPress={() => Alert.alert(
                                'Aviso!', 'Campos com preenchimento obrigatorio',
                                [
                                    {text: "OK", style: 'cancel',}
                                ],
                            )}>
                            <Text style={styles.textoBotao}>Cadastrar</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.botaoLogin}
                            onPress={loginFirebase }>
                            <Text style={styles.textoBotao}>Cadastrar</Text>
                        </TouchableOpacity>
                        
                        }
                      <View style={styles.linkRegistro}>
                            <Text style={styles.texto}> Já é cadastrado</Text>
                            <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                            <Text  style={styles.textoCadastrar}> Faça Login</Text>
                            </TouchableOpacity>
                            
                      </View>


                    </View>
              </KeyboardAvoidingView>
  )

}

