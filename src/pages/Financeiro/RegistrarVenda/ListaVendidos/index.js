import React, {useState, useEffect} from 'react';
import firebase from '../../../../config/configFirebase';
import {Text, View, FlatList, TouchableOpacity, Alert, ScrollView} from 'react-native';
//formatacao css de um componente
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../../../GlobalStyle/styles';



export default function ListaVenda({navigation, route}) { 
    const database  = firebase.firestore();
    const [animais, setAnimais] = useState([]);

    function cancVenda(id) {
        Alert.alert(
            'Confirmação', 'Deseja cancelar essa venda?',
            [
            {text: 'Sim', onPress: () => {
            //deleta o item
            database.collection(route.params.idUser).doc(id).update({
                status: "comprado",
              })
                Alert.alert(
                    'Aviso', 'Venda cancelada com Sucesso!',
                    [
                        {text: "OK", style: 'cancel',}
                    ],
                   )
                   navigation.navigate("GerenciarVenda", {idUser:route.params.idUser})
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
                                {item.class === "animal" && item.status === "vendido"
                                ? 
                                <View  style={styles.viewDetalhesSuperior}>
                                    <View style={styles.viewItems}>
                                        <Text style={styles.textoItemTitle}>Detalhes:</Text>
                                        <Text style={styles.textoDetalhes}>Id Brinco: {item.idBoi}</Text>
                                        <Text style={styles.textoDetalhes}>Tipo do Animal: {item.tipo} </Text>
                                        <Text style={styles.textoDetalhes}>Peso do Animal: {item.peso} </Text>
                                        <Text style={styles.textoDetalhes}>Data de aquisição: {item.data}</Text>
                                        <Text style={styles.textoDetalhes}>Valor do Animal: {item.valorCompra.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                                        <Text style={styles.textoDetalhes}>Valor de Venda: {item.valorVenda.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                                        <Text style={styles.textoDetalhes}>Lucro: {item.lucroAdq.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                                    </View>
                                    <View style={styles.viewBotoes}>
                                        <TouchableOpacity  style={styles.botaoEditar} onPress={()=>{cancVenda(item.id)}}>
                                            <Icon name="closesquare" size={20} color="white"/>
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
