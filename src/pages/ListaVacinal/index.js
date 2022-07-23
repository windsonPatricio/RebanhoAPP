import React, {useState, useEffect} from 'react';
import firebase from '../../config/configFirebase';
import {Text, View, FlatList, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
//formatacao css de um componente
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../GlobalStyle/styles';


export default function ListaVacinal({navigation, route}) { 
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
                            
                                <View  style={styles.viewDetalhesSuperior}>
                                    <View style={styles.viewItems}>
                                        <Text style={styles.textoItemTitle}>Detalhes:</Text>
                                        <Text style={styles.textoDetalhes}>Id Brinco: {item.idBoi}</Text>
                                        <Text style={styles.textoDetalhes}>Tipo do Animal: {item.tipo} </Text>
                                        <Text style={styles.textoDetalhes}>Ultima Vacina: {item.ultVacina}</Text>
                                        <Text style={styles.textoDetalhes}>Ano: {item.anoAplicacao}</Text>
                                    
                                    </View>
                                    <View style={styles.viewBotoes}>
                                        <TouchableOpacity  style={styles.botaoEditar} onPress={()=> navigation.navigate("CadastrarVacina", {
                                            id: item.id,
                                            idBoi: item.idBoi,
                                            tipo: item.tipo,
                                            ultVacina: item.ultVacina,
                                            anoAplicacao: item.anoAplicacao,
                                            idUser: route.params.idUser
                                        })}>
                                            <Icon name="syringe" size={20} color="white"/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                            }}
                        />

                </ScrollView>
            
           </View>
    )

}
