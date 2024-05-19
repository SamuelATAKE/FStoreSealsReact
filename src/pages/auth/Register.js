import React, { useState } from 'react'
import CommonHeader from '../../components/CommonHeader'
import Footer from '../../components/Footer'
import { Select } from 'antd'
import { API_URL, TOKEN } from '../../variables/constants'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
    const [profil, setProfil] = useState('CLIENT');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [contact1, setContact1] = useState('');
    const [contact2, setContact2] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (confirmPassword !== password) {
            toast('Les mots de passe ne correspondent pas');
            return;
        } else {
            const utilisateur = {
                "nom": name,
                "email": email,
                "username": email,
                "password": password,
                "contact1": Number(contact1),
                "contact2": Number(contact2),
                "profil": profil
            }
            console.log(utilisateur);
            axios.post(`${API_URL}/auth/local/register`, JSON.stringify(utilisateur), {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${TOKEN}`
                }
            }).then((response) => {
                console.log(response.data);
                navigate('/connexion');
            }).catch((error) => {
                console.log(error);
            });
        }

    }

    return (
        <>
            <CommonHeader />
            <div class="breadcrumbs">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="bread-inner">
                                <ul class="bread-list">
                                    <li><a href="/">Accueil<i class="ti-arrow-right"></i></a></li>
                                    <li class="active"><a href="/inscription">Inscription</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="shop login section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3 col-12">
                            <div class="login-form">
                                <h2>Inscription</h2>
                                <p>Merci de vous inscrire pour pouvoir payer plus rapidement</p>
                                <form class="form" onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Votre nom<span>*</span></label>
                                                <input type="text" name="nom" placeholder="" required="required" value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Votre adresse mail<span>*</span></label>
                                                <input type="text" name="email" placeholder="" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Votre numéro de téléphone (1)<span>*</span></label>
                                                <input type="tel" name="contact1" placeholder="" required="required" value={contact1} onChange={(e) => setContact1(e.target.value)} />
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Votre second numéro de téléphone (2)</label>
                                                <input type="tel" name="contact2" placeholder="" value={contact2} onChange={(e) => setContact2(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Votre mot de passe<span>*</span></label>
                                                <input type="password" name="password" placeholder="" required="required" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Confirmez le mot de passe<span>*</span></label>
                                                <input type="password" name="confirmPassword" placeholder="" required="required" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>S'inscrire en tant que<span>*</span></label>
                                                <Select
                                                    showSearch
                                                    style={{
                                                        width: 200,
                                                    }}
                                                    placeholder="S'inscrire en tant que"
                                                    value={profil}
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                                    filterSort={(optionA, optionB) =>
                                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                                    }
                                                    options={[
                                                        {
                                                            value: 'CLIENT',
                                                            label: 'CLIENT',
                                                        },
                                                        {
                                                            value: 'MARCHAND',
                                                            label: 'MARCHAND',
                                                        },
                                                    ]}
                                                    onChange={(value) => setProfil(value)}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group login-btn">
                                                <button class="btn" type="submit">Inscription</button>
                                                <a href="/connexion" class="btn">Connexion</a>
                                            </div>
                                            <div class="checkbox">
                                                <label class="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" />S'inscrire aux Newsletters</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Register