import React, {useState, useEffect} from 'react';
import firebase from '../../config/configFirebase';
import {Text, View, FlatList, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
//formatacao css de um componente
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../GlobalStyle/styles';


export default function GerenciarVacinas({navigation, route}) { 
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
                            
                                <View  style={styles.viewDetalhesVacina}>
                                    <View style={styles.viewItems}>
                                        <Text style={styles.textoItemTitle}>Detalhes:</Text>
                                        <Text style={styles.textoDetalhes}>Id Brinco: {item.idBoi}</Text>
                                        <Text style={styles.textoDetalhes}>Tipo do Animal: {item.tipo} </Text>
                                    </View> 
                                    <View style={styles.viewBotoesVacina}>
                                    <TouchableOpacity  style={styles.botaoVacina} onPress={()=> navigation.navigate("CadastrarVacina", {
                                            idUser: route.params.idUser,
                                            id: item.id,
                                            idBoi: item.idBoi,
                                             })}>
                                            <Text style={styles.textoBotao}>Registrar vacinacão</Text>
                                     </TouchableOpacity>
                                    
                                     <TouchableOpacity  style={styles.botaoVacina} onPress={()=> navigation.navigate("ListaVacinal", {
                                            idUser: route.params.idUser,
                                            idAnimal: item.id,
                                            idBoi: item.idBoi,
                                            })}>
                                            <Text style={styles.textoBotao}>Vacinas Aplicadas</Text>
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
