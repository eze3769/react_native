import React from "react";
import { Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import Layout from "../../components/layout";
import ProductsList from "../../components/products-list";

const HomeHeader = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  flex-direction: row;
  gap: 20px;
`;

const SearchInputContainer = styled.View`
    width: 60%;
    border-color: #00000;
    border-bottom-width: 1px;
`;

const SearchButton = styled.Button`
    width: 40%;
`;

export default function HomePage() {
    const [items, setItems] = React.useState([]);
    const [searchText, setSearchText] = React.useState('');

    const handleClick = () =>{
        setItems([...items, searchText]);
        setSearchText('');
    };

    return (
        <Layout>
            <Text style={{ textAlign: 'center', paddingTop: 20 }}>
                Shopping list 
            </Text>
            <HomeHeader>
                <SearchInputContainer style={{  borderBottomWidth: 1}}>
                    <TextInput placeholder="What do you need to buy?" value={searchText} onChangeText={(text) => setSearchText(text)} className="search" />
                </SearchInputContainer>
                <SearchButton title="Add" onPress={handleClick} /> 
            </HomeHeader>
            <ProductsList list={items}  />
        </Layout>
    )
}