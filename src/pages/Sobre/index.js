import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
//formatacao css de um componente

import styles from '../GlobalStyle/styles';



export default function Sobre() { 

   
  
  
    return(    
            <View style={styles.viewSobre}>
                               
                <View  style={styles.viewDetalhesSobre}>
                        <Text style={styles.textoSobreTitle}>Versão do aplicativo:</Text>
                        <Text style={styles.textoSobre}>v 1.0 </Text>
                        <Text style={styles.textoSobreTitle}>Desenvolvedor:</Text>
                        <Text style={styles.textoSobre}> Windson Patricio de Medeiros</Text>
                        <Text style={styles.textoSobreTitle}>Teve Algum problema?</Text>
                        <Text style={styles.textoSobre}> Entre em contato pelo email:</Text>
                        <Text style={styles.textoSobre}> windson.medeiros@escolar.ifrn.edu.br</Text>
                </View>
                            
                                
            </View>
                  
    )

}
