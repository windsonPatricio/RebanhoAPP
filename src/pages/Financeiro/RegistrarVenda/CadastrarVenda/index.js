import React, { useEffect, useState } from "react";
import { Alert, View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../../../config/configFirebase'
import styles from "../../../GlobalStyle/styles";
import { TextInputMask } from 'react-native-masked-text'


export default function CadastrarDepesa({ navigation, route }) {
    const database  = firebase.firestore();
    const [dados, setDados] = useState([]);
    const endpoint = 'https://webserviceexpo.000webhostapp.com/Service/preco.php';
    const [idBoi, setIdBoi] = useState(route.params.idBoi);
    const [valorCompra, setValorCompra] = useState(route.params.valorCompra);
    const [peso, setPeso] = useState(route.params.peso);
    const [valorVenda, setValorVenda] = useState(null);
    const [dataVenda, setDataVenda] = useState(null);
    const idAnimal = route.params.id
    let cotacao = 0
    let arroba = 0


    
    function relVenda(id, valorVenda, dataVenda){
        const venda = parseFloat(valorVenda.replace('R$', "").replace('.', '').replace(',', '.'));
        const lucro = venda - valorCompra;
        database.collection(route.params.idUser).doc(id).update({
          valorVenda: valorVenda,
          lucroAdq: lucro,
          status:"vendido",
          dataVenda: dataVenda
        })
        Alert.alert(
          'Aviso', 'Venda realizada com Sucesso!',
          [
              {text: "OK", style: 'cancel',}
          ],
         )
        navigation.navigate("GerenciarVenda", {idUser:route.params.idUser})
      }

      useEffect(() => {
        fetch(endpoint)
        .then(res => res.json())
        .then( res => setDados(res))
          .catch(() => {
            Alert.alert('Erro', 'Não foi possível carregar os dados do Servidor!!');
          });
        },[]);

        dados.forEach((data)=>{
            arroba = peso/15
            cotacao = data.preco*arroba;
         })

   

    return(
      <View>
        <View  style={styles.viewDetalhesSuperior}>
            <View style={styles.viewItems}>
                <Text style={styles.textoItemTitle}>Detalhes:</Text>
                <Text style={styles.textoDetalhes}>Id Brinco: {idBoi}</Text>
                <Text style={styles.textoDetalhes}>Valor de compra: R$ {valorCompra.toFixed(2).replace('.', ',')}</Text>
                <Text style={styles.textoDetalhes}>Valor pela cotação Arroba: R$ {cotacao.toFixed(2).replace('.', ',')}</Text>
            </View>        
        </View>
        <Text style={styles.texto}> Valor de venda
        </Text>
          <TextInputMask
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: ''
            }}
            placeholder="Valor de venda "
            value={valorVenda}
            onChangeText={setValorVenda}
            style={styles.CampodeTexto2}
          />
          <Text style={styles.texto}> data de venda
          </Text>
          <TextInputMask
            type={'datetime'}
            placeholder="DD/MM/AAAA "
            options={{
              format: 'DD/MM/YYYY'
            }}
            value={dataVenda}
            onChangeText={text => { setDataVenda(text) }}
            style={styles.CampodeTexto2}
          />
          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              relVenda(idAnimal, valorVenda, dataVenda)
            }}
          >
            <Text style={styles.textoBotao}>Vender</Text>
          </TouchableOpacity>
        
     
        </View>
      )
    }
