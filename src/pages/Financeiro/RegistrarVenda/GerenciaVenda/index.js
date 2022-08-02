import React, {useState, useEffect} from 'react';
import firebase from '../../../../config/configFirebase';
import {Text, View, FlatList, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
//formatacao css de um componente
import styles from '../../../GlobalStyle/styles';



export default function GerenciarAnimais({navigation, route}) { 
    const database  = firebase.firestore();
    const [animais, setAnimais] = useState([]);
    const animaisVend = [];


    animais.forEach((data)=>{
        if(data.class === "animal"&& data.status === "vendido"){
            animaisVend.push(data);
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
                            <Text style={styles.textoTitleQtd}> Animais Vendidos</Text>
                              
                                <View  style={styles.viewDetalhesSuperior}>
                                    <View style={styles.viewQtd}>
                                        <Text style={styles.textoQtd}> {animaisVend.length}</Text>
                                    </View>
                                    <View style={styles.viewBotoes}>
                                        <TouchableOpacity  style={styles.botaoListar} onPress={()=> navigation.navigate("ListaVendidos", {
                                            idUser: route.params.idUser
                                        })}>
                                            <Text style={styles.textoBotaoListar}>Listar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                             

                        <TouchableOpacity  style={styles.botaoLogin} onPress={()=> navigation.navigate("ListaVenda", {
                            idUser: route.params.idUser })}>
                            <Text style={styles.textoBotao}>Realizar Venda</Text>
                        </TouchableOpacity>
                </ScrollView>

             
            
           </View>
    )

}
