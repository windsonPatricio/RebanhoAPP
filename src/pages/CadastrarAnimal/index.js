import React, { useState } from "react";
import { Alert, View, ScrollView, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../config/configFirebase'
import styles from "../GlobalStyle/styles";


export default function CadastrarAnimal({ navigation, route }) {
    const database  = firebase.firestore();
    const [id, setID] = useState(null);
    const [tipo, setTipo] = useState(null);
    const [peso, setPeso] = useState(null);
    const [data, setData] = useState(null);
    const [valor, setValor] = useState(null);
    
   
   
    function addAnimal(){
      database.collection(route.params.idUser).add({
        id: id,
        tipo: tipo,
        peso: peso,
        data: data,
        valor: valor,
        ultVacina: null,
        anoAplicacao: null,
        class: 'animal'
        
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
      <View behavior="position" enabled>
        
          <Text style={styles.texto}> coloque a identificacão do animal:
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="identificacão brinco"
                type="numeric"
                keyboardType= "numeric"
                //keyboardAppearance="dark"
                onChangeText={(text)=> setID(text)}
                value={id}
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
                //keyboardAppearance="dark"
                onChangeText={(text)=> setPeso(text)}
                value={peso}
          />
          <Text style={styles.texto}> coloque o tipo do animal
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="ex: corte ou cria"
                type="text"
                keyboardAppearance="dark"
                onChangeText={(text)=> setTipo(text)}
                value={tipo}
          />
          <Text style={styles.texto}> data da aquisicão
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="data "
                type="date"
                onChangeText={(text)=> setData(text)}
                value={data}
          />
          <Text style={styles.texto}> preco do animal
          </Text>
          <TextInput
                style={styles.CampodeTexto2}
                placeholder="valor "
                type="text"
                onChangeText={(text)=> setValor(text)}
                value={valor}
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
