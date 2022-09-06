import React, { useState } from "react";
import { Alert, View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../../config/configFirebase'
import styles from "../../GlobalStyle/styles";
import { TextInputMask } from 'react-native-masked-text'
import {Picker} from '@react-native-picker/picker';



export default function CadastrarVacina({ navigation, route }) {
    const database  = firebase.firestore();
    const [idBoi, setIdBoi] = useState(route.params.idBoi)
    const [dataAplicacao, setDataAplicacao] = useState(null)
    const idAnimal = route.params.id
    const [vacinaSelecionada, setVacinaSelecionada] = useState(null)
    const [tipoVacina, setTipoVacina] = useState(['Selecione..',
                                                  'Febre Aftosa',
                                                  'Raiva',
                                                  'Brucelose'
                                                ])

   
  
   
    
    function addVacina(){
      database.collection(route.params.idUser).add({
        idAnimal: idAnimal,
        idBoi: idBoi,
        tipoVacina: vacinaSelecionada,
        dataAplicacao: dataAplicacao,
        class: 'vacina'
        
      })
      Alert.alert(
        'Aviso', 'Vacina cadastrada com Sucesso!',
        [
            {text: "OK", style: 'cancel',}
        ],
       )
      navigation.navigate("GerenciarVacinas", {idUser: route.params.idUser});
    }

   

    return(
      <View>
          <Text style={styles.texto}> data da aplicação:
          </Text>
            <TextInputMask
              type={'datetime'}
              placeholder="DD/MM/AAAA "
              options={{
                format: 'DD/MM/YYYY'
              }}
              value={dataAplicacao}
              onChangeText={text => { setDataAplicacao(text) }}
              style={styles.CampodeTexto2}
            />
          <Text style={styles.texto}> Tipo da Vacina:
          </Text>
          <Picker
              selectedValue={vacinaSelecionada}
              style={styles.CampoSelect}
              onValueChange={(itemValue) =>
                setVacinaSelecionada(itemValue)
              }>
                {
                  tipoVacina.map(vc =>{
                    return  <Picker.Item label={vc} value={vc} />
                  })
                }
          </Picker>

          <TouchableOpacity 
            style={styles.botaoLogin}
            onPress={()=>{
              addVacina()
            }}
          >
            <Text style={styles.textoBotao}>Registrar Vacina</Text>
          </TouchableOpacity>
        
     
        </View>
      )
    }
