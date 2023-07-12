import { View, Text, StyleSheet } from 'react-native';

export function Logo(){
    return(
        <View style={styles.logoArea}>
            <Text style={styles.textoLogo}>Code Builder</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: '#EC3236',
        alignSelf: 'flex-start',
        padding: 4,
        paddingLeft: 16,
        paddingRight: 16,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 35,
        marginBottom: 10,
    },
    textoLogo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginEnd: 20,
    },
})