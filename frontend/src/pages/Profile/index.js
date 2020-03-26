import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, APAD</span>

                <Link className="confirmation-button" to="./incidents/new">Cadastrar</Link>
                <button type="button">
                    <FiPower size="18" color="#E02041" />
                </button>
            </header>

            <h1>Registred Incidents</h1>

            <ul>
                <li>
                    <strong>Incident:</strong>
                    <p>Sample Incident</p>

                    <strong>Description:</strong>
                    <p>Sample description of the Incident</p>

                    <strong>Value:</strong>
                    <p>$ 258.00</p>

                    <button type="button">
                        <FiTrash2 size="20" color="#a8a8b3">

                        </FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Incident:</strong>
                    <p>Sample Incident</p>

                    <strong>Description:</strong>
                    <p>Sample description of the Incident</p>

                    <strong>Value:</strong>
                    <p>$ 258.00</p>

                    <button type="button">
                        <FiTrash2 size="20" color="#a8a8b3">

                        </FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Incident:</strong>
                    <p>Sample Incident</p>

                    <strong>Description:</strong>
                    <p>Sample description of the Incident</p>

                    <strong>Value:</strong>
                    <p>$ 258.00</p>

                    <button type="button">
                        <FiTrash2 size="20" color="#a8a8b3">

                        </FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Incident:</strong>
                    <p>Sample Incident</p>

                    <strong>Description:</strong>
                    <p>Sample description of the Incident</p>

                    <strong>Value:</strong>
                    <p>$ 258.00</p>

                    <button type="button">
                        <FiTrash2 size="20" color="#a8a8b3">

                        </FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Incident:</strong>
                    <p>Sample Incident</p>

                    <strong>Description:</strong>
                    <p>Sample description of the Incident</p>

                    <strong>Value:</strong>
                    <p>$ 258.00</p>

                    <button type="button">
                        <FiTrash2 size="20" color="#a8a8b3">

                        </FiTrash2>
                    </button>
                </li>
            </ul>
        </div>
    )
}