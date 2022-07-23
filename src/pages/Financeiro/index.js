import React, {useState, useEffect} from 'react';
import firebase from '../../config/configFirebase';
import {Text, View, FlatList, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
//formatacao css de um componente
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import styles from '../GlobalStyle/styles';
const logo = require("../Imagem/ImgHome.png");


export default function Financeiro({navigation, route}) { 
    const database  = firebase.firestore();
    const [animais, setAnimais] = useState([]);
    

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
                            <Text style={styles.textoTitleQtd}> Saldo Rebanho</Text>
                                <View  style={styles.viewDetalhesSuperior}>
                                    <View style={styles.viewFin}>
                                        <Text style={styles.textoFin}> R$ 21.000,00</Text>
                                    </View>
                                </View>
                                <Text style={styles.textoTitleQtd}> Custo Total</Text>
                                <View  style={styles.viewDetalhesSuperior}>
                                    <View style={styles.viewFin}>
                                        <Text style={styles.textoFin}> R$ 21.000,00</Text>
                                    </View>
                                </View>
                                <Text style={styles.textoTitleQtd}> Lucro Apurado</Text>
                                <View  style={styles.viewDetalhesSuperior}>
                                    <View style={styles.viewFin}>
                                        <Text style={styles.textoFin}> R$ 21.000,00</Text>
                                    </View>
                                </View>

                        <TouchableOpacity  style={styles.botaoLogin} onPress={()=> navigation.navigate("CadastrarAnimal", {
                            idUser: route.params.idUser })}>
                            <Text style={styles.textoBotao}>Registro de Venda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.botaoLogin} onPress={()=> navigation.navigate("CadastrarAnimal", {
                            idUser: route.params.idUser })}>
                            <Text style={styles.textoBotao}>Registro de Despesas</Text>
                        </TouchableOpacity>
                </ScrollView>

             
            
           </View>
    )

}
