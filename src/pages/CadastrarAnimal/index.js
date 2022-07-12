import React, { useState } from "react";
import { Alert, View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../config/configFirebase'
import styles from "../GlobalStyle/styles";


export default function CadastrarAnimal({ navigation, route }) {
    const database  = firebase.firestore();
    const [peso, setPeso] = useState(null);
    const [tipo, setTipo] = useState(null);
   
    function addAnimal(){
      database.collection(route.params.idUser).add({
        peso: peso,
        tipo: tipo
      })
      Alert.alert(
        'Aviso', 'Animal cadastrado com Sucesso!',
        [
            {text: "OK", style: 'cancel',}
        ],
       )
      navigation.navigate("GerenciarAnimais", {idUser: route.params.idUser});
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
                onChangeText={(text)=> setPeso(text)}
                value={peso}
          />
          <Text style={styles.texto}> coloque o tipo do animal
          </Text>
          <TextInput
                style={styles.CampodeTexto}
                placeholder="ex: corte ou cria"
                type="text"
                keyboardAppearance="dark"
                onChangeText={(text)=> setTipo(text)}
                value={tipo}
          />
          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              addAnimal()
            }}
          >
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      )
    }