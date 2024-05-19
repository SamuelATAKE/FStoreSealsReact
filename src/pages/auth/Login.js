import React, { useState } from 'react'
import CommonHeader from '../../components/CommonHeader'
import Footer from '../../components/Footer'
import axios from 'axios';
import { API_URL } from '../../variables/constants';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [identifiant, setIdentifiant] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${API_URL}/auth/local`, {
            identifier: identifiant,
            password: password
        })
            .then(response => {
                sessionStorage.setItem('token', response.data.jwt);
                sessionStorage.setItem('user', JSON.stringify(response.data.user));
                toast("Connexion réussie avec succès", { type: "success" });
                navigate('/');
                window.location.reload();
            })
            .catch(error => {
                toast("Vérifier vos identifiants ou votre connexion internet");
                console.log('An error occurred:', error.response);
            });
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
                                    <li class="active"><a href="/connexion">Connexion</a></li>
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
                                <h2>Connexion</h2>
                                <p>Merci de vous inscrire pour pouvoir payer plus rapidement</p>
                                <form class="form" onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Votre adresse mail<span>*</span></label>
                                                <input type="email" name="email" placeholder="" required="required" onChange={(e) => setIdentifiant(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Votre mot de passe<span>*</span></label>
                                                <input type="password" name="password" placeholder="" required="required" onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group login-btn">
                                                <button class="btn" type="submit">Connexion</button>
                                                <a href="/inscription" class="btn">S'inscrire</a>
                                            </div>
                                            <div class="checkbox">
                                                <label class="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" />Se souvenir de moi</label>
                                            </div>
                                            <a href="/#" class="lost-pass">Mot de passe oublié?</a>
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

export default Login