import { FlatList } from "react-native";
import ItemCard from "../item-card/item-card";

const renderItem = ({ item }) => {
    return (<ItemCard item={item} />)
}

export default function ProductsList ({list}) {
    return (
    <FlatList
      data={list}
      renderItem={renderItem}
    />
    )
}