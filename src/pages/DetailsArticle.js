import React from 'react'
import ShopNewsLetter from '../components/ShopNewsLetter'
import Footer from '../components/Footer'
import CommonHeader from '../components/CommonHeader'

const DetailsArticle = () => {
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
                                    <li class="active"><a href="/article">Article</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="shop single section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-lg-6 col-12">
                                    <div class="product-gallery">
                                        <div class="flexslider-thumbnails">
                                            <ul class="slides">
                                                <li data-thumb="https://via.placeholder.com/225x155" rel="adjustX:10, adjustY:">
                                                    <img src="https://via.placeholder.com/225x155" alt="/#" />
                                                </li>
                                                <li data-thumb="https://via.placeholder.com/225x155">
                                                    <img src="https://via.placeholder.com/225x155" alt="/#" />
                                                </li>
                                                <li data-thumb="https://via.placeholder.com/225x155">
                                                    <img src="https://via.placeholder.com/225x155" alt="/#" />
                                                </li>
                                                <li data-thumb="https://via.placeholder.com/225x155">
                                                    <img src="https://via.placeholder.com/225x155" alt="/#" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-12">
                                    <div class="product-des">
                                        <div class="short">
                                            <h4>Shirt homme</h4>
                                            <div class="rating-main">
                                                <ul class="rating">
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star-half-o"></i></li>
                                                    <li class="dark"><i class="fa fa-star-o"></i></li>
                                                </ul>
                                                <a href="/#" class="total-review">(102) appréciations</a>
                                            </div>
                                            <p class="price"><span class="discount">7.000 FCFA</span><s>8.000 FCFA</s> </p>
                                            <p class="description">eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in</p>
                                        </div>
                                        <div class="color">
                                            <h4>Options disponibles <span>Couleur</span></h4>
                                            <ul>
                                                <li><a href="/#" class="one"><i class="ti-check"></i></a></li>
                                                <li><a href="/#" class="two"><i class="ti-check"></i></a></li>
                                                <li><a href="/#" class="three"><i class="ti-check"></i></a></li>
                                                <li><a href="/#" class="four"><i class="ti-check"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="size">
                                            <h4>Taille</h4>
                                            <ul>
                                                <li><a href="/#" class="one">S</a></li>
                                                <li><a href="/#" class="two">M</a></li>
                                                <li><a href="/#" class="three">L</a></li>
                                                <li><a href="/#" class="four">XL</a></li>
                                                <li><a href="/#" class="four">XXL</a></li>
                                            </ul>
                                        </div>
                                        <div class="product-buy">
                                            <div class="quantity">
                                                <h6>Quantité :</h6>
                                                <div class="input-group">
                                                    <div class="button minus">
                                                        <button type="button" class="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                            <i class="ti-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" name="quant[1]" class="input-number" data-min="1" data-max="1000" value="1" />
                                                    <div class="button plus">
                                                        <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                                                            <i class="ti-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="add-to-cart">
                                                <a href="/#" class="btn">Ajouter au panier</a>
                                                <a href="/#" class="btn min"><i class="ti-heart"></i></a>
                                                <a href="/#" class="btn min"><i class="fa fa-compress"></i></a>
                                            </div>
                                            <p class="cat">Catégorie :<a href="/#">Vêtements</a></p>
                                            <p class="availability">Disponibilité : 180 produits En Stock</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="product-info">
                                        <div class="nav-main">
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a></li>
                                                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#reviews" role="tab">Appréciations</a></li>
                                            </ul>
                                        </div>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="description" role="tabpanel">
                                                <div class="tab-single">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="single-des">
                                                                <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto</p>
                                                            </div>
                                                            <div class="single-des">
                                                                <p>Suspendisse consequatur voluptates lorem nobis accumsan natus mattis. Optio pede, optio qui metus, delectus! Ultricies impedit, minus tempor fuga, quasi, pede felis commodo bibendum voluptas nisi? Voluptatem risus tempore tempora. Quaerat aspernatur? Error praesent laoreet, cras in fames hac ea, massa montes diamlorem nec quaerat, quos occaecati leo nam aliquet corporis, ab recusandae parturient, etiam fermentum, a quasi possimus commodi, mollis voluptate mauris mollis, quisque donec</p>
                                                            </div>
                                                            <div class="single-des">
                                                                <h4>Paramètres du produit:</h4>
                                                                <ul>
                                                                    <li>long established fact.</li>
                                                                    <li>has a more-or-less normal distribution. </li>
                                                                    <li>lmany variations of passages of. </li>
                                                                    <li>generators on the Interne.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="reviews" role="tabpanel">
                                                <div class="tab-single review-panel">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="ratting-main">
                                                                <div class="avg-ratting">
                                                                    <h4>4.5 <span>(Overall)</span></h4>
                                                                    <span>Basé sur un commentaire</span>
                                                                </div>
                                                                <div class="single-rating">
                                                                    <div class="rating-author">
                                                                        <img src="https://via.placeholder.com/225x155" alt="/#" />
                                                                    </div>
                                                                    <div class="rating-des">
                                                                        <h6>Naimur Rahman</h6>
                                                                        <div class="ratings">
                                                                            <ul class="rating">
                                                                                <li><i class="fa fa-star"></i></li>
                                                                                <li><i class="fa fa-star"></i></li>
                                                                                <li><i class="fa fa-star"></i></li>
                                                                                <li><i class="fa fa-star-half-o"></i></li>
                                                                                <li><i class="fa fa-star-o"></i></li>
                                                                            </ul>
                                                                            <div class="rate-count">(<span>3.5</span>)</div>
                                                                        </div>
                                                                        <p>Duis tincidunt mauris ac aliquet congue. Donec vestibulum consequat cursus. Aliquam pellentesque nulla dolor, in imperdiet.</p>
                                                                    </div>
                                                                </div>
                                                                <div class="single-rating">
                                                                    <div class="rating-author">
                                                                        <img src="https://via.placeholder.com/225x155" alt="/#" />
                                                                    </div>
                                                                    <div class="rating-des">
                                                                        <h6>Advin Geri</h6>
                                                                        <div class="ratings">
                                                                            <ul class="rating">
                                                                                <li><i class="fa fa-star"></i></li>
                                                                                <li><i class="fa fa-star"></i></li>
                                                                                <li><i class="fa fa-star"></i></li>
                                                                                <li><i class="fa fa-star"></i></li>
                                                                                <li><i class="fa fa-star"></i></li>
                                                                            </ul>
                                                                            <div class="rate-count">(<span>5.0</span>)</div>
                                                                        </div>
                                                                        <p>Duis tincidunt mauris ac aliquet congue. Donec vestibulum consequat cursus. Aliquam pellentesque nulla dolor, in imperdiet.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="comment-review">
                                                                <div class="add-review">
                                                                    <h5>Ajouter une appréciation</h5>
                                                                    <p>Votre adresse email ne sera pas publiée. Les champs requis sont indiqués</p>
                                                                </div>
                                                                <h4>Your Rating</h4>
                                                                <div class="review-inner">
                                                                    <div class="ratings">
                                                                        <ul class="rating">
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star"></i></li>
                                                                            <li><i class="fa fa-star"></i></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <form class="form" method="post" action="mail/mail.php">
                                                                <div class="row">
                                                                    <div class="col-lg-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Votre nom<span>*</span></label>
                                                                            <input type="text" name="name" required="required" placeholder="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-6 col-12">
                                                                        <div class="form-group">
                                                                            <label>Votre adresse mail<span>*</span></label>
                                                                            <input type="email" name="email" required="required" placeholder="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-12 col-12">
                                                                        <div class="form-group">
                                                                            <label>Ecrire une appréciation<span>*</span></label>
                                                                            <textarea name="message" rows="6" placeholder="" ></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-12 col-12">
                                                                        <div class="form-group button5">
                                                                            <button type="submit" class="btn">Enregistrer</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
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
            </section>
            <ShopNewsLetter />
            <Footer />
        </>
    )
}

export default DetailsArticle