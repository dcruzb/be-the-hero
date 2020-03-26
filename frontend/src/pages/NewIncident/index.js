import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
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

                <form>
                    <input placeholder="Incidente Title"/>
                    <textarea placeholder="Description"/>
                    <input placeholder="Value in Dolars"/>

                    <button className="confirmation-button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}