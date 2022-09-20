import React, { useState } from "react";
import { View, ScrollView, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../../config/configFirebase'
import styles from "../../GlobalStyle/styles";
import { TextInputMask } from 'react-native-masked-text'
import Icon from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-picker/picker';


export default function EditarAnimal({ navigation, route }) {
    const database  = firebase.firestore();
    const [idBoi, setIdBoiEdit] = useState(route.params.idBoi)
    const [peso, setPesoEdit] = useState(route.params.peso)
    const [data, setDataEdit] = useState(route.params.data)
    const [tipoSelecionado, setTipoSelecionado] = useState(route.params.tipo);
    const [valorCompra, setValorCompraEdit] = useState(route.params.valorCompra)
    const [tipoAnimal, setTipoAnimal] = useState(['Selecione..',
                                                    'Corte',
                                                    'Cria',
                                                    'Bezerro'
                                                  ])
    const idAnimal = route.params.id

    function alertAjuda(){
    
      Alert.alert(
        'Número de identificacão', 'Número localizado no brinco preso á orelha do animal',
        [
            {text: "OK", style: 'cancel',}
        ],
       )

    }
   

  function editAnimal(id, idBoi, peso, tipoSelecionado, data, valorCompra){
   
    database.collection(route.params.idUser).doc(id).update({
      idBoi: idBoi,
      peso: peso,
      tipo: tipoSelecionado,
      data: data,
      valorCompra: valorCompra
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
        <ScrollView>
          <Text style={styles.texto}> coloque a identificacão do animal:
          </Text>
          <View style={styles.viewCampoTextoId}>
            <TextInput
                  style={styles.CampodeTexto3}
                  placeholder="id brinco"
                  type="numeric"
                  keyboardType= "numeric"
                  //keyboardAppearance="dark"
                  onChangeText={setIdBoiEdit}
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
                keyboardAppearance="dark"
                onChangeText={setPesoEdit}
                value={peso}
          />
          <Text style={styles.texto}> Coloque o tipo do animal
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
           <Text style={styles.texto}> data da aquisicão
          </Text>
           <TextInputMask
            type={'datetime'}
            placeholder="DD/MM/AAAA "
            options={{
              format: 'DD/MM/YYYY'
            }}
            value={data}
            onChangeText={setDataEdit}
            style={styles.CampodeTexto2}
          />
          <Text style={styles.texto}> preco do animal
          </Text>
          <TextInputMask
            type={'money'}
            placeholder="Valor de compra "
            value={valorCompra}
            onChangeText={setValorCompraEdit}
            style={styles.CampodeTexto2}
          />
          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              editAnimal(idAnimal, idBoi, peso, tipoSelecionado, data, valorCompra)
            }}
          >
            <Text style={styles.textoBotao}>Alterar</Text>
          </TouchableOpacity>
        </ScrollView>
      )
    }