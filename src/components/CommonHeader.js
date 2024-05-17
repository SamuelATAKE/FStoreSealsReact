import React from 'react'

const CommonHeader = () => {
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
                                            <a href="/paiement" class="btn animate">Paiement</a>
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
                            <div class="col-12">
                                <div class="menu-area">
                                    <nav class="navbar navbar-expand-lg">
                                        <div class="navbar-collapse">
                                            <div class="nav-inner">
                                                <ul class="nav main-menu menu navbar-nav">
                                                    <li class="active"><a href="/#">Accueil</a></li>
                                                    <li><a href="/#">Articles</a></li>
                                                    <li><a href="/boutiques">Boutiques</a></li>
                                                    <li><a href="/#">Achat<i class="ti-angle-down"></i><span class="new">Nouveau</span></a>
                                                        <ul class="dropdown">
                                                            <li><a href="/panier">Panier</a></li>
                                                            <li><a href="/paiement">Passer au paiement</a></li>
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
    )
}

export default CommonHeader