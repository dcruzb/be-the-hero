import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form>
                    <h1>Log in to Be The Hero</h1>

                    <input placeholder="Your ID"/>
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