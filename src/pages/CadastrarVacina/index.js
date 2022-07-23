import React, { useState } from "react";
import { Alert, View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../config/configFirebase'
import styles from "../GlobalStyle/styles";
import Icon from 'react-native-vector-icons/Entypo';




export default function CadastrarVacina({ navigation, route }) {
    const database  = firebase.firestore();
    const [idBoi, setIdBoiEdit] = useState(route.params.idBoi)
    const [novaVacina, setNovaVacina] = useState(null)
    const [novoAno, setNovoAno] = useState(null)
    const [ultVacina, setUltVacinaEdit] = useState(route.params.ultVacina)
    const [anoAplicacao, setAnoAplicacaoEdit] = useState(route.params.anoAplicacao)
    const idAnimal = route.params.id
  
    function cadVacina(id, idBoi, novaVacina, novoAno){
      database.collection(route.params.idUser).doc(id).update({
        idBoi: idBoi,
        ultVacina: novaVacina,
        anoAplicacao: novoAno
      })
      Alert.alert(
        'Aviso', 'Vacina cadastrado com Sucesso!',
        [
            {text: "OK", style: 'cancel',}
        ],
       )
      navigation.navigate("ListaVacinal", {idUser:route.params.idUser})
    }

   

    return(
      <View>
          <View style={styles.viewItems}>
              <Text style={styles.textoDetalhes}>Id Brinco: {idBoi}</Text>
              <Text style={styles.textoDetalhes}>Ultima Vacina: {ultVacina}</Text>
              <Text style={styles.textoDetalhes}>Ano: {anoAplicacao}</Text>
          </View>
          <Text style={styles.texto}> Tipo da Vacina:
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="Tipo Vacina "
                type="text"
                onChangeText={(text)=> setNovaVacina(text)}
                value={novaVacina}
          />
          <Text style={styles.texto}> Ano da aplicacão:
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="Ano "
                keyboardType= "numeric"
                type="text"
                onChangeText={(text)=> setNovoAno(text)}
                value={novoAno}
          />
          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              cadVacina(idAnimal, idBoi, novaVacina,novoAno)
            }}
          >
            <Text style={styles.textoBotao}>Registrar Vacina</Text>
          </TouchableOpacity>
        
     
        </View>
      )
    }
