import {StyleSheet} from 'react-native';
//Tudo que voce quiser acessar externamente tem que ter o export
//Separamos as cores, para o caso de precisarmos usá-la em outro local
export const TEXT_COLOR = "#4d4d4d";
export const TITLE_BG_COLOR = "black";
export const COLOR_FIN = "red";
const styles = StyleSheet.create({

// estilo geral
title:{
        fontSize:35,
        textAlign:'center',
},

texto:{
        fontSize:18,
        padding:15,
        color:TEXT_COLOR
},

textoLogin:{
        fontSize:18,
        padding:15,
        textAlign:'center',
        color:TEXT_COLOR
},

scroll:{

        height:"100%"
},

textoErro:{
        marginRight:50,
        fontWeight:"bold",
        textAlign:'center',
        fontSize:18,
        padding:15,
        color:TEXT_COLOR
},
link:{
        color: "blue"
},

textoBotao:{
        textAlign:'center',
        fontSize:18,
        padding:15,
        color:"white"
},

CampodeTexto:{
        fontSize: 20,
        textAlign: 'left',
        padding: 15,
        backgroundColor: 'white',
        borderStyle: "solid",
        borderBottomColor: "black",
        borderWidth: 3,
        borderRadius: 35,
        marginLeft: 40,
        marginRight: 40
},

// pagina login
botaoLogin:{
        backgroundColor:"black",
        textAlign: "center",
        fontSize: 30,
        margin: 15,
        marginLeft: 80,
        marginRight: 80, 
        borderRadius: 35
},

viewLogin:{
        backgroundColor: "white",
        justifyContent: "center",
        height:"100%"
},

imagemLogin:{        
        width:350,
        height: 350, 
        justifyContent:"center",
        alignSelf: 'center',
        marginTop: 50,
},

erroLogin:{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 5 
},

iconErroLogin:{
        justifyContent: "center",
        marginTop: 20,
        marginLeft:40
        
},


textoCadastrar:{
        textAlign:'center',
        color: "blue", 
        fontSize:18,
        padding:15,
      
       
},

linkRegistro:{
        flexDirection:"column",
        justifyContent:"center"
},

//pagina inicial
OpcoesPgInicial:{
        backgroundColor:"black",
        textAlign: "center",
        width: 160,
        height:160,
        fontSize: 30,
        margin: 10,
        marginLeft:10,
        marginRight: 10,
        borderRadius: 35
},


viewTelaInicial:{
        height:"100%",
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf:"center",
        backgroundColor:'white',
},
viewTelaInicialSuperior:{
        backgroundColor:"white",
        borderRadius: 40,
        flexDirection:"row",
        marginLeft:5,
        marginRight:5,
        borderWidth:3,
        margin:50
},
imagemHome:{        
        width:255,
        height: 40, 
        justifyContent:"center",
        alignSelf: 'center',
        marginLeft:30,
        borderColor: "black"
},

viewLogout:{
        flexDirection: "row",
        marginLeft: 40,
        height: 50,
        margin: 10,
        padding: 12,
        justifyContent:"center",
        alignSelf: "flex-end",
        width:50,
        backgroundColor: "black",
        color: "white",
        borderRadius: 30,
        borderWidth: 2 
},

iconeBotao:{
        marginTop: 20,
        color: "white",
        alignSelf: "center"
},

//pagina detalhes

viewDetalhesSuperior:{
        flexDirection: "row",
        backgroundColor:"white",
        borderRadius: 30,
        marginLeft:5,
        marginRight:5,
        borderWidth:3,
        padding: 10,
        margin: 10
},

viewItems:{
        flexDirection: "column",
        width: "75%",
        marginLeft: 5
},

viewBotoes:{
        flexDirection: "column-reverse"
}, 

botaoDetalhes:{
        backgroundColor:"black",
        position: "absolute",
        textAlign: "center",
        fontSize: 30,
        margin: 15,
        marginLeft: 80,
        marginRight: 80, 
        borderRadius: 35

},
botaoEditar:{
        marginLeft: 15,
        height: 50,
        margin: 10,
        padding: 10,
        justifyContent:"center",
        width:50,
        backgroundColor: "black",
        color: "white",
        borderRadius: 30,
        borderWidth: 2 
},

textoItemTitle:{
        fontSize: 30,
        marginLeft:10,
        marginTop: 5,
        fontWeight:"bold"
},

textoDetalhes:{
        fontSize: 22,
        marginTop: 2,
        marginLeft: 10,
        color:TEXT_COLOR
        
},

//Gerenciar animais
textoQtd:{
        fontSize: 50,
        marginLeft:80,
        marginTop: 5,
        fontWeight:"bold"
},

viewQtd:{
        flexDirection: "column",
        width: "50%",
        marginLeft: 5
},

botaoListar:{
        marginRight: 30,
        height: 50,
        margin: 10,
        justifyContent:"center",
        width:150,
        fontWeight:"bold",
        backgroundColor: "black",
        color: "white",
        borderRadius: 30,
        borderWidth: 2 
},

textoBotaoListar:{
        textAlign:'center',
        fontWeight:"bold",
        fontSize:23,
        padding:10,
        color:"white"
},
textoTitleQtd:{
        fontSize: 25,
        textAlign:'center',
        marginTop: 5,
        marginLeft: 10,
        color:TITLE_BG_COLOR
        
},
 //Tela cadastro

 CampodeTexto2:{
        fontSize: 20,
        padding: 15,
        backgroundColor: 'white',
        textAlign: 'left',
        borderStyle: "solid",
        borderBottomColor: "black",
        borderWidth: 3,
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10
 },
 

 CampodeTexto3:{
        fontSize: 20,
        padding: 15,
        width:'75%',
        backgroundColor: 'white',
        textAlign: 'left',
        borderStyle: "solid",
        borderBottomColor: "black",
        borderWidth: 3,
        borderRadius: 25,
        marginLeft: 10,
        marginRight:10
        
 },

viewCampoTextoId:{
        flexDirection: 'row',
        justifyContent:"center",
         borderStyle: "solid",
        borderBottomColor: "black",
},

botaoAjuda:{
        height: 50,
        margin: 5,
        marginRight:5,
        padding: 10,
        justifyContent:"center",
        width:50,
        backgroundColor: "black",
        color: "white",
        borderRadius: 30,
        borderWidth: 2 
},
// Tela gerencia vacinal

viewDetalhesVacina:{
        flexDirection: "column",
        backgroundColor:"white",
        borderRadius: 30,
        marginLeft:5,
        marginRight:5,
        borderWidth:3,
        padding: 10,
        margin: 10
},

viewBotoesVacina:{
        flexDirection: "row",
        width: "50%",
}, 

botaoVacina:{
        backgroundColor:"black",
        textAlign: "center",
        fontSize: 20,
        margin: 10,
        width:"90%",
        borderRadius: 35
},

viewNaoVac:{
        justifyContent: 'center',
        alignContent: "center",
        marginTop: '70%'
},

textNaoVac:{
        textAlign:'center',
        fontWeight:"bold",
        fontSize:30,
        padding: 5,
     
},

CampoSelect:{
        fontSize: 20,
        padding: 5,
        backgroundColor: 'white',
        textAlign: 'left',
        borderStyle: "solid",
        borderBottomColor: "black",
        borderWidth: 3,
        borderRadius: 25,
        marginLeft: 10,
        marginRight: 10
 },

//Tela Financeiro

viewFin:{
        justifyContent: "center",
        width: "100%",
        marginLeft: 5
},

textoFin:{
        fontSize: 35,
        marginLeft:80,
        marginTop: 5,
        fontWeight:"bold"
},

textoFin2:{
        fontSize: 35,
        color: COLOR_FIN,
        marginLeft: 80,
        marginTop: 5,
        fontWeight:"bold"
},

// Tela Arroba

viewArroba:{
        backgroundColor:"white",
        borderRadius: 40,
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"center",
        marginLeft:5,
        marginRight:5,
        borderWidth:3,
        margin:20
        
        
},
viewDetalhesArroba:{
        width: "100%",
        justifyContent:"center",
        padding:10
},

textoTitleArroba:{
        fontSize: 30,
        marginLeft:10,
        alignSelf:"center",
        marginTop: 5,
        fontWeight:"bold",
        padding: 5
},

textoDetalhesArroba:{
        fontSize: 22,
        marginTop: 2,
        marginLeft: 10,
        color:TEXT_COLOR
        
},

precoArroba:{
        fontSize: 22,
        marginTop: 2,
        marginLeft: 10,
        fontWeight:"bold",
        color:TEXT_COLOR
        
},

});

export default styles