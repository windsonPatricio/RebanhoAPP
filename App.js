import React from 'react';
import firebase from './src/config/configFirebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Alert} from 'react-native';
import styles from './src/pages/GlobalStyle/styles';
import Icon2 from 'react-native-vector-icons/Entypo';
import Login from './src/pages/Login/';
import Pagina from './src/pages/Pagina/';
import NovoUser from './src/pages/NovoUser/';
import Detalhes from './src/pages/Detalhes';
import CadastrarAnimal from './src/pages/CadastrarAnimal';
import EditarAnimal from './src/pages/EditarAnimal';
import PrecoArroba from './src/pages/webService/PrecoArroba';

const Stack = createStackNavigator()

export default function App({navigation}) {

  function Logout(){
    firebase.auth().signOut().then(() => {
      navigation.navigate("Login")
    }).catch(() => {
        Alert.alert(
            'Aviso!', 'Não é possivel realizar Logout',
            [
                {text: "OK", style: 'cancel',}
            ]
        )
    });
  }

  return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName = "Login">
              <Stack.Screen
                name = "Login"
                component = {Login}
                options={{
                  headerShown: false
                
                }}
              />
              <Stack.Screen
                name = "Registrar"
                component = {NovoUser}
              />
            
              <Stack.Screen
                name = "Home"
                component = {Pagina}
                options={() => ({
                  headerShown: false
                })}
              />
              <Stack.Screen
                name = "Detalhes"
                component = {Detalhes}
                options={{
                  title: "Animais cadastrados"
                
                }}
              />
               <Stack.Screen
                name = "CadastrarAnimal"
                component = {CadastrarAnimal}
                options={{
                  title: "Cadastre seu Animal"
                
                }}
              /> 
              <Stack.Screen
                name = "EditarAnimal"
                component = {EditarAnimal}
                options={{
                  title: "Editar dados do Animal"
                
                }}
              />   
              <Stack.Screen
                name = "Financeiro"
                component = {PrecoArroba}
                options={{
                  title: "Cotacao do preco do Animal"
                }}
              />         
            </Stack.Navigator>

          </NavigationContainer>
  );
}