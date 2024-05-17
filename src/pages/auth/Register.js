import React from 'react'
import CommonHeader from '../../components/CommonHeader'
import Footer from '../../components/Footer'

const Register = () => {
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
                                <form class="form" method="post" action="#">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Votre nom<span>*</span></label>
                                                <input type="text" name="name" placeholder="" required="required" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Votre adresse mail<span>*</span></label>
                                                <input type="text" name="email" placeholder="" required="required" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Votre mot de passe<span>*</span></label>
                                                <input type="password" name="password" placeholder="" required="required" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Confirmez le mot de passe<span>*</span></label>
                                                <input type="password" name="password" placeholder="" required="required" />
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