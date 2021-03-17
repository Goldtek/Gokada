import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

const Logs = (props) => {

    const renderHeader = () => (
        <Appbar.Header>
            <Appbar.BackAction onPress={()=> props.navigation.goBack()} />
            <Appbar.Content title="Logs" />
            <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
    )

    return (
        <View >
            {renderHeader()}
        </View>
    )
}

export default Logs;