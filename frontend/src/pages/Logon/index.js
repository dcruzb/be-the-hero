import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

import api from '../../services/api'

export default function Logon() {
    const [id, setId] = useState('')

    const history = useHistory()

    async function handleLogon(event) {
        event.preventDefault()

        try {
            const response = await api.post('sessions', { id })
            
            if (!response.data.name) {
                alert(response.data.error )
                return
            }
            
            localStorage.setItem('ngoId', id)
            localStorage.setItem('ngoName', response.data.name)
            history.push('/profile')
        } catch (error) {
            alert('Something wrong occurred while attempting to log in!\nPlease try again later.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={handleLogon}>
                    <h1>Log in to Be The Hero</h1>

                    <input 
                        placeholder="Your ID"
                        value={id}
                        onChange={event => setId(event.target.value)}/>
                    <button type="submit" className="confirmation-button">Log in</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size="16" color="#E02041"/>
                        Don't have an account?
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}