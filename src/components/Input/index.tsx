import React, { forwardRef } from "react";
import { View,Text, TextInput } from "react-native";
import {style} from "./style";

export const Input = forwardRef(()=>{
    return(
        <View style={style.BoxInput}>
        <TextInput style={style.Input}
        value={email}
        onChangeText={setEmail}
        />
        <MaterialIcons 
        name="email"
        size={20}
        color={themas.colors.gray}/>
    </View>
    )
})