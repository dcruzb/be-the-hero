import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'

import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const history = useHistory()

    async function handleRegister(event) {
        event.preventDefault()

        const ngo = {name, email, phone, whatsapp, city, state}

        try {
            const response = await api.post('ngos', ngo)

            alert(`Registration Successfull!\nPlease keep safe your Registration ID: ${response.data.id}`)

            history.push('/')
        } catch(err) {
            alert('Something wrong occurred while attempting to register!\nPlease try again later.')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1>Register</h1>
                    <p>Register and help people find your NGO's incidents!</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size="16" color="#E02041"/>
                        Don't have an account?
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="NGO name"
                        value={name}
                        onChange={event => setName(event.target.value)}/>
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}/>
                    <input 
                        placeholder="Phone"
                        value={phone}
                        onChange={event => setPhone(event.target.value)}/>
                    <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}/>
                    <div className="input-group">
                        <input 
                            placeholder="City"
                            value={city}
                            onChange={event => setCity(event.target.value)}/>
                        <input 
                            placeholder="State" style={{ width: 95 }}
                            value={state}
                            onChange={event => setState(event.target.value)}/>
                    </div>

                    <button className="confirmation-button" type="submit">Register</button>
                </form>
            </div>
        </div>
    ) 
}