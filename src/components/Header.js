/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = () => {
    return (
        <header class="header shop">
            <div class="topbar">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-12 col-12">

                            <div class="top-left">
                                <ul class="list-main">
                                    <li><i class="ti-headphone-alt"></i> +228 90 01 58 02</li>
                                    <li><i class="ti-email"></i> support@fstoreseals.com</li>
                                </ul>
                            </div>

                        </div>
                        <div class="col-lg-7 col-md-12 col-12">

                            <div class="right-content">
                                <ul class="list-main">
                                    {/* <li><i class="ti-location-pin"></i>Votre localisation</li>
                                    <li><i class="ti-alarm-clock"></i> <a href="/#">Daily deal</a></li> */}
                                    <li><i class="ti-user"></i> <a href="/#">Mon compte</a></li>
                                    <li><i class="ti-power-off"></i><a href="login.html#">Connexion</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="middle-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-2 col-12">

                            <div class="logo">
                                <a href="/"><img src="images/logo.png" style={{ width: "25%" }} alt="logo" /></a>
                            </div>

                            <div class="search-top">
                                <div class="top-search"><a href="#0"><i class="ti-search"></i></a></div>

                                <div class="search-top">
                                    <form class="search-form">
                                        <input type="text" placeholder="Recherche..." name="search" />
                                        <button value="search" type="submit"><i class="ti-search"></i></button>
                                    </form>
                                </div>

                            </div>

                            <div class="mobile-nav"></div>
                        </div>
                        <div class="col-lg-8 col-md-7 col-12">
                            <div class="search-bar-top">
                                <div class="search-bar">
                                    <select>
                                        <option selected="selected">Toutes les catégories</option>
                                        <option>Electroniques</option>
                                        <option>Vêtements</option>
                                        <option>Plastiques</option>
                                    </select>
                                    <form>
                                        <input name="search" placeholder="Rechercher les articles ici....." type="search" />
                                        <button class="btnn"><i class="ti-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-12">
                            <div class="right-bar">

                                <div class="sinlge-bar">
                                    <a href="/#" class="single-icon"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                                </div>
                                <div class="sinlge-bar">
                                    <a href="/#" class="single-icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
                                </div>
                                <div class="sinlge-bar shopping">
                                    <a href="/#" class="single-icon"><i class="ti-bag"></i> <span class="total-count">2</span></a>

                                    <div class="shopping-item">
                                        <div class="dropdown-cart-header">
                                            <span>2 articles</span>
                                            <a href="/#">Voir le panier</a>
                                        </div>
                                        <ul class="shopping-list">
                                            <li>
                                                <a href="/#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
                                                <a class="cart-img" href="/#"><img src="https://via.placeholder.com/70x70" alt="/#" /></a>
                                                <h4><a href="/#">Bagues de femmes</a></h4>
                                                <p class="quantity">1x - <span class="amount">900 FCFA</span></p>
                                            </li>
                                            <li>
                                                <a href="/#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
                                                <a class="cart-img" href="/#"><img src="https://via.placeholder.com/70x70" alt="/#" /></a>
                                                <h4><a href="/#">Collier pour femme</a></h4>
                                                <p class="quantity">1x - <span class="amount">3500 FCFA</span></p>
                                            </li>
                                        </ul>
                                        <div class="bottom">
                                            <div class="total">
                                                <span>Total</span>
                                                <span class="total-amount">4400 FCFA</span>
                                            </div>
                                            <a href="/paiement" class="btn animate">Vérification</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-inner">
                <div class="container">
                    <div class="cat-nav-head">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="all-category">
                                    <h3 class="cat-heading"><i class="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
                                    <ul class="main-category">
                                        <li><a href="/#">Nouvel arrivage <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                            <ul class="sub-category">
                                                <li><a href="/#">Accessoires</a></li>
                                                <li><a href="/#">Meilleures ventes</a></li>
                                                <li><a href="/#">Top 100 offres</a></li>
                                                <li><a href="/#">Lunettes</a></li>
                                                <li><a href="/#">Montres</a></li>
                                                <li><a href="/#">Hommes</a></li>
                                                <li><a href="/#">Femmes</a></li>
                                                <li><a href="/#">Habits occidentaux</a></li>
                                                <li><a href="/#">Jeans</a></li>
                                            </ul>
                                        </li>
                                        <li class="main-mega"><a href="/#">Meilleures ventes <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                            <ul class="mega-menu">
                                                <li class="single-menu">
                                                    <a href="/#" class="title-link">Boutique pour enfants</a>
                                                    <div class="image">
                                                        <img src="https://via.placeholder.com/225x155" alt="/#" />
                                                    </div>
                                                    <div class="inner-link">
                                                        <a href="/#">Poupées enfants</a>
                                                        <a href="/#">Voitures enfants</a>
                                                        <a href="/#">Coloriage enfants</a>
                                                        <a href="/#">Maisons enfants</a>
                                                    </div>
                                                </li>
                                                <li class="single-menu">
                                                    <a href="/#" class="title-link">Boutiques pour hommes</a>
                                                    <div class="image">
                                                        <img src="https://via.placeholder.com/225x155" alt="/#" />
                                                    </div>
                                                    <div class="inner-link">
                                                        <a href="/#">Montres</a>
                                                        <a href="/#">T-shirt</a>
                                                        <a href="/#">Sweats à capuche</a>
                                                        <a href="/#">Pantalons</a>
                                                    </div>
                                                </li>
                                                <li class="single-menu">
                                                    <a href="/#" class="title-link">Boutiques pour femmes</a>
                                                    <div class="image">
                                                        <img src="https://via.placeholder.com/225x155" alt="/#" />
                                                    </div>
                                                    <div class="inner-link">
                                                        <a href="/#">Chemise femme</a>
                                                        {/* <a href="/#">Ladies Frog</a> */}
                                                        <a href="/#">Lunettes de soleils dames</a>
                                                        <a href="/#">Montres dames</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="/#">Accessoires</a></li>
                                        <li><a href="/#">top 100 Offres</a></li>
                                        <li><a href="/#">Lunettes de soleils</a></li>
                                        <li><a href="/#">Montre</a></li>
                                        <li><a href="/#">Hommes</a></li>
                                        <li><a href="/#">Dames</a></li>
                                        <li><a href="/#">Vêtements occidentaux</a></li>
                                        <li><a href="/#">Jeans</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9 col-12">
                                <div class="menu-area">
                                    <nav class="navbar navbar-expand-lg">
                                        <div class="navbar-collapse">
                                            <div class="nav-inner">
                                                <ul class="nav main-menu menu navbar-nav">
                                                    <li class="active"><a href="/#">Accueil</a></li>
                                                    <li><a href="/#">Articles</a></li>
                                                    <li><a href="/#">Boutiques</a></li>
                                                    <li><a href="/#">Achat<i class="ti-angle-down"></i><span class="new">Nouveau</span></a>
                                                        <ul class="dropdown">
                                                            <li><a href="/panier">Panier</a></li>
                                                            <li><a href="/paiement">Paiement</a></li>
                                                        </ul>
                                                    </li>
                                                    {/* <li><a href="/#">Pages</a></li> */}
                                                    <li><a href="/#">Blog</a>
                                                    </li>
                                                    <li><a href="/contact">Contactez-nous</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
