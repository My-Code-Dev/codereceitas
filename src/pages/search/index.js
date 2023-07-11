import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Search() {
 return (
   <View style={styles.container}>
	    <Text>Pagina De Busca</Text>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      marginTop: 0,
      padding: 20,
    },
})