import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const Arreglo = () => {
    const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const [numero, setnumeros] = useState<number[]>([]);
    const pares = () => {
        const par = numeros.filter(number => number % 2 === 0);
        setnumeros(par);
    }
    const impares = () => {
        const impar = numeros.filter(number => number % 2 !== 0);
        setnumeros(impar);
    }
    return (
        <View style={styles.container}>
            <View>
                <Text>
                    SEPARADOR DE PARES E IMPARES
                </Text>
            </View>
            <Text>
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
                </Text>
            <View style={styles.button}>
            <Button title="Mostrar Pares" onPress={pares} />
            <Button title="Mostrar Impares" onPress={impares} />
            </View>
            <View>
            <Text>Números:</Text>
            <Text>{numero.join(', ')}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
})

export default Arreglo
