import React, { useState } from "react";
import { View, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../../../config/configFirebase'
import styles from "../../../GlobalStyle/styles";



export default function Pesagem({ navigation, route }) {
    const database  = firebase.firestore();
    const [peso, setPesoEdit] = useState(route.params.peso)
    const idAnimal = route.params.id

 
 

  function editAnimal(id, peso ){


    database.collection(route.params.idUser).doc(id).update({
    
      peso: peso,

    })
    Alert.alert(
      'Aviso', 'Pesagem realizada com Sucesso!',
      [
          {text: "OK", style: 'cancel',}
      ],
     )
    navigation.navigate("ListaVenda", {idUser:route.params.idUser})
  }

    return(
        <View>
       
          <Text style={styles.texto}> coloque o peso do animal
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="Peso do animal"
                type="numeric"
                keyboardType= "numeric"
                keyboardAppearance="dark"
                onChangeText={setPesoEdit}
                value={peso}
          />
          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              editAnimal(idAnimal, peso)
            }}
          >
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      )
    }