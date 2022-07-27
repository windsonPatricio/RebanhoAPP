import React, {useState, useEffect} from 'react';
import firebase from '../../config/configFirebase';
import {Text, View, FlatList, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
//formatacao css de um componente
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import styles from '../GlobalStyle/styles';
const logo = require("../Imagem/ImgHome.png");


export default function ListaAnimal({navigation, route}) { 
    const database  = firebase.firestore();
    const [animais, setAnimais] = useState([]);
    
    function delAnimal(id) {
        Alert.alert(
            'Confirmação', 'Deseja realmente excluir esse item?',
            [
            {text: 'Sim', onPress: () => {
            //deleta o item
                database.collection(route.params.idUser).doc(id).delete();
                Alert.alert(
                    'Aviso', 'Animal excluido com Sucesso!',
                    [
                        {text: "OK", style: 'cancel',}
                    ],
                   )
            }
            },
            {text: 'Cancel',style: 'cancel',}
            ],
            {cancelable: true}, //permite cancelar ao clicar fora
            );
      
    }
   
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
                 <FlatList
                            showsVerticalScrollIndicator={false}
                            data={animais}
                            renderItem={( { item } )=>{
                            return(
                                   
                                <View>
                                {item.class === "animal"
                                ? 
                                <View  style={styles.viewDetalhesSuperior}>
                                    <View style={styles.viewItems}>
                                        <Text style={styles.textoItemTitle}>Detalhes:</Text>
                                        <Text style={styles.textoDetalhes}>Id Brinco: {item.length}</Text>
                                        <Text style={styles.textoDetalhes}>Tipo do Animal: {item.tipo} </Text>
                                        <Text style={styles.textoDetalhes}>Peso do Animal: {item.peso} </Text>
                                        <Text style={styles.textoDetalhes}>Data de aquisição: {item.data}</Text>
                                        <Text style={styles.textoDetalhes}>Valor do Animal: R$ {item.valorCompra}</Text>
                                        <Text style={styles.textoDetalhes}>controle: {item.class}</Text>
                                       
                                    
                                    </View>
                                    <View style={styles.viewBotoes}>
                                        <TouchableOpacity  style={styles.botaoEditar} onPress={()=>{delAnimal(item.id)}}>
                                            <Icon name="closesquare" size={20} color="white"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity  style={styles.botaoEditar} onPress={()=> navigation.navigate("EditarAnimal", {
                                            id: item.id,
                                            idBoi: item.idBoi,
                                            data: item.data,
                                            peso: item.peso,
                                            tipo: item.tipo,
                                            valorCompra: item.valorCompra,
                                            idUser: route.params.idUser
                                        })}>
                                            <Icon2 name="edit" size={20} color="white"/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                :
                                    <View></View>
                                } 
                            </View>
                            )
                            }}
                        />

                </ScrollView>
            
           </View>
    )

}
