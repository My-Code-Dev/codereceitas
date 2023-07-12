import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Logo } from '../../components/Logo/logo';

export function Home() {
 return (
   <View style={styles.container}>
	    <Logo />
      <Text style={styles.titulo}>Encontre a receita</Text>
      <Text style={styles.titulo}>que combina com você</Text>

      <View style={styles.formulario}>
        <TextInput 
          placeholder="Encontre sua receita favorita..."
          style={styles.textoInput}
        />

        <TouchableOpacity>
          <Ionicons name='search' size={28} color='#EC3236' />
        </TouchableOpacity>
        
      </View>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      paddingTop: 30,
      paddingStart: 15,
      paddingEnd: 15,
    },
    titulo: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#2E3D5A',
    },
    formulario: {
      backgroundColor: '#FFF',
      width: '100%',
      borderRadius: 8,
      marginTop: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#2E3D5A',
      paddingLeft: 8,
      paddingRight: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textoInput: {
      width: '90%',
      maxWidth: '90%',
      height: 40,
    },
})