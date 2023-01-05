import React, { useEffect, useState } from "react";
import { Button, Surface } from "@react-native-material/core";
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
const Products = (props) => {
    const [productData, setProductdata] = useState([])
    const get = async () => {
        try {
            let data = [], index = 0;
            const res = await axios.get('https://fakestoreapi.com/products/category/jewelery?limit=5')
            res.data.forEach(doc => {
                let dataObj = {
                    id: doc.id,
                    title: doc.title,
                    desc: doc.description,
                    price: doc.price,
                    image: doc.image
                }
                data[index++] = dataObj;
            });
            setProductdata(data);
        } catch (e) {
            console.log(e)
        }
    }
    const renderStore = ({ item }) => {
        return (
            <Surface style={{ alignContent: 'center', margin: 5, backgroundColor: '#CBEDD5', borderRadius: 20, borderColor: 'black' }} >
                       <Image resizeMode='contain' style={{ width: 200, height: 220, marginTop: 10, borderRadius: 20, alignSelf: 'center' }} source={{ uri: item.image }} />
                <View>
                    <Text>${item.price}</Text>
                </View>
                <Text style={{ fontSize: 12, fontWeight: 'bold', margin: 10 }} >{item.title}</Text>
            </Surface>
        )
    }
    useEffect(() => {
        get()
    }, [])
    return (
        <FlatList style={{ backgroundColor: '#439A97' }} data={productData} renderItem={renderStore} />
    )
}
export default Products;