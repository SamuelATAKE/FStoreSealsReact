import React from 'react'
import CommonHeader from '../components/CommonHeader'
import ShopServices from '../components/ShopServices'
import ShopNewsLetter from '../components/ShopNewsLetter'
import Footer from '../components/Footer'

const Boutiques = () => {
    return (
        <>
            <CommonHeader />
            <div class="breadcrumbs">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="bread-inner">
                                <ul class="bread-list">
                                    <li><a href="index1.html">Accueil<i class="ti-arrow-right"></i></a></li>
                                    <li class="active"><a href="/boutiques">Boutiques</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="blog-single shop-blog grid section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="shop-single-blog">
                                        <img src="https://via.placeholder.com/225x155" alt="#" />
                                        <div class="content">
                                            <p class="date">Agoè</p>
                                            <a href="/boutique-details" class="title">Keas Shop</a>
                                            <a href="/boutique-details" class="more-btn">Explorer</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="shop-single-blog">
                                        <img src="https://via.placeholder.com/225x155" alt="#" />
                                        <div class="content">
                                            <p class="date">Adidogomé</p>
                                            <a href="/boutique-details" class="title">La Class A</a>
                                            <a href="/boutique-details" class="more-btn">Explorer</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="shop-single-blog">
                                        <img src="https://via.placeholder.com/225x155" alt="#" />
                                        <div class="content">
                                            <p class="date">Adidogomé</p>
                                            <a href="/boutique-details" class="title">Electronique du millénium</a>
                                            <a href="/boutique-details" class="more-btn">Explorer</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="shop-single-blog">
                                        <img src="https://via.placeholder.com/225x155" alt="#" />
                                        <div class="content">
                                            <p class="date">Agoè</p>
                                            <a href="/boutique-details" class="title">Shoes Shop.</a>
                                            <a href="/boutique-details" class="more-btn">Explorer</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="shop-single-blog">
                                        <img src="https://via.placeholder.com/225x155" alt="#" />
                                        <div class="content">
                                            <p class="date">Adidogomé</p>
                                            <a href="/boutique-details" class="title">Fashion Shop</a>
                                            <a href="/boutique-details" class="more-btn">Explorer</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="shop-single-blog">
                                        <img src="https://via.placeholder.com/225x155" alt="#" />
                                        <div class="content">
                                            <p class="date">Adidogomé</p>
                                            <a href="/boutique-details" class="title">Blessing and Joyce Shop</a>
                                            <a href="/boutique-details" class="more-btn">Explorer</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="shop-single-blog">
                                        <img src="https://via.placeholder.com/225x155" alt="#" />
                                        <div class="content">
                                            <p class="date">Agoè</p>
                                            <a href="/boutique-details" class="title">Grossiste.</a>
                                            <a href="/boutique-details" class="more-btn">Explorer</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="shop-single-blog">
                                        <img src="https://via.placeholder.com/225x155" alt="#" />
                                        <div class="content">
                                            <p class="date">Adidogomé</p>
                                            <a href="/boutique-details" class="title">AndroidPhone Shop Lomé</a>
                                            <a href="/boutique-details" class="more-btn">Explorer</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-12">
                                    <div class="shop-single-blog">
                                        <img src="https://via.placeholder.com/225x155" alt="#" />
                                        <div class="content">
                                            <p class="date">Adidogomé</p>
                                            <a href="/boutique-details" class="title">La femme malienne</a>
                                            <a href="/boutique-details" class="more-btn">Explorer</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="pagination center">
                                        <ul class="pagination-list">
                                            <li><a href="/#"><i class="ti-arrow-left"></i></a></li>
                                            <li class="active"><a href="/#">1</a></li>
                                            <li><a href="/#">2</a></li>
                                            <li><a href="/#">3</a></li>
                                            <li><a href="/#"><i class="ti-arrow-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShopServices />
            <ShopNewsLetter />
            <Footer />

        </>
    )
}

export default Boutiques