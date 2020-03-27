import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import styles from './styles' 

import logoImg from '../../assets/logo.png'

export default function Details() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigation.goBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>NGO</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>NGO</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>NGO</Text>
                <Text style={[styles.incidentValue, { marginBottom: 0}]}>R$ 256,89</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Save the day!</Text>
                <Text style={styles.heroTitle}>Be the Hero of this incident!</Text>
                <Text style={styles.heroDescription}>Contact</Text>
                
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPres={() => {}}>
                        <Text style={styles.actionText}>Phone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPres={() => {}}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPres={() => {}}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>    
            </View>
        </View>
    )
}