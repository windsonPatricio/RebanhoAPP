import React, {useState, useEffect} from 'react';
import firebase from '../../config/configFirebase';
import {Text, View, FlatList, TouchableOpacity, ScrollView} from 'react-native';
//formatacao css de um componente
import styles from '../GlobalStyle/styles';
const logo = require("../Imagem/ImgHome.png");


export default function GerenciarAnimais({navigation, route}) { 
    const database  = firebase.firestore();
    const [animais, setAnimais] = useState([]);
    const animaisCad = [];


    animais.forEach((data)=>{
        if(data.class === "animal"&& data.status === "comprado"){
            animaisCad.push(data);
        }
    })

    useEffect(() => {
      database.collection(route.params.idUser).onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setAnimais(list);
      });
    }, []);
  
    return(    
            <View>
                <ScrollView style={styles.scroll }>
                            <Text style={styles.textoTitleQtd}> Visão Geral</Text>
                            <Text style={styles.textoTitleQtd}> Animais cadastrados</Text>
                              
                                <View  style={styles.viewDetalhesSuperior}>
                                    <View style={styles.viewQtd}>
                                        <Text style={styles.textoQtd}> {animaisCad.length}</Text>
                                    </View>
                                    <View style={styles.viewBotoes}>
                                        <TouchableOpacity  style={styles.botaoListar} onPress={()=> navigation.navigate("ListaAnimal", {
                                            idUser: route.params.idUser
                                        })}>
                                            <Text style={styles.textoBotaoListar}>Listar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                             

                        <TouchableOpacity  style={styles.botaoLogin} onPress={()=> navigation.navigate("CadastrarAnimal", {
                            idUser: route.params.idUser })}>
                            <Text style={styles.textoBotao}>Cadastrar Animal</Text>
                        </TouchableOpacity>
                </ScrollView>

             
            
           </View>
    )

}
