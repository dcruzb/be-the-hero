import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

import logoImg from '../../assets/logo.png'
import api from '../../services/api'

export default function Incidents() {
    const [incidents, setIncidents] = useState([])
    const [totalIncidents, setTotalIncidents] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    function navigateToDetails(incident) {
        navigation.navigate('Details', { incident })
    }

    async function loadIncidents() {
        if (loading) {
            return
        }

        if (totalIncidents > 0 && incidents.length == totalIncidents) {
            return
        }

        
        try {
            setLoading(true)

            const response = await api.get('incidents', {
                params: {page}
            })

            setIncidents([...incidents, ...response.data])
            setTotalIncidents(response.headers['x-total-count'])
            setPage(page + 1)
            setLoading(false)
        } catch (error) {
             alert('Something wrong occurred while attempting to obtain the incidents!\nPlease try again later.')   
        }

    }

    useEffect(() => {
        loadIncidents()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total of <Text style={styles.headerTextBold}>{totalIncidents} Incidents</Text>
                </Text>
            </View>

            <Text style={styles.title}>Welcome Hero!</Text>
            <Text style={styles.description}>Choose one of the Incidents bellow and save the day!!</Text>

            <FlatList 
                style={styles.incidentList}
                data={incidents} 
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={( { item: incident } ) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>NGO</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>Incident</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>Value</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetails(incident)}>
                            <Text style={styles.detailsButtonText}>More Details</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}