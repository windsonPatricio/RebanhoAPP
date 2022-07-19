import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../config/configFirebase'
import styles from "../GlobalStyle/styles";


export default function CadastrarAnimal({ navigation, route }) {
    const database  = firebase.firestore();
    const [idBoi, setIdBoiEdit] = useState(route.params.idBoi)
    const [peso, setPesoEdit] = useState(route.params.peso)
    const [tipo, setTipoEdit] = useState(route.params.tipo)
    const [data, setDataEdit] = useState(route.params.data)
    const [valor, setValorEdit] = useState(route.params.valor)
    const idAnimal = route.params.id

 
  function editAnimal(id, idBoi, peso, tipo, data, valor){
    database.collection(route.params.idUser).doc(id).update({
      idBoi: idBoi,
      peso: peso,
      tipo: tipo,
      data: data,
      valor: valor
    })
    Alert.alert(
      'Aviso', 'Dados Alterados com Sucesso!',
      [
          {text: "OK", style: 'cancel',}
      ],
     )
    navigation.navigate("ListaAnimal", {idUser:route.params.idUser})
  }

    return(
        <View>
          <Text style={styles.texto}> coloque a identificacão do animal:
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="identificacão brinco"
                type="numeric"
                keyboardType= "numeric"
                //keyboardAppearance="dark"
                onChangeText={setIdBoiEdit}
                value={idBoi}
          />
          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              Alert.alert(
                'Número de identificacão', 'Número localizado no brinco preso á orelha do animal',
                [
                    {text: "OK", style: 'cancel',}
                ],
               )
            }}
          >
            <Text style={styles.textoBotao}>Ajuda</Text>
          </TouchableOpacity>
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
          <Text style={styles.texto}> coloque o tipo do animal
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="ex: corte ou cria"
                type="text"
                keyboardAppearance="dark"
                onChangeText={setTipoEdit}
                value={tipo}
          />
           <Text style={styles.texto}> data da aquisicão
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="data "
                type="date"
                onChangeText={setDataEdit}
                value={data}
          />
          <Text style={styles.texto}> preco do animal
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="valor "
                type="text"
                onChangeText={setValorEdit}
                value={valor}
          />
          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              editAnimal(idAnimal, idBoi, peso, tipo, data, valor)
            }}
          >
            <Text style={styles.textoBotao}>Alterar</Text>
          </TouchableOpacity>
        </View>
      )
    }