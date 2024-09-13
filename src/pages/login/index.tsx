import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator, Linking } from "react-native";
import { style } from "./style";
import Logo from "../../assets/dkt.png";
import { themas } from "../../global/themes";

export default function Login() {
    // Novo estado para controlar a opção selecionada
    const [option, setOption] = useState(""); 
    const [loading, setLoading] = useState(false);

    function handleOptionSelect(option: React.SetStateAction<string>) {
        setOption(option);

        // Navegar para o site apropriado
        const url = option === "1" ? "https://api.whatsapp.com/send/?phone=+551621016510&text=Ol%C3%A1%20preciso%20de%20ajuda%20para%20acionar%20meu%20seguro&type=phone_number&app_absent=0" : "https://tosegurado.com.br/cotacao/carro";
        Linking.openURL(url).catch((err) => console.error("Failed to open URL: ", err));
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.text}>Atendimento ao cliente</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>Assistência ou Sinistro</Text>
                <TouchableOpacity style={style.button} onPress={() => handleOptionSelect("1")}>
                    <Text style={style.textButton}>Acessar</Text>
                </TouchableOpacity>

                <Text style={style.titleInput}>Cotação de Seguro</Text>
                <TouchableOpacity style={style.button} onPress={() => handleOptionSelect("2")}>
                    <Text style={style.textButton}>Acessar</Text>
                </TouchableOpacity>
            </View>
            <View style={style.boxBottom}>
                {loading ?
                    <ActivityIndicator color={"#ffff"} size={"small"} /> :
                    <Text style={style.textButton}></Text>}
            </View>
            <Text style={style.textBottom}>
                Dúvidas? Fale conosco: 16 21016510 <Text style={{ color: themas.colors.primary }}></Text>
            </Text>
        </View>
);
}