import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

import './styles.css'

export default function NewIncident() {
    const history = useHistory()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [value,setValue] = useState('')

    async function handleNewIncident(event) {
        event.preventDefault()
        const data = {
            title,
            description,
            value
        }
        try {
            await api.post('incidents', data, {
                headers: {
                    authorization: localStorage.getItem('ongId')
                }
            })
        
            alert(`Caso inserido`)
            history.push('/profile')

        } catch (err) {
            alert('Algo deu errado, tente novamente mais tarde')
        }
    }

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="button-link" to='/profile'>
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar para a home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                    placeholder="Título do caso" 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <textarea
                    placeholder="Descrição" 
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                <input 
                    placeholder="Valor em reais" 
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />

                <button className="button"type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}