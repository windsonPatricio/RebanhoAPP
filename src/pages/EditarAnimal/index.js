import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../config/configFirebase'
import styles from "../GlobalStyle/styles";


export default function CadastrarAnimal({ navigation, route }) {
    const database  = firebase.firestore();
    const [peso, setPesoEdit] = useState(route.params.peso)
    const [tipo, setTipoEdit] = useState(route.params.tipo)
    const idAnimal = route.params.id

 
  function editAnimal(peso, tipo, id){
    database.collection(route.params.idUser).doc(id).update({
      peso: peso,
      tipo: tipo
    })
    navigation.navigate("Detalhes", {idUser:route.params.idUser})
  }

    return(
        <View>
          <Text style={styles.texto}> coloque o peso do animal
          </Text>
          <TextInput
                style={styles.CampodeTexto}
                placeholder="Peso do animal"
                type="numeric"
                keyboardType= "numeric"
                keyboardAppearance="dark"
                onChangeText={setPesoEdit}
                value={peso}
          />
          <Text style={styles.texto}> coloque o tipo do animal
          </Text>
          <TextInput
                style={styles.CampodeTexto}
                placeholder="ex: corte ou cria"
                type="text"
                keyboardAppearance="dark"
                onChangeText={setTipoEdit}
                value={tipo}
          />
          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              editAnimal(peso, tipo, idAnimal)
            }}
          >
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      )
    }