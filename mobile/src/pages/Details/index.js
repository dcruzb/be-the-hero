import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Linking } from 'expo'
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles' 

import logoImg from '../../assets/logo.png'

export default function Details() {
    const navigation = useNavigation()
    const route = useRoute()
    const incident = route.params.incident

    const message = `Hello ${incident.name}, \nI\'m getting in touch because I would like to help in the Incident "${incident.title}" with the value of ${Intl.NumberFormat('pt-BR', {style: "currency", currency: "BRL"}).format(incident.value)}`

    function makeCall() {
        Linking.openURL(`tel:${incident.phone}`)
        // console.log('callNumber ----> ', phone);
        // let phoneNumber = phone;
        // if (Platform.OS !== 'android') {
        // phoneNumber = `telprompt:${phone}`;
        // }
        // else  {
        // phoneNumber = `tel:${phone}`;
        // }
        // Linking.canOpenURL(phoneNumber)
        // .then(supported => {
        // if (!supported) {
        //     Alert.alert('Phone number is not available');
        //   } else {
        //     return Linking.openURL(phoneNumber);
        // }
        // })
        // .catch(err => console.log(err));
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`)
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Hero of the Incident: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })
    }

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
                <Text style={styles.incidentValue}>{incident.name} from {incident.city}/{incident.state}</Text>

                <Text style={styles.incidentProperty}>Incident</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Description</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>Value</Text>
                <Text style={[styles.incidentValue, { marginBottom: 0}]}>{Intl.NumberFormat('pt-BR', {style: "currency", currency: "BRL"}).format(incident.value)}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Save the day!</Text>
                <Text style={styles.heroTitle}>Be the Hero of this incident!</Text>

                <Text style={styles.heroDescription}>Contact:</Text>
                
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={makeCall}>
                        <Text style={styles.actionText}>Phone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>    
            </View>
        </View>
    )
}