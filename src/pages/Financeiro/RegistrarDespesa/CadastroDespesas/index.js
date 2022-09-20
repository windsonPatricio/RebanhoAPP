import React, { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../../../config/configFirebase'
import styles from "../../../GlobalStyle/styles";
import { TextInputMask } from 'react-native-masked-text'


export default function CadastrarDepesa({ navigation, route }) {
    const database  = firebase.firestore();
    const [tipo, setTipo] = useState(null);
    const [valorDes, setValor] = useState(null);
    const [descricao, setDescricao] = useState(null);


   
    function addDespesa(){
      const valor =  parseFloat(valorDes.replace('R$', "").replace('.', '').replace(',', '.'));

      database.collection(route.params.idUser).add({
        tipo: tipo,
        valor: valor,
        descricao: descricao,
        class: 'despesa',
      })
      Alert.alert(
        'Aviso', 'Despesa cadastrada com Sucesso!',
        [
            {text: "OK", style: 'cancel',}
        ], 
       )
      navigation.navigate("ListaDespesas", {idUser: route.params.idUser});
    }

   

    return(
      <ScrollView>
          <Text style={styles.texto}> Tipo despesa
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="ex.: insumo, cerca "
                type="text"
                onChangeText={(text)=> setTipo(text)}
                value={tipo}
          />
          <Text style={styles.texto}> Valor da despesa
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
            placeholder="Valor de compra "
            value={valorDes}
            onChangeText={text => {setValor(text)}}
            style={styles.CampodeTexto2}
          />
        <Text style={styles.texto}> Descrição:
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                multiline={true}
                numberOfLines={4}
                placeholder="ex.: insumo, cerca "
                type="text"
                onChangeText={(text)=> setDescricao(text)}
                value={descricao}
          />
          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              addDespesa()
            }}
          >
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>
        
     
        </ScrollView>
      )
    }
