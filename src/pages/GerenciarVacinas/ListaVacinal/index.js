import React, {useState, useEffect} from 'react';
import firebase from '../../../config/configFirebase';
import {Text, View, FlatList, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
//formatacao css de um componente
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import styles from '../../GlobalStyle/styles';


export default function ListaVacinal({navigation, route}) { 
    const database  = firebase.firestore();
    const [animais, setAnimais] = useState([]);
    const idAnimal = route.params.idAnimal
    
    function delVacina(id) {
        Alert.alert(
            'Confirmação', 'Deseja realmente excluir esse item?',
            [
            {text: 'Sim', onPress: () => {
            //deleta o item
                database.collection(route.params.idUser).doc(id).delete();
                Alert.alert(
                    'Aviso', 'Vacina excluida com Sucesso!',
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
                                    
                                {idAnimal === item.idAnimal && item.class === "vacina"
                                ?
                                    <View  style={styles.viewDetalhesSuperior}>
                                        
                                        <View style={styles.viewItems}>
                                            <Text style={styles.textoItemTitle}>Detalhes:</Text>
                                            <Text style={styles.textoDetalhes}>Id Brinco: {item.idBoi}</Text>
                                            <Text style={styles.textoDetalhes}>Tipo Vacina: {item.tipoVacina} </Text>
                                            <Text style={styles.textoDetalhes}>Data aplicação: {item.dataAplicacao} </Text>
                                        </View>
                                        <View style={styles.viewBotoes}>
                                            <TouchableOpacity  style={styles.botaoEditar} onPress={()=>{delVacina(item.id)}}>
                                                <Icon name="closesquare" size={20} color="white"/>
                                            </TouchableOpacity>
                                            <TouchableOpacity  style={styles.botaoEditar} onPress={()=> navigation.navigate("EditarVacina", {
                                                id: item.id,
                                                idAnimal:item.idAnimal,
                                                tipo: item.tipoVacina,
                                                data: item.dataAplicacao,
                                                idUser: route.params.idUser
                                            })}>
                                                <Icon2 name="edit" size={20} color="white"/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    

                                :
                                    <View>
                                     
                                     
                                    </View>
                                }
                             
                                </View>
                                
                             ) 
                        }}
                        />
                </ScrollView>
           </View>
    )

}
