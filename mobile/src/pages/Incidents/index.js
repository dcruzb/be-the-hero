import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

import logoImg from '../../assets/logo.png'

export default function Incidents() {
    const navigation = useNavigation()

    function navigateToDetails() {
        navigation.navigate('Details')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total of <Text style={styles.headerTextBold}>0 Incidents</Text>
                </Text>
            </View>

            <Text style={styles.title}>Welcome Hero!</Text>
            <Text style={styles.description}>Choose one of the Incidents bellow and save the day!!</Text>

            <FlatList 
                style={styles.incidentList}
                data={[{ id: 1}, { id: 2}, { id: 3}, { id: 4}]} 
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>NGO</Text>
                        <Text style={styles.incidentValue}>APAD</Text>

                        <Text style={styles.incidentProperty}>NGO</Text>
                        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                        <Text style={styles.incidentProperty}>NGO</Text>
                        <Text style={styles.incidentValue}>R$ 256,89</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetails}>
                            <Text style={styles.detailsButtonText}>More Details</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}