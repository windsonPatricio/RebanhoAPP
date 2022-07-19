import React, { useState } from "react";
import { Alert, View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../config/configFirebase'
import styles from "../GlobalStyle/styles";
import Icon from 'react-native-vector-icons/Entypo';




export default function CadastrarAnimal({ navigation, route }) {
    const database  = firebase.firestore();
    const [idBoi, setID] = useState(null);
    const [tipo, setTipo] = useState(null);
    const [peso, setPeso] = useState(null);
    const [data, setData] = useState(null);
    const [valor, setValor] = useState(null);
    
   function alertAjuda(){
    
      Alert.alert(
        'Número de identificacão', 'Número localizado no brinco preso á orelha do animal',
        [
            {text: "OK", style: 'cancel',}
        ],
       )

   }
   
    function addAnimal(){
      database.collection(route.params.idUser).add({
        idBoi: idBoi,
        tipo: tipo,
        peso: peso,
        data: data,
        valor: valor,
        ultVacina: 'Não aplicada',
        anoAplicacao: 'Não aplicada',
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
      <View>
          <Text style={styles.texto}> coloque a identificacão do animal:
          </Text>
          <View style={styles.viewCampoTextoId}>
          <TextInput
                style={styles.CampodeTexto3}
                placeholder="id brinco"
                type="numeric"
                keyboardType= "numeric"
                //keyboardAppearance="dark"
                onChangeText={(text)=> setID(text)}
                value={idBoi}
          />
          <TouchableOpacity  style={styles.botaoAjuda} onPress={()=>{alertAjuda()}}>
                <Icon name="help" size={20} color="white"/>
          </TouchableOpacity>
          </View>
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
