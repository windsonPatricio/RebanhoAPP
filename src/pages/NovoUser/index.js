import React, {useState} from 'react';
import {Text, View, Platform, TextInput, ScrollView, TouchableOpacity,  KeyboardAvoidingView, Alert} from 'react-native';
//formatacao css de um componente
import styles from '../GlobalStyle/styles'
import firebase from '../../config/configFirebase'
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function NovoLogin({navigation}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");
    const [erroLogin, setErroLogin] = useState("");
  
    

    const loginFirebase = () => {

      if(senha !== confSenha){
          Alert.alert(
              'Aviso!', 'Confirmacão de senha inválida',
              [
                  {text: "OK", style: 'cancel',}
              ],
          )
      } else{

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

    }

  return (

                  <KeyboardAvoidingView
                  style={styles.viewLogin}
                  behavior={Platform.select({
                    ios: 'padding',
                    android: null,
                    })}
                    >
                    <ScrollView>  
  
                      <Text style={styles.title}> Cadastro novo Usuario</Text> 
  
                      <Text style={styles.textoLogin}>Digite seu nome:</Text>
                      <TextInput 
                       style={styles.CampodeTexto}
                       placeholder="Digite seu Nome"
                       />
                      <Text style={styles.textoLogin}>Email:</Text>
                      <TextInput 
                        style={styles.CampodeTexto}
                        placeholder="Digite seu email"
                        onChangeText={(text)=> setEmail(text)}
                        value={email}
                        />

                      <Text style={styles.textoLogin}>Digite sua senha:</Text>
                      <TextInput 
                       style={styles.CampodeTexto}
                       secureTextEntry={true}
                       placeholder="Digite a sua senha"
                       onChangeText={(text)=> setSenha(text)}
                       value={senha}
                       />
                      <Text style={styles.textoLogin}>Confirme sua senha:</Text>
                      <TextInput 
                       style={styles.CampodeTexto}
                       secureTextEntry={true}
                       placeholder="Confirme a sua senha"
                       onChangeText={(text)=> setConfSenha(text)}
                       value={confSenha}
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

                        {email === "" || senha === ""  || confSenha === ""
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
                            <Text style={styles.textoLogin}> Já é cadastrado</Text>
                            <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                            <Text  style={styles.textoCadastrar}> Faça Login</Text>
                            </TouchableOpacity>
                            
                      </View>


                    </ScrollView>
              </KeyboardAvoidingView>
  )

}

