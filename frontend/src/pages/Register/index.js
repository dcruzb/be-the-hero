import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {
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

                <form>
                    <input placeholder="NGO name"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="Phone"/>
                    <input placeholder="WhatsApp"/>
                    <div className="input-group">
                        <input placeholder="City"/>
                        <input placeholder="State" style={{ width: 95 }}/>
                    </div>

                    <button className="confirmation-button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}