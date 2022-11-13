import { FlatList, Text, TouchableOpacity } from "react-native";
import ItemCard from "../item-card/item-card";

const RenderItem = ({ item, handleOpenModal}) => {
    return (      
      <TouchableOpacity
        onPress={() => handleOpenModal(item)}
      >
        <ItemCard item={item} handleOpenModal={handleOpenModal} />
      </TouchableOpacity>
)
}

export default function ProductsList ({ list, handleOpenModal }) {
    return (
    <FlatList
      data={list}
      renderItem={(item) => <RenderItem item={item.item} handleOpenModal={handleOpenModal} />}
    />
    )
}