import React from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
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
    const [selectedItem, setSelectedItem] = React.useState('');

    const handleAdd = () =>{
        setItems([...items, searchText]);
        setSearchText('');
    };

    const handleOpenModal = (value) => {
        setSelectedItem(value);   
    }

    const handleCloseModal = () => {
        setItems(items.filter(el => el !== selectedItem))
        setSelectedItem('');
    }

    const handleKeyPress = (event) => {
       
        if (event.key === 'Enter') {
            event.preventDefault()
            handleAdd();
        }
        if (event.key === 'Escape') {
            e.target.blur();
            setSearchText('');
        }
    } 

    return (
        <Layout>
            <Text style={{ textAlign: 'center', paddingTop: 20 }}>
                Shopping list 
            </Text>
            <HomeHeader>
                <SearchInputContainer style={{  borderBottomWidth: 1}}>
                    <TextInput placeholder="What do you need to buy?" value={searchText} onChangeText={(text) => setSearchText(text)} onKeyPress={handleKeyPress} className="search" />
                </SearchInputContainer>
                <SearchButton title="Add" onPress={handleAdd} /> 
            </HomeHeader>
            <ProductsList list={items} handleOpenModal={handleOpenModal} />
            <Modal visible={!!selectedItem} >
                <View style={[style.modal.container, style.modal.shadowProp]}>
                    <View style={style.modal.header.container}>
                      <Text style={style.modal.header.text}>
                        Confirmation
                      </Text>
                    </View>  
                    <View style={style.modal.body}>
                        <Text>
                            Do you want to delete <Text style={style.modal.body.text.highlighted}>{selectedItem}</Text> from your list?
                        </Text>
                    </View>
                    <View style={style.modal.actions}>
                        <Button title="Delete" style={{ color: 'red' }} onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>
        </Layout>
    )
}

const style = StyleSheet.create({
    modal: {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            padding: 20,
            marginTop: 300,
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 10,
            backgroundColor: 'hsl(0,0%,96.5%)',
            minHeight: 220,
            boxShadow: '10 5 5 red'
        },
        shadowProp: {
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
        header: {
            container: {
                justifyContent: 'center',
            },
            text: {
                fontWeight: 'bold',
                fontSize: 22,

            }
        }
        ,
        body: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 40,
            text: {
                highlighted: {
                    color: 'blue'
                }
            }
        },
        actions: {
            display: 'flex',
            width: '100%',
            alignItems: 'flex-end',
            justifyContent: 'center',
        }
    }
})