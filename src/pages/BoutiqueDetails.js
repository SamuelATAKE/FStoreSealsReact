import React from 'react'
import Footer from '../components/Footer'
import ShopNewsLetter from '../components/ShopNewsLetter'
import CommonHeader from '../components/CommonHeader'

const BoutiqueDetails = () => {
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
                                    <li class="active"><a href="/details-shop">Boutique A</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="product-area shop-sidebar shop-list shop section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-12">
                            <div class="shop-sidebar">
                                <div class="single-widget category">
                                    <h3 class="title">Catégories</h3>
                                    <ul class="categor-list">
                                        <li><a href="/#">T-shirts</a></li>
                                        <li><a href="/#">jacket</a></li>
                                        <li><a href="/#">jeans</a></li>
                                        <li><a href="/#">sweatshirts</a></li>
                                        <li><a href="/#">trousers</a></li>
                                        <li><a href="/#">kitwears</a></li>
                                        <li><a href="/#">accessories</a></li>
                                    </ul>
                                </div>
                                <div class="single-widget range">
                                    <h3 class="title">Boutique par prix</h3>
                                    <div class="price-filter">
                                        <div class="price-filter-inner">
                                            <div id="slider-range"></div>
                                            <div class="price_slider_amount">
                                                <div class="label-input">
                                                    <span>Tranche:</span><input type="text" id="amount" name="price" placeholder="Ajouter votre prix" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="check-box-list">
                                        <li>
                                            <label class="checkbox-inline" for="1"><input name="news" id="1" type="checkbox" />2.000 - 5.000 FCFA<span class="count">(3)</span></label>
                                        </li>
                                        <li>
                                            <label class="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" />5.000 - 10.000 FCFA<span class="count">(5)</span></label>
                                        </li>
                                        <li>
                                            <label class="checkbox-inline" for="3"><input name="news" id="3" type="checkbox" />10.000 - 25.000 FCFA<span class="count">(8)</span></label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="single-widget recent-post">
                                    <h3 class="title">Posts récents</h3>
                                    <div class="single-post first">
                                        <div class="image">
                                            <img src="https://via.placeholder.com/225x155" alt="#" />
                                        </div>
                                        <div class="content">
                                            <h5><a href="/#">Vêtement dames</a></h5>
                                            <p class="price">9.950 FCFA</p>
                                            <ul class="reviews">
                                                <li class="yellow"><i class="ti-star"></i></li>
                                                <li class="yellow"><i class="ti-star"></i></li>
                                                <li class="yellow"><i class="ti-star"></i></li>
                                                <li><i class="ti-star"></i></li>
                                                <li><i class="ti-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="single-post first">
                                        <div class="image">
                                            <img src="https://via.placeholder.com/225x155" alt="#" />
                                        </div>
                                        <div class="content">
                                            <h5><a href="/#">Vêtements femmes</a></h5>
                                            <p class="price">9.950 FCFA</p>
                                            <ul class="reviews">
                                                <li class="yellow"><i class="ti-star"></i></li>
                                                <li class="yellow"><i class="ti-star"></i></li>
                                                <li class="yellow"><i class="ti-star"></i></li>
                                                <li class="yellow"><i class="ti-star"></i></li>
                                                <li><i class="ti-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="single-post first">
                                        <div class="image">
                                            <img src="images/single-shop-img3.png" alt="#" />
                                        </div>
                                        <div class="content">
                                            <h5><a href="/#">Shirts hommes</a></h5>
                                            <p class="price">9.950 FCFA</p>
                                            <ul class="reviews">
                                                <li class="yellow"><i class="ti-star"></i></li>
                                                <li class="yellow"><i class="ti-star"></i></li>
                                                <li class="yellow"><i class="ti-star"></i></li>
                                                <li class="yellow"><i class="ti-star"></i></li>
                                                <li class="yellow"><i class="ti-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-widget category">
                                    <h3 class="title">Manufacturers</h3>
                                    <ul class="categor-list">
                                        <li><a href="/#">Forever</a></li>
                                        <li><a href="/#">giordano</a></li>
                                        <li><a href="/#">abercrombie</a></li>
                                        <li><a href="/#">ecko united</a></li>
                                        <li><a href="/#">zara</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-8 col-12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="shop-top">
                                        <div class="shop-shorter">
                                            <div class="single-shorter">
                                                <label>Afficher :</label>
                                                <select>
                                                    <option selected="selected">09</option>
                                                    <option>15</option>
                                                    <option>25</option>
                                                    <option>30</option>
                                                </select>
                                            </div>
                                            <div class="single-shorter">
                                                <label>Filtrer par :</label>
                                                <select>
                                                    <option selected="selected">Nom</option>
                                                    <option>Prix</option>
                                                    <option>Taille</option>
                                                </select>
                                            </div>
                                        </div>
                                        <ul class="view-mode">
                                            <li><a href="shop-grid.html"><i class="fa fa-th-large"></i></a></li>
                                            <li class="active"><a href="shop-list.html"><i class="fa fa-th-list"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="single-product">
                                                <div class="product-img">
                                                    <a href="/article">
                                                        <img class="default-img" src="https://via.placeholder.com/225x155" alt="#" />
                                                        <img class="hover-img" src="https://via.placeholder.com/225x155" alt="#" />
                                                    </a>
                                                    <div class="button-head">
                                                        <div class="product-action">
                                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/#"><i class=" ti-eye"></i><span>Achat rapide</span></a>
                                                            <a title="Liste de souhaits" href="/#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                            <a title="Comparaison" href="/#"><i class="ti-bar-chart-alt"></i><span>Ajouter à la Comparaison</span></a>
                                                        </div>
                                                        <div class="product-action-2">
                                                            <a title="Ajouter au panier" href="/#">Ajouter au panier</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-md-6 col-12">
                                            <div class="list-content">
                                                <div class="product-content">
                                                    <div class="product-price">
                                                        <span>2.900 FCFA</span>
                                                    </div>
                                                    <h3 class="title"><a href="/article">Collection Tendance Femmes</a></h3>
                                                    <div class="review-inner">
                                                        <div class="ratings">
                                                            <ul class="rating">
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star-half-o"></i></li>
                                                                <li class="total">(4.5)</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="des">nteger enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.  Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis We are creative company here are many variation generators on the Internet tend to chunks as necessary interdum</p>
                                                <a href="/#" class="btn">Acheter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="single-product">
                                                <div class="product-img">
                                                    <a href="/article">
                                                        <img class="default-img" src="https://via.placeholder.com/225x155" alt="#" />
                                                        <img class="hover-img" src="https://via.placeholder.com/225x155" alt="#" />
                                                    </a>
                                                    <div class="button-head">
                                                        <div class="product-action">
                                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                            <a title="Liste de souhaits" href="/#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                            <a title="Comparaison" href="/#"><i class="ti-bar-chart-alt"></i><span>Ajouter à la Comparaison</span></a>
                                                        </div>
                                                        <div class="product-action-2">
                                                            <a title="Ajouter au panier" href="/#">Ajouter au panier</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-md-6 col-12">
                                            <div class="list-content">
                                                <div class="product-content">
                                                    <div class="product-price">
                                                        <span>2.900 FCFA</span>
                                                    </div>
                                                    <h3 class="title"><a href="/article">Collection Tendances Femmes</a></h3>
                                                    <div class="review-inner">
                                                        <div class="ratings">
                                                            <ul class="rating">
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star-half-o"></i></li>
                                                                <li class="total">(4.5)</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="des">nteger enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.  Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis We are creative company here are many variation generators on the Internet tend to chunks as necessary interdum</p>
                                                <a href="/#" class="btn">Acheter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="single-product">
                                                <div class="product-img">
                                                    <a href="/article">
                                                        <img class="default-img" src="https://via.placeholder.com/225x155" alt="#" />
                                                        <img class="hover-img" src="https://via.placeholder.com/225x155" alt="#" />
                                                        <span class="price-dec">30% Off</span>
                                                    </a>
                                                    <div class="button-head">
                                                        <div class="product-action">
                                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                            <a title="Liste de souhaits" href="/#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                            <a title="Comparaison" href="/#"><i class="ti-bar-chart-alt"></i><span>Ajouter à la Comparaison</span></a>
                                                        </div>
                                                        <div class="product-action-2">
                                                            <a title="Ajouter au panier" href="/#">Ajouter au panier</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-md-6 col-12">
                                            <div class="list-content">
                                                <div class="product-content">
                                                    <div class="product-price">
                                                        <span>2.900 FCFA</span>
                                                    </div>
                                                    <h3 class="title"><a href="/article">Collection tendance Femmes</a></h3>
                                                    <div class="review-inner">
                                                        <div class="ratings">
                                                            <ul class="rating">
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star-half-o"></i></li>
                                                                <li class="total">(4.5)</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="des">nteger enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.  Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis We are creative company here are many variation generators on the Internet tend to chunks as necessary interdum</p>
                                                <a href="/#" class="btn">Acheter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6 col-sm-6">
                                            <div class="single-product">
                                                <div class="product-img">
                                                    <a href="/article">
                                                        <img class="default-img" src="https://via.placeholder.com/225x155" alt="#" />
                                                        <img class="hover-img" src="https://via.placeholder.com/225x155" alt="#" />
                                                        <span class="out-of-stock">Tendance</span>
                                                    </a>
                                                    <div class="button-head">
                                                        <div class="product-action">
                                                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="/#"><i class=" ti-eye"></i><span>Quick Shop</span></a>
                                                            <a title="Liste de souhaits" href="/#"><i class=" ti-heart "></i><span>Ajouter à la liste de souhaits</span></a>
                                                            <a title="Comparaison" href="/#"><i class="ti-bar-chart-alt"></i><span>Ajouter à la Comparaison</span></a>
                                                        </div>
                                                        <div class="product-action-2">
                                                            <a title="Ajouter au panier" href="/panier">Ajouter au panier</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-md-6 col-12">
                                            <div class="list-content">
                                                <div class="product-content">
                                                    <div class="product-price">
                                                        <span>2.900 FCFA</span>
                                                    </div>
                                                    <h3 class="title"><a href="/article">Collection tendance Femmes</a></h3>
                                                    <div class="review-inner">
                                                        <div class="ratings">
                                                            <ul class="rating">
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star-half-o"></i></li>
                                                                <li class="total">(4.5)</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="des">nteger enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.  Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis We are creative company here are many variation generators on the Internet tend to chunks as necessary interdum</p>
                                                <a href="/#" class="btn">Acheter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="pagination">
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
            </section>
            <ShopNewsLetter />
            <Footer />
        </>
    )
}

export default BoutiqueDetails