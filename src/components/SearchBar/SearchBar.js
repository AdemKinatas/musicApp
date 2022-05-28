import React from "react";
import { TextInput, View } from "react-native";
import styles from "./SearchBar.styles";

const SearchBar = ({ onChangeInputText }) => {
    return (
        <View style={styles.mainContainer}>
            <TextInput 
            style={styles.searchBox} 
            placeholder="Ara..." 
            onChangeText={onChangeInputText} 
            />
        </View>

    )
};
export default SearchBar;