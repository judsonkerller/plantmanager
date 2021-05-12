import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {
    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas de {'\n'}
                    forma fácil
                </Text>

                <Image
                    source={wateringImg}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você {'\n'}
                    sempre que precisar.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.6}
                    onPress={handleStart}
                >
                    <Text>

                        <Feather
                            name='chevron-right'
                            style={styles.buttonIcon}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 75,
        fontFamily: fonts.heading,
        lineHeight: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 16,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 30,
        height: 60,
        width: 60
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32

    }
});