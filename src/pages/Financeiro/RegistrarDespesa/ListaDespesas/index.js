import React, {useState, useEffect} from 'react';
import firebase from '../../../../config/configFirebase';
import {Text, View, FlatList, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
//formatacao css de um componente
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import styles from '../../../GlobalStyle/styles';


export default function ListaVacinal({navigation, route}) { 
    const database  = firebase.firestore();
    const [listagem, setListagem] = useState([]);
   
    
    function delDespesa(id) {
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
        setListagem(list);
      });
    }, []);
  
    return(    
            <View>
                <ScrollView style={styles.scroll }>
                 <FlatList
                            showsVerticalScrollIndicator={false}
                            data={listagem}
                            renderItem={( { item } )=>{
                            return(
                                <View>
                                    
                                {item.class === "despesa"
                                ?
                                    <View  style={styles.viewDetalhesSuperior}>
                                        
                                        <View style={styles.viewItems}>
                                            <Text style={styles.textoItemTitle}>Detalhes:</Text>
                                            <Text style={styles.textoDetalhes}>Tipo: {item.tipo}</Text>
                                            <Text style={styles.textoDetalhes}>Valor: {item.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </Text>
                                            <Text style={styles.textoDetalhes}>Descrição: {item.descricao} </Text>
                                        </View>
                                        <View style={styles.viewBotoes}>
                                            <TouchableOpacity  style={styles.botaoEditar} onPress={()=>{delDespesa(item.id)}}>
                                                <Icon name="closesquare" size={20} color="white"/>
                                            </TouchableOpacity>
                                            <TouchableOpacity  style={styles.botaoEditar} onPress={()=> navigation.navigate("EditarDespesa", {
                                                id: item.id,
                                                tipo:item.tipo,
                                                valorDes: item.valor,
                                                descricao: item.descricao,
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
                         <TouchableOpacity  style={styles.botaoLogin} onPress={()=> navigation.navigate("CadastrarDespesa", {
                            idUser: route.params.idUser })}>
                            <Text style={styles.textoBotao}>Cadastrar Despesas</Text>
                        </TouchableOpacity>
                </ScrollView>
           </View>
    )

}
