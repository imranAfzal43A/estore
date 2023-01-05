import React, { useEffect, useState } from "react";
import { ActivityIndicator, Surface } from "@react-native-material/core";
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
const Products = (props) => {
    const [productData, setProductdata] = useState([])
    const [loading, setLoading] = useState(false);
    const { uri } = props.route.params;
    const get = async () => {
        try {
            setLoading(true)
            let data = [], index = 0;
            const res = await axios.get(uri)
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
            setLoading(false);
            setProductdata(data);
        } catch (e) {
            setLoading(false);
            console.log(e)
        }
    }
    const renderStore = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('Details', item)}>
                <Surface style={{ alignContent: 'center', margin: 5, backgroundColor: '#439A97', borderRadius: 10, borderColor: 'black', borderWidth: 1 }} >
                    <View style={{ flexDirection: 'row' }}>
                        <Image resizeMode='contain' style={{ width: 200, height: 200, margin: 10, borderRadius: 20, alignSelf: 'center' }} source={{ uri: item.image }} />
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>${item.price}</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', width: 120, color: 'white' }} >{item.title}</Text>
                        </View>
                    </View>
                </Surface>
            </TouchableOpacity>
        )
    }
    useEffect(() => {
        get()
    }, [])
    return (
        <>
            {!loading ?
                <FlatList style={{}} data={productData} renderItem={renderStore} />
                :
                <ActivityIndicator color="#439A97" size={'large'} />
            }
        </>
    )
}
export default Products;