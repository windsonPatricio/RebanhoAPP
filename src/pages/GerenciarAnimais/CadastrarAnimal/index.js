import React, { useState } from "react";
import { Alert, View, Text,Platform, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import firebase from '../../../config/configFirebase'
import styles from "../../GlobalStyle/styles";
import Icon from 'react-native-vector-icons/Entypo';
import { TextInputMask } from 'react-native-masked-text'
import {Picker} from '@react-native-picker/picker';





export default function CadastrarAnimal({ navigation, route }) {
    const database  = firebase.firestore();
    const [idBoi, setID] = useState(null);
    const [peso, setPeso] = useState(null);
    const [data, setData] = useState(null);
    const [valorCompra, setValorCompra] = useState(null);
    const [tipoSelecionado, setTipoSelecionado] = useState(null);
    const [tipoAnimal, setTipoAnimal] = useState(['Selecione..',
                                                  'Corte',
                                                  'Cria',
                                                  'Bezerro'
                                                ])
   

   function alertAjuda(){
    
      Alert.alert(
        'Número de identificação', 'Número localizado no brinco preso na orelha do animal',
        [
            {text: "OK", style: 'cancel',}
        ],
       )

   }
   
    function addAnimal(){
      const valor =  parseFloat(valorCompra.replace('R$', "").replace('.', '').replace(',', '.'));

      database.collection(route.params.idUser).add({
        idBoi: idBoi,
        tipo: tipoSelecionado,
        peso: peso,
        data: data,
        valorCompra: valor,
        class: 'animal',
        status: 'comprado',
        valorVenda: 0,
        lucroAdq: 0
        
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
      <KeyboardAvoidingView 
      behavior={Platform.select({
        ios: 'padding',
        android: null,
        })}
      >
        <ScrollView>
          <Text style={styles.texto}> coloque a identificação do animal:
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
            <Picker
              selectedValue={tipoSelecionado}
              style={styles.CampoSelect}
              onValueChange={(itemValue) =>
                setTipoSelecionado(itemValue)
              }>
                {
                  tipoAnimal.map(vc =>{
                    return  <Picker.Item label={vc} value={vc} />
                  })
                }
          </Picker>

          <Text style={styles.texto}> data da aquisição
          </Text>
          <TextInputMask
            type={'datetime'}
            placeholder="DD/MM/AAAA "
            options={{
              format: 'DD/MM/YYYY'
            }}
            value={data}
            onChangeText={text => { setData(text) }}
            style={styles.CampodeTexto2}
          />
          <Text style={styles.texto}> preco do animal
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
            keyboardType= "numeric"
            value={valorCompra}
            onChangeText={text => {setValorCompra(text)}}
            style={styles.CampodeTexto2}
          />
          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              addAnimal()
            }}
          >
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>
        
     
          </ScrollView>
          </KeyboardAvoidingView>
      )
    }
