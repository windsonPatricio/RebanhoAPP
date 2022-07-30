import React, {useState, useEffect} from 'react';
import firebase from '../../config/configFirebase';
import {Text, View, TouchableOpacity, Alert, ScrollView,} from 'react-native';
//formatacao css de um componente
import styles from '../GlobalStyle/styles';


export default function Financeiro({navigation, route}) { 
    const database  = firebase.firestore();
    const [animais, setAnimais] = useState([]);
    let saldoRebanho = 0;
    let saldoDespesa = 0;
  
  

    useEffect(() => {
      database.collection(route.params.idUser).onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setAnimais(list);
      });
    }, []);

    animais.forEach((data)=>{
        if(data.class === "animal"){
            saldoRebanho += data.valorCompra;
        }
        if(data.class === "despesa"){
            saldoDespesa += data.valor;
        }
    })


  
    return(    
            <View>
                <ScrollView style={styles.scroll }>
                            <Text style={styles.textoTitleQtd}> Saldo Rebanho</Text>
                                <View  style={styles.viewDetalhesSuperior}>
                                    <View style={styles.viewFin}>
                                        <Text style={styles.textoFin}> {saldoRebanho.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                                    </View>
                                </View>
                                <Text style={styles.textoTitleQtd}> Despesas Totais</Text>
                                <View  style={styles.viewDetalhesSuperior}>
                                    <View style={styles.viewFin}>
                                        <Text style={styles.textoFin}>{saldoDespesa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </Text>
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
                        <TouchableOpacity  style={styles.botaoLogin} onPress={()=> navigation.navigate("ListaDespesas", {
                            idUser: route.params.idUser })}>
                            <Text style={styles.textoBotao}>Registro de Despesas</Text>
                        </TouchableOpacity>
                </ScrollView>

             
            
           </View>
    )

}
