import React, {useState, useEffect} from 'react';
import firebase from '../../../../config/configFirebase';
import {Text, View, FlatList, TouchableOpacity, Alert, ScrollView} from 'react-native';
//formatacao css de um componente
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../../GlobalStyle/styles';



export default function ListaAnimalVenda({navigation, route}) { 
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
                 <FlatList
                            showsVerticalScrollIndicator={false}
                            data={animais}
                            renderItem={( { item } )=>{
                            return(
                                   
                                <View>
                                {item.class === "animal" && item.status === "comprado"
                                ? 
                                <View  style={styles.viewDetalhesSuperior}>
                                    <View style={styles.viewItems}>
                                        <Text style={styles.textoItemTitle}>Detalhes:</Text>
                                        <Text style={styles.textoDetalhes}>Id Brinco: {item.idBoi}</Text>
                                        <Text style={styles.textoDetalhes}>Tipo do Animal: {item.tipo} </Text>
                                        <Text style={styles.textoDetalhes}>Peso do Animal: {item.peso} </Text>
                                        <Text style={styles.textoDetalhes}>Data de aquisição: {item.data}</Text>
                                        <Text style={styles.textoDetalhes}>Valor de compra: R$ {item.valorCompra.toFixed(2).replace('.', ',')}</Text>
                                    </View>
                                    <View style={styles.viewBotoes}>
                                    <TouchableOpacity  style={styles.botaoEditar} onPress={()=> navigation.navigate("PesarAnimal", {
                                            id: item.id,
                                            peso: item.peso,
                                            idUser: route.params.idUser
                                        })}>
                                            <Icon name="balance-scale" size={20} color="white"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity  style={styles.botaoEditar} onPress={()=> navigation.navigate("VenderAnimal", {
                                            id: item.id,
                                            idBoi: item.idBoi,
                                            peso: item.peso,
                                            valorCompra: item.valorCompra,
                                            idUser: route.params.idUser
                                        })}>
                                            <Icon2 name="point-of-sale" size={20} color="white"/>
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
