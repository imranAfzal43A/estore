import React from "react";
import { Surface } from "@react-native-material/core";
import { FlatList, Image, Text, TouchableOpacity } from 'react-native';
const Categories = (props) => {
    const cateogires = [
        { cat: 'Jewelary', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' }
        , { cat: 'Electronics', img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' }
        , { cat: 'Men clothes', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }
        , { cat: 'Women clothes', img: 'https://images.unsplash.com/photo-1525845859779-54d477ff291f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }
    ]
    const renderStore = ({ item }) => {
        return (
            <TouchableOpacity onPress={()=>props.navigation.navigate('Products')} >
                <Surface elevation={5} style={{ alignContent: 'center', marginTop: 5, }} >
                    <Image resizeMode='contain' style={{ width: 200, height: 100, borderRadius: 20, alignSelf: 'center', marginTop: 5 }} source={{ uri: item.img }} />
                    <Text style={{ fontSize: 12, fontWeight: 'bold', margin: 10 }} >{item.cat}</Text>
                </Surface>
            </TouchableOpacity>
        )
    }
    return (

        <FlatList style={{ backgroundColor: '#439A97'}} data={cateogires} renderItem={renderStore} />
    )
}
export default Categories;