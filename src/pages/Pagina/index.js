import React from 'react';
import firebase from '../../config/configFirebase';
import {Text, View,Image, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';
//formatacao css de um componente
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Entypo';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../GlobalStyle/styles';
const logo = require("../Imagem/ImgHome.png");


export default function Pagina({navigation, route}) { 

    function Logout(){
        firebase.auth().signOut().then(() => {
          navigation.navigate("Login")
        }).catch(() => {
            Alert.alert(
                'Aviso!', 'Não é possivel realizar Logout',
                [
                    {text: "OK", style: 'cancel',}
                ]
            )
        });
      }
  
    return(    
        <KeyboardAvoidingView behavior="position" enabled style={styles.viewTelaInicial}>
                <View  style={styles.viewTelaInicialSuperior}>
                    <Image style={styles.imagemHome}
                         source={logo}/>
                    <TouchableOpacity  style={styles.viewLogout} onPress={Logout}>
                        <Icon4 name="log-out" size={20} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTelaInicial}>  
                <TouchableOpacity style={styles.OpcoesPgInicial}
                onPress={() => navigation.navigate("GerenciarAnimais", {idUser: route.params.idUser})}>
                    <Icon5 name="cow" size={70} style={styles.iconeBotao}/>
                    <Text style={styles.textoBotao}>Gerenciar Animais</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OpcoesPgInicial}
                onPress={() =>  navigation.navigate("Detalhes", {idUser: route.params.idUser})}>
                    <Icon2 name="syringe" size={70} style={styles.iconeBotao}/>
                    <Text style={styles.textoBotao}>Controle vacinal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OpcoesPgInicial}
                onPress={() =>  navigation.navigate("Financeiro", {idUser: route.params.idUser})}>
                    <Icon3 name="money" size={70} style={styles.iconeBotao}/>
                    <Text style={styles.textoBotao}>Financeiro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OpcoesPgInicial} disabled={true}
                onPress={() => navigate("Perfil") }>
                    <Icon3 name="gear" size={70} style={styles.iconeBotao}/>
                    <Text style={styles.textoBotao}>Configuração</Text>
                </TouchableOpacity>
                </View>
           </KeyboardAvoidingView>
    )

}
