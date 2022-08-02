import React from 'react';
import firebase from './src/config/configFirebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {Alert} from 'react-native';
import Login from './src/pages/Login/';
import Home from './src/pages/Pagina';
import NovoUser from './src/pages/NovoUser/';
import GerenciarAnimais from './src/pages/GerenciarAnimais/';
import ListaAnimal from './src/pages/GerenciarAnimais/ListaAnimal';
import CadastrarAnimal from './src/pages/GerenciarAnimais/CadastrarAnimal';
import EditarAnimal from './src/pages/GerenciarAnimais/EditarAnimal';
import GerenciarVacinas from './src/pages/GerenciarVacinas';
import ListaVacinal from './src/pages/GerenciarVacinas/ListaVacinal';
import CadastrarVacina from './src/pages/GerenciarVacinas/CadastrarVacina';
import EditarVacina from './src/pages/GerenciarVacinas/EditarVacina';
import Financeiro from './src/pages/Financeiro';
import ListaDespesas from './src/pages/Financeiro/RegistrarDespesa/ListaDespesas';
import CadastrarDespesa from './src/pages/Financeiro/RegistrarDespesa/CadastroDespesas';
import EditarDespesa from './src/pages/Financeiro/RegistrarDespesa/EditarDespesas';
import ListaVendidos from './src/pages/Financeiro/RegistrarVenda/ListaVendidos';
import ListaVenda from './src/pages/Financeiro/RegistrarVenda/ListaAnimaisParaVenda'
import VenderAnimal from './src/pages/Financeiro/RegistrarVenda/CadastrarVenda';
import GerenciarVenda from './src/pages/Financeiro/RegistrarVenda/GerenciaVenda';

const Stack = createStackNavigator()

export default function App({navigation}) {



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
                component = {Home}
                options={() => ({
                  headerShown: false
                })}
              />
              <Stack.Screen
                name = "GerenciarAnimais"
                component = {GerenciarAnimais}
                options={{
                  title: "Gerenciar animais"
                
                }}
              />
              <Stack.Screen
                name = "ListaAnimal"
                component = {ListaAnimal}
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
                name = "ListaVacinal"
                component = {ListaVacinal}
                options={{
                  title: "Vacinas aplicadas"
                
                }}
              />  
                <Stack.Screen
                name = "GerenciarVacinas"
                component = {GerenciarVacinas}
                options={{
                  title: "Controle Vacinal"
                
                }}
              />  
             <Stack.Screen
                name = "CadastrarVacina"
                component = {CadastrarVacina}
                options={{
                  title: "Registrar Vacina"
                
                }}
              />  
                <Stack.Screen
                name = "EditarVacina"
                component = {EditarVacina}
                options={{
                  title: "Editar dados da Vacina"
                
                }}
              />   
              <Stack.Screen
                name = "Financeiro"
                component = {Financeiro}
                options={{
                  title: "Financeiro"
                }}
              />     
               <Stack.Screen
                name = "ListaDespesas"
                component = {ListaDespesas}
                options={{
                  title: "Lista de despesas"
                
                }}
              />     
               <Stack.Screen
                name = "CadastrarDespesa"
                component = {CadastrarDespesa}
                options={{
                  title: "Cadastrar despesa"
                
                }}
              />  
              <Stack.Screen
                name = "EditarDespesa"
                component = {EditarDespesa}
                options={{
                  title: "Editar dados da Despesa"
                
                }}
              /> 
              <Stack.Screen
                name = "GerenciarVenda"
                component = {GerenciarVenda}
                options={{
                  title: "Gerenciar venda"
                
                }}
              />
              <Stack.Screen
                name = "ListaVendidos"
                component = {ListaVendidos}
                options={{
                  title: "Lista de animais vendidos"
                
                }}
              /> 
              <Stack.Screen
                name = "ListaVenda"
                component = {ListaVenda}
                options={{
                  title: "Lista de animais disponíveis"
                
                }}
              /> 
               <Stack.Screen
                name = "VenderAnimal"
                component = {VenderAnimal}
                options={{
                  title: "Realizar venda"
                
                }}
              /> 
            </Stack.Navigator>

          </NavigationContainer>
  );
}
