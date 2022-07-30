import React, { useState } from "react";
import { Alert, View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../../../config/configFirebase'
import styles from "../../../GlobalStyle/styles";
import { TextInputMask } from 'react-native-masked-text'


export default function CadastrarDepesa({ navigation, route }) {
    const database  = firebase.firestore();
    const [tipo, setTipo] = useState(route.params.tipo);
    const [valorDes, setValor] = useState(route.params.valorDes);
    const [descricao, setDescricao] = useState(route.params.descricao);
    const idDespesa = route.params.id

   
   

    function editDespesa(id, tipo, valorDes, descricao){
        const valor =  parseFloat(valorDes.replace('R$', "").replace('.', '').replace(',', '.'));
        database.collection(route.params.idUser).doc(id).update({
          tipo: tipo,
          valorDes: valor,
          descricao: descricao,
         
        })
        Alert.alert(
          'Aviso', 'Dados Alterados com Sucesso!',
          [
              {text: "OK", style: 'cancel',}
          ],
         )
        navigation.navigate("ListaDespesas", {idUser:route.params.idUser})
      }

   

    return(
      <View>
          <Text style={styles.texto}> Tipo despesa
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="ex.: insumo, cerca "
                type="text"
                onChangeText={setTipo}
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
            onChangeText={setValor}
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
                onChangeText={setDescricao}
                value={descricao}
          />
          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              editDespesa(idDespesa, tipo, valorDes, descricao)
            }}
          >
            <Text style={styles.textoBotao}>Alterar</Text>
          </TouchableOpacity>
        
     
        </View>
      )
    }
