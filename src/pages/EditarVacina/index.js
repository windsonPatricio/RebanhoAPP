import React, { useState } from "react";
import { Alert, View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../config/configFirebase'
import styles from "../GlobalStyle/styles";
import { TextInputMask } from 'react-native-masked-text'




export default function CadastrarVacina({ navigation, route }) {
    const database  = firebase.firestore();
    const [tipoVacina, setTipoVacinaEdit] = useState(route.params.tipo)
    const [dataAplicacao, setDataAplicacaoEdit] = useState(route.params.data)
    const idVacina = route.params.id
    const idAnimal = route.params.idAnimal

    function editVacina(id, tipoVacina, dataAplicacao){
      database.collection(route.params.idUser).doc(id).update({
        tipoVacina: tipoVacina,
        dataAplicacao: dataAplicacao,
      })
      Alert.alert(
        'Aviso', 'Dados Alterados com Sucesso!',
        [
            {text: "OK", style: 'cancel',}
        ],
       )
      navigation.navigate("ListaVacinal", {
        idUser:route.params.idUser,
        idAnimal: idAnimal
      })
    }

    return(
      <View>
          <Text style={styles.texto}> Tipo da Vacina:
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="Tipo Vacina "
                type="text"
                onChangeText={setTipoVacinaEdit}
                value={tipoVacina}
          />
          <Text style={styles.texto}> data da aplicacão:
          </Text>
          <TextInputMask
            type={'datetime'}
            placeholder="DD/MM/AAAA "
            options={{
              format: 'DD/MM/YYYY'
            }}
            value={dataAplicacao}
            onChangeText={setDataAplicacaoEdit }
            style={styles.CampodeTexto2}
          />
          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              editVacina(idVacina, tipoVacina, dataAplicacao)
            }}
          >
            <Text style={styles.textoBotao}>Alterar</Text>
          </TouchableOpacity>
        
     
        </View>
      )
    }
