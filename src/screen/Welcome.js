import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Welcome = (props) => {
    const { navigation } = props;

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("")
        }, 2000);

        return () => { }
    }, [])


    return (
        <View>
            <Text>Welcome</Text>
        </View>
    )
}

export default Welcome