import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    boxTop:{
        height:Dimensions.get("window").height/3,
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    boxMid:{
        height:Dimensions.get("window").height/4,
        width:"100%",
        paddingHorizontal:37,
        alignItems:"center",
        justifyContent:"center"
    },
    boxBottom:{
        height:Dimensions.get("window").height/3,
        width:"100%",
        alignItems:"center",
    },
    logo:{
        width:400,
        height:280,
    },
    text:{
        fontWeight:"bold",
        marginTop:-40,
        fontSize:22,
    },
    titleInput:{
        fontSize:17, // Aumente o tamanho da fonte aqui
        fontWeight: 'bold', // Mantém o texto em negrito
        marginLeft:5,
        color:themas.colors.gray,
        marginTop:50
    },
    BoxInput:{
        width:"100%",
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:5,
        backgroundColor:themas.colors.ligthGray,
        borderBlockEndColor:themas.colors.ligthGray
    },
    Input:{
        height:"100%",
        width:"90%",
        borderRadius:40,
        paddingLeft:5
    },
    button: {
        width:260,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:themas.colors.primary,
        borderBlockEndColor:themas.colors.primary,
        borderRadius:40,
        shadowColor:"000",
        shadowOffset:{width:0,height:3,},
        shadowOpacity:0.29,
        shadowRadius:4.65,
        elevation:7,
    },
    textButton:{
        fontSize:20,
        color:"#ffff",
        fontWeight:"bold"
    },
    textBottom:{
        fontSize:17,
        color: themas.colors.gray
    }
});
