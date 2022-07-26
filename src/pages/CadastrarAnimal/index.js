import React, { useState } from "react";
import { Alert, View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from '../../config/configFirebase'
import styles from "../GlobalStyle/styles";
import Icon from 'react-native-vector-icons/Entypo';
import DropDownPicker from "react-native-dropdown-picker";
import { TextInputMask } from 'react-native-masked-text'





export default function CadastrarAnimal({ navigation, route }) {
    const database  = firebase.firestore();
    const [idBoi, setID] = useState(null);
    const [peso, setPeso] = useState(null);
    const [data, setData] = useState(null);
    const [valorCompra, setValorCompra] = useState(null);
    const [tipo, setTipo] = useState(null);


    //select Tipo Animal
    // const [openTipo, setOpenTipo] = useState(false);
    // const [valueTipo, setValueTipo] = useState('Selecione...');
    // const [tipo, setTipo] = useState([
    //   {label: 'Selecione...', value:'Selecione'},
    //   {label: 'Cria', value: 'Cria'},
    //   {label: 'Corte', value: 'Corte'},
    //   {label: 'Bezerro', value: 'Bezerro'},
    // ]);
   

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
        valorCompra: valorCompra,
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
                placeholder="ex.: Cria ou Corte "
                type="text"
                onChangeText={(text)=> setTipo(text)}
                value={tipo}
          />
        
          {/* <DropDownPicker
          open={openTipo}
          value={valueTipo}
          items= {tipo}
          setOpen={setOpenTipo}
          setValue={setValueTipo}
          setItems={setTipo}
          onChangeText={item => setValueTipo(item.value)}
          zIndex={2}

          style={styles.CampodeTexto2}
          /> */}

          <Text style={styles.texto}> data da aquisicão
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
            placeholder="Valor de compra "
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
        
     
        </View>
      )
    }
