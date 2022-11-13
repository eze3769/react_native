import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const ItemCard = ({ item }) => {
  return (
    <View style={style.item} >

        <View >
            <Text>
                {item}
            </Text>
        </View>
    </View>
  )
}

export default ItemCard;

const style = StyleSheet.create({
    item: {
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f2f3',
        padding: 10,
        borderRadius: 8
    }
})