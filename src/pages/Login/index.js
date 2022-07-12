import React, {useEffect, useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity,  KeyboardAvoidingView, Alert} from 'react-native';
//formatacao css de um componente
import styles from '../GlobalStyle/styles'
import firebase from '../../config/configFirebase'
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function Login({navigation}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erroLogin, setErroLogin] = useState("");
    const logo = require("../Imagem/PagBoi.png");
  
  

    const loginFirebase = () => {
      firebase.auth().signInWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Home", {idUser: user.uid });
        setEmail("")
        setSenha("")
        setErro(false)
      })
      .catch((error) => {
        setErroLogin(true)
        let errorCode = error.code;
        let errorMessage = error.message;
      });
    

    }

    useEffect(()=>{
      
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          navigation.navigate("Home", {idUser: user.uid})
        }
      });    
    }, []);


  return (

    <KeyboardAvoidingView behavior="position" enabled style={styles.viewLogin}>

                          <Image style={styles.imagemLogin}
                          source={logo}/>

                      <Text style={styles.texto}> Digite seu login:</Text>
                      <TextInput 
                        style={styles.CampodeTexto}
                        placeholder="Login"
                        onChangeText={(text)=> setEmail(text)}
                        value={email}
                        />

                      <Text style={styles.texto}>Digite sua senha:</Text>
                      <TextInput 
                       style={styles.CampodeTexto}
                       secureTextEntry={true}
                       placeholder="Senha"
                       onChangeText={(text)=> setSenha(text)}
                       value={senha}
                       />

                       {erroLogin === true
                       ?
                       <View style={styles.erroLogin}>
                           <Icon name="error" size={30} color="red" style={styles.iconErroLogin}/>
                           <Text style={styles.texto}>Senha ou Email incorretos</Text>
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
                            <Text style={styles.textoBotao}>Entrar</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.botaoLogin}
                            onPress={loginFirebase }>
                            <Text style={styles.textoBotao}>Entrar</Text>
                        </TouchableOpacity>
                        
                        }
                       <TouchableOpacity onPress={()=>{navigation.navigate("Registrar")}}>
                       <Text style={styles.textoCadastrar}> Cadastre-se</Text>
                       </TouchableOpacity>
                 
              </KeyboardAvoidingView>
  )

}

