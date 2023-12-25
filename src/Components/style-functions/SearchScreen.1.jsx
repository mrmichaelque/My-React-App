import React from 'react';
import { View } from 'react-native';
import { Header, Icon } from 'react-native-elements';

function SearchScreen() {
    return (
        <Header>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Icon name="search" /> {/* Assuming you have an Icon component that takes a prop like `name` */}
            </View>
        </Header>
    );
}

export default SearchScreen;