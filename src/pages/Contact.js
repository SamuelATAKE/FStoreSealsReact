import React from 'react'
import CommonHeader from '../components/CommonHeader'
import Footer from '../components/Footer'
import ShopNewsLetter from '../components/ShopNewsLetter'

const Contact = () => {
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
                                    <li class="active"><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="contact-us" class="contact-us section">
                <div class="container">
                    <div class="contact-head">
                        <div class="row">
                            <div class="col-lg-8 col-12">
                                <div class="form-main">
                                    <div class="title">
                                        <h4>Gardons le contact</h4>
                                        <h3>Ecrivez-nous un message</h3>
                                    </div>
                                    <form class="form" method="post" action="mail/mail.php">
                                        <div class="row">
                                            <div class="col-lg-6 col-12">
                                                <div class="form-group">
                                                    <label>Votre nom complet<span>*</span></label>
                                                    <input name="name" type="text" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-12">
                                                <div class="form-group">
                                                    <label>Votre sujet<span>*</span></label>
                                                    <input name="subject" type="text" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-12">
                                                <div class="form-group">
                                                    <label>Votre adresse mail<span>*</span></label>
                                                    <input name="email" type="email" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-12">
                                                <div class="form-group">
                                                    <label>Votre numero de teéléphone<span>*</span></label>
                                                    <input name="company_name" type="tel" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group message">
                                                    <label>Votre message<span>*</span></label>
                                                    <textarea name="message" placeholder=""></textarea>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group button">
                                                    <button type="submit" class="btn ">Envoyer le message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12">
                                <div class="single-head">
                                    <div class="single-info">
                                        <i class="fa fa-phone"></i>
                                        <h4 class="title">Contactez-nus maintenant:</h4>
                                        <ul>
                                            <li>+228 93 45 67 89</li>
                                            <li>+228 96 72 45 21</li>
                                        </ul>
                                    </div>
                                    <div class="single-info">
                                        <i class="fa fa-envelope-open"></i>
                                        <h4 class="title">Email:</h4>
                                        <ul>
                                            <li><a href="mailto:info@yourwebsite.com">info@fstoreseals.com</a></li>
                                            <li><a href="mailto:info@yourwebsite.com">support@fstoreseals.com</a></li>
                                        </ul>
                                    </div>
                                    <div class="single-info">
                                        <i class="fa fa-location-arrow"></i>
                                        <h4 class="title">Notre adresse:</h4>
                                        <ul>
                                            <li>KA-62/1, Agence de marketing digital, 45 Grand Central Terminal, Lomé TOGO.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ShopNewsLetter />
            <Footer />

        </>
    )
}

export default Contact