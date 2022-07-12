import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Alert, } from 'react-native';
//formatacao css de um componente
import styles from '../GlobalStyle/styles';


export default function PrecoArroba({navigation, route}) { 
    const [dados, setDados] = useState([]);
    const endpoint = 'https://webserviceexpo.000webhostapp.com/Service/preco.php';
  

    useEffect(() => {
    fetch(endpoint)
    .then(res => res.json())
    .then( res => setDados(res))
      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados do Servidor!!');
      });
    },[]);
  


    return(    
            <View>
              <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dados}
                    renderItem={( { item } )=>{
                    return(
                         <View  style={styles.viewArroba}>
                               <View style={styles.viewDetalhesArroba}>
                               <Text style={styles.textoTitleArroba}>Detalhes:</Text>
                               <Text style={styles.textoDetalhesArroba}>Preco da Arroba: R$ {item.preco},00</Text>
                               <Text style={styles.textoDetalhesArroba}>data da cotacao: {item.dataCotacao}</Text>
                               <Text style={styles.textoDetalhesArroba}>Obs: valores podem ser alterado a 
                               qualquer momento  </Text>
                                    
                                </View>
                                <View style={styles.viewBotoes}>
                                    <TouchableOpacity style={styles.botaoLogin} onPress={()=>{navigation.navigate("Detalhes", {arroba: item.preco,
                                    idUser: route.params.idUser})}}>
                                          <Text style={styles.textoBotao}>Calcular Preco</Text>
                                    </TouchableOpacity>
                       
                                </View>
                                </View>
                            )
                            }}
                        />
        
           </View>
    )

}