import React from 'react';
import firebase from '../../config/configFirebase';
import {Text, View, Image, TouchableOpacity, Alert } from 'react-native';
//formatacao css de um componente
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/FontAwesome';


import styles from '../GlobalStyle/styles';
const logo = require("../Imagem/ImgHome.png");


export default function Home({navigation, route}) { 

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
            <View>
                <View  style={styles.viewTelaInicialSuperior}>
                    <Image style={styles.imagemHome}
                         source={logo}/>
                    <TouchableOpacity  style={styles.viewLogout} onPress={Logout}>
                        <Icon name="log-out" size={20} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTelaInicial}>  
                <TouchableOpacity style={styles.OpcoesPgInicial} disabled={false}
                onPress={() => navigation.navigate("GerenciarAnimais", {idUser: route.params.idUser})}>
                    <Icon2 name="cow" size={50} style={styles.iconeBotao}/>
                    <Text style={styles.textoBotao}>Gerenciar Animais</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OpcoesPgInicial} disabled={false}
                onPress={() =>  navigation.navigate("GerenciarVacinas", {idUser: route.params.idUser})}>
                    <Icon3 name="syringe" size={50} style={styles.iconeBotao}/>
                    <Text style={styles.textoBotao}>Controle vacinal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OpcoesPgInicial} disabled={false}
                onPress={() =>  navigation.navigate("Financeiro", {idUser: route.params.idUser})}>
                    <Icon4 name="money" size={50} style={styles.iconeBotao}/>
                    <Text style={styles.textoBotao}>Financeiro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OpcoesPgInicial} disabled={false}
                onPress={() => navigation.navigate("Sobre") }>
                    <Icon name="info" size={50} style={styles.iconeBotao}/>
                    <Text style={styles.textoBotao}>Sobre o APP</Text>
                </TouchableOpacity>
            
                </View>
          </View>
    )

}
