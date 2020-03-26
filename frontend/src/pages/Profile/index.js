import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Profile() {
    const history = useHistory()

    const ngoName = localStorage.getItem('ngoName')
    const ngoId = localStorage.getItem('ngoId')

    const [incidents, setIncidents] = useState([])

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ngoId
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ngoId])

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ngoId
                }
            })

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (error) {
            alert('Something wrong occurred while attempting to register!\nPlease try again later.')
        }
    }

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Welcome {ngoName}</span>

                <Link className="confirmation-button" to="./incidents/new">Cadastrar</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size="18" color="#E02041" />
                </button>
            </header>

            <h1>Registred Incidents</h1>

            <ul>
                {
                    incidents.map(incident => {
                        return (
                            <li key={incident.id}>
                                <strong>Incident:</strong>
                                <p>{incident.title}</p>

                                <strong>Description:</strong>
                                <p>{incident.description}</p>

                                <strong>Value:</strong>
                                <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(incident.value)}</p>

                                <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                                    <FiTrash2 size="20" color="#a8a8b3">

                                    </FiTrash2>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}