import React from "react";
import { Button, Surface } from "@react-native-material/core";
import { Image, ScrollView, Text } from 'react-native';
const Details = (props) => {
    const { title, desc, price, image } = props.route.params;
    return (
        <ScrollView>
            <Surface style={{ alignContent: 'center', margin: 5, backgroundColor: '#439A97', borderRadius: 10, borderColor: 'black', borderWidth: 1 }} >
                <Image resizeMode='contain' style={{ width: 300, height: 280, margin: 10, borderRadius: 10, alignSelf: 'center' }} source={{ uri: image }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>${price}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', width: '80%', alignSelf: 'center', padding: 10, color: 'white' }} >{title}</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', width: '90%', alignSelf: 'center', padding: 10, color: 'white' }} >{desc}</Text>
            </Surface>
            <Button style={{ width: '60%', alignSelf: 'center', backgroundColor: '#439A97', margin: 10 }} title='Buy now' />
            <Button style={{ width: '60%', alignSelf: 'center', backgroundColor: '#439A97', margin: 10 }} title='Add to cart' />
        </ScrollView>
    )
}
export default Details;