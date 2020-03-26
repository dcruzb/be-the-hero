import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const history = useHistory()

    async function handleNewIncident(event) {
        event.preventDefault()

        try {
            const response = await api.post('incidents', {title, description, value }, { 
                    headers: {
                        Authorization: localStorage.getItem('ngoId')
                    }
                } 
            )

            alert('Incident registred!')
            history.push('/profile')
        } catch (error) {
            alert('Something wrong occurred while attempting to register!\nPlease try again later.')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Register new incident</h1>
                    <p>Describe in details the incident to find a Hero to solve it!</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size="16" color="#E02041"/>
                        Return home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Incidente Title"
                        value={title}
                        onChange={event => setTitle(event.target.value)}/>
                    <textarea 
                        placeholder="Description"
                        value={description}
                        onChange={event => setDescription(event.target.value)}/>
                    <input 
                        placeholder="Value in Dolars"
                        value={value}
                        onChange={event => setValue(event.target.value)}/>

                    <button className="confirmation-button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}