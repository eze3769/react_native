import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native';

const ItemCard = ({ item }) => {
  return (
    <View style={style.item}>
        <Text>
        {item}
        </Text>
        <Modal 
                visible={true}

        >
        <View>
            <Text>
                {item}
            </Text>
        </View>
        </Modal>
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