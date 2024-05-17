/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
// import LoaderWrapper from '../components/LoaderWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShopServices from '../components/ShopServices'
import ShopNewsLetter from '../components/ShopNewsLetter'

const Home = () => {
    return (
        <>
            {/* <LoaderWrapper /> */}
            <Header />
            {/* main  */}
            <section class="hero-slider">
                <div class="single-slider">
                    <div class="container">
                        <div class="row no-gutters">
                            <div class="col-lg-9 offset-lg-3 col-12">
                                <div class="text-inner">
                                    <div class="row">
                                        <div class="col-lg-7 col-12">
                                            <div class="hero-text">
                                                <h1>
                                                    {/* <span>UP TO 50% OFF </span> */}
                                                    FStoreSeals
                                                </h1>
                                                <p>Votre marketplace digital <br /> depuis le confort de votre maison. <br /></p>
                                                <div class="button">
                                                    <a href="#" class="btn">Acheter!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="small-banner section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-banner">
                                <img src="https://via.placeholder.com/600x370" alt="#" />
                                <div class="content">
                                    <p>Collections hommes</p>
                                    <h3>Summer travel <br /> collection</h3>
                                    <a href="#">Explorer</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="single-banner">
                                <img src="https://via.placeholder.com/600x370" alt="#" />
                                <div class="content">
                                    <p>Collection de sacs</p>
                                    <h3>Awesome Bag <br /> 2024</h3>
                                    <a href="#">Acheter</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-12">
                            <div class="single-banner tab-height">
                                <img src="https://via.placeholder.com/600x370" alt="#" />
                                <div class="content">
                                    <p>Vente rapide</p>
                                    <h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
                                    <a href="#">Explorer</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="product-area section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title">
                                <h2>Articles de tendance</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="product-info">
                                <div class="nav-main">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#man" role="tab">Homme</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#women" role="tab">Femme</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#kids" role="tab">Enfants</a></li>
                                        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessoires</a></li>
                                    </ul>
                                </div>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="man" role="tabpanel">
                                        <div class="tab-single">
                                            <div class="row">
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Collection Tendance Femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe spectacle rose</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe collection de sacs</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="Nouveau">Nouveau</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Women Pant Collectons</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe collection de sacs</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="price-dec">30% Off</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe chapeaux pour femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Vêtements Polo pour Femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="out-of-stock">Tendance</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Lunettes de soleil noires pour femmes</a></h3>
                                                            <div class="product-price">
                                                                <span class="old">6.000 FCFA</span>
                                                                <span>5.000 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="women" role="tabpanel">
                                        <div class="tab-single">
                                            <div class="row">
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Collection Tendance Femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe spectacle rose</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe collection de sacs</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="Nouveau">Nouveau</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Women Pant Collectons</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe collection de sacs</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="price-dec">30% Off</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe chapeaux pour femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Vêtements Polo pour Femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="out-of-stock">Tendance</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Lunettes de soleil noires pour femmes</a></h3>
                                                            <div class="product-price">
                                                                <span class="old">6.000 FCFA</span>
                                                                <span>5.000 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="kids" role="tabpanel">
                                        <div class="tab-single">
                                            <div class="row">
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Collection Tendance Femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe spectacle rose</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe collection de sacs</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="Nouveau">Nouveau</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Women Pant Collectons</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe collection de sacs</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="price-dec">30% Off</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe chapeaux pour femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Vêtements Polo pour Femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="out-of-stock">Tendance</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Lunettes de soleil noires pour femmes</a></h3>
                                                            <div class="product-price">
                                                                <span class="old">6.000 FCFA</span>
                                                                <span>5.000 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="accessories" role="tabpanel">
                                        <div class="tab-single">
                                            <div class="row">
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Collection Tendance Femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe spectacle rose</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe collection de sacs</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="Nouveau">Nouveau</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Women Pant Collectons</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe collection de sacs</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="price-dec">30% Off</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe chapeaux pour femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Vêtements Polo pour Femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="out-of-stock">Tendance</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Lunettes de soleil noires pour femmes</a></h3>
                                                            <div class="product-price">
                                                                <span class="old">6.000 FCFA</span>
                                                                <span>5.000 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="essential" role="tabpanel">
                                        <div class="tab-single">
                                            <div class="row">
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Collection Tendance Femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe spectacle rose</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe collection de sacs</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="Nouveau">Nouveau</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Women Pant Collectons</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe collection de sacs</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="price-dec">30% Off</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe chapeaux pour femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Vêtements Polo pour Femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="out-of-stock">Tendance</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Lunettes de soleil noires pour femmes</a></h3>
                                                            <div class="product-price">
                                                                <span class="old">6.000 FCFA</span>
                                                                <span>5.000 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="prices" role="tabpanel">
                                        <div class="tab-single">
                                            <div class="row">
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Collection Tendance Femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe spectacle rose</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe collection de sacs</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="Nouveau">Nouveau</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Women Pant Collectons</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe collection de sacs</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="price-dec">30% Off</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Superbe chapeaux pour femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Vêtements Polo pour Femmes</a></h3>
                                                            <div class="product-price">
                                                                <span>2.900 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div class="single-product">
                                                        <div class="product-img">
                                                            <a href="/article">
                                                                <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <span class="out-of-stock">Tendance</span>
                                                            </a>
                                                            <div class="button-head">
                                                                <div class="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                                    <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                                                </div>
                                                                <div class="product-action-2">
                                                                    <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <h3><a href="/article">Lunettes de soleil noires pour femmes</a></h3>
                                                            <div class="product-price">
                                                                <span class="old">6.000 FCFA</span>
                                                                <span>5.000 FCFA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="midium-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="single-banner">
                                <img src="https://via.placeholder.com/600x370" alt="#" />
                                <div class="content">
                                    <p>Collection Hommes</p>
                                    <h3>Man's items <br />Up to<span> 50%</span></h3>
                                    <a href="#">Acheter</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="single-banner">
                                <img src="https://via.placeholder.com/600x370" alt="#" />
                                <div class="content">
                                    <p>Chaussures dames</p>
                                    <h3>mid season <br /> up to <span>70%</span></h3>
                                    <a href="#" class="btn">Acheter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="product-area most-popular section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title">
                                <h2>Articles Tendance</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="owl-carousel popular-slider">
                                <div class="single-product">
                                    <div class="product-img">
                                        <a href="/article">
                                            <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                            <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                            <span class="out-of-stock">Tendance</span>
                                        </a>
                                        <div class="button-head">
                                            <div class="product-action">
                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                            </div>
                                            <div class="product-action-2">
                                                <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3><a href="/article">Lunettes de soleil noires pour femmes</a></h3>
                                        <div class="product-price">
                                            <span class="old">6.000 FCFA</span>
                                            <span>5.000 FCFA</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-product">
                                    <div class="product-img">
                                        <a href="/article">
                                            <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                            <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                        </a>
                                        <div class="button-head">
                                            <div class="product-action">
                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                            </div>
                                            <div class="product-action-2">
                                                <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3><a href="/article">Collection Tendance Femmes</a></h3>
                                        <div class="product-price">
                                            <span>5.000 FCFA</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-product">
                                    <div class="product-img">
                                        <a href="/article">
                                            <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                            <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                            <span class="Nouveau">Nouveau</span>
                                        </a>
                                        <div class="button-head">
                                            <div class="product-action">
                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                            </div>
                                            <div class="product-action-2">
                                                <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3><a href="/article">Superbe spectacle rose</a></h3>
                                        <div class="product-price">
                                            <span>5.000 FCFA</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-product">
                                    <div class="product-img">
                                        <a href="/article">
                                            <img class="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                            <img class="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                        </a>
                                        <div class="button-head">
                                            <div class="product-action">
                                                <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                <a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                <a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Ajouter pour comparer</span></a>
                                            </div>
                                            <div class="product-action-2">
                                                <a title="Ajouter au panier" href="#">Ajouter au panier</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <h3><a href="/article">Superbe collection de sacs</a></h3>
                                        <div class="product-price">
                                            <span>5.000 FCFA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="section free-version-banner">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-8 offset-md-2 col-xs-12">
                            <div class="section-title">
                                <div class="button">
                                    <a href="/" target="_blank" rel="nofollow" class="btn wow fadeInUp" data-wow-delay=".8s">Acheter maintenant</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="shop-home-list section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="shop-section-title">
                                        <h1>A vendre</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="single-list">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#" />
                                            <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 no-padding">
                                        <div class="content">
                                            <h4 class="title"><a href="#">Parfum</a></h4>
                                            <p class="price with-discount">5.900</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-list">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#" />
                                            <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 no-padding">
                                        <div class="content">
                                            <h5 class="title"><a href="#">Pommades</a></h5>
                                            <p class="price with-discount">4.400 FCFA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-list">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#" />
                                            <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 no-padding">
                                        <div class="content">
                                            <h5 class="title"><a href="#">Marmites</a></h5>
                                            <p class="price with-discount">8.900 FCFA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="shop-section-title">
                                        <h1>Meilleures ventes</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="single-list">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#" />
                                            <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 no-padding">
                                        <div class="content">
                                            <h5 class="title"><a href="#">PowerBank</a></h5>
                                            <p class="price with-discount">6.500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-list">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#" />
                                            <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 no-padding">
                                        <div class="content">
                                            <h5 class="title"><a href="#">Montre connectée</a></h5>
                                            <p class="price with-discount">3.300</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-list">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#" />
                                            <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 no-padding">
                                        <div class="content">
                                            <h5 class="title"><a href="#">Bijoux</a></h5>
                                            <p class="price with-discount">7.700 FCFA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="shop-section-title">
                                        <h1>Top vus</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="single-list">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#" />
                                            <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 no-padding">
                                        <div class="content">
                                            <h5 class="title"><a href="#">Table</a></h5>
                                            <p class="price with-discount">22.000 FCFA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-list">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#" />
                                            <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 no-padding">
                                        <div class="content">
                                            <h5 class="title"><a href="#">Sandales</a></h5>
                                            <p class="price with-discount">700 FCFA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-list">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="list-image overlay">
                                            <img src="https://via.placeholder.com/115x140" alt="#" />
                                            <a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 no-padding">
                                        <div class="content">
                                            <h5 class="title"><a href="#">Sneakers XXL</a></h5>
                                            <p class="price with-discount">9.000 FCFA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="shop-blog section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title">
                                <h2>De notre blog</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="shop-single-blog">
                                <img src="https://via.placeholder.com/370x300" alt="#" />
                                <div class="content">
                                    <p class="date">Lundi 22 Juillet 2024</p>
                                    <a href="#" class="title">Sed adipiscing ornare.</a>
                                    <a href="#" class="more-btn">Lire plus</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="shop-single-blog">
                                <img src="https://via.placeholder.com/370x300" alt="#" />
                                <div class="content">
                                    <p class="date">Lundi 22 Juillet 2024</p>
                                    <a href="#" class="title">Man’s Fashion Winter Sale</a>
                                    <a href="#" class="more-btn">Lire plus</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="shop-single-blog">
                                <img src="https://via.placeholder.com/370x300" alt="#" />
                                <div class="content">
                                    <p class="date">Lundi 22 Juillet 2024</p>
                                    <a href="#" class="title">Women Fashion Festive</a>
                                    <a href="#" class="more-btn">Lire plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ShopServices />

            <ShopNewsLetter />

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ti-close" aria-hidden="true"></span></button>
                        </div>
                        <div class="modal-body">
                            <div class="row no-gutters">
                                <div class="col-lg-6 offset-lg-3 col-12">
                                    <h4 style={{ marginTop: "100px", fontSize: "14px", fontWeight: "500", color: "#F7941D", display: "block", marginBottom: "5px" }}>Eshop Free Lite</h4>
                                    <h3 style={{ fontSize: "30px", color: "#333" }}>Currently You are using free lite Version of Eshop.</h3>
                                    <p style={{ display: "block", marginTop: "20px", color: "#888", fontSize: "14px", fontWeight: "400" }}>Please, purchase full version of the template to get all pages, features and commercial license</p>
                                    <div class="button" style={{ marginTop: "30px" }}>
                                        <a href="/" target="_blank" class="btn" style={{ color: "#fff" }}>Achetez-maintenant</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* main */}
            <Footer />

        </>
    )
}

export default Home