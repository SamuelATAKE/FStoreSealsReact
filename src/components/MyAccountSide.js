/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const MyAccountSide = () => {
    return (
        <div id="myAccount" class="add_to_cart right">
            <a href="#" class="overlay" onclick="closeAccount()"></a>
            <div class="cart-inner">
                <div class="cart_top">
                    <h3>Mon compte</h3>
                    <div class="close-cart">
                        <a href="#" onclick="closeAccount()">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                {/* @if (Auth::user()) */}
                <section class="section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="left-menu m-0 p-0">
                                    <div class="block-content m-0 border-0 p-0">
                                        <ul>
                                            <li class="{{ request()->routeIs('profil.dashboard') ? 'active' : '' }}"><a
                                                href="{{ route('profil.dashboard') }}">Mon profil</a></li>
                                            {/* @if (Auth::user()->role == 'client') */}
                                            <li class="{{ request()->routeIs('profil.commandes') ? 'active' : '' }}"><a
                                                href="{{ route('profil.commandes') }}">Mes commandes</a></li>
                                            <li class="{{ request()->routeIs('profil.wishlist') ? 'active' : '' }}"><a
                                                href="{{ route('profil.wishlist') }}">Ma Wishlist</a></li>
                                            {/* @elseif (Auth::user()->role == 'marchand') */}
                                            <li
                                                class="{{ request()->routeIs('profil.boutique.commandes') ? 'active' : '' }}">
                                                <a href="{{ route('profil.boutique.commandes') }}">Commandes</a></li>
                                            <li
                                                class="{{ request()->routeIs('profil.boutique.articles') ? 'active' : '' }}">
                                                <a href="{{ route('profil.boutique.articles') }}">Mes articles</a></li>
                                            <li class="{{ request()->routeIs('profil.boutique') ? 'active' : '' }}"><a
                                                href="{{ route('profil.boutique') }}">Ma boutique</a></li>
                                            {/* @elseif (Auth::user()->role == 'admin') */}
                                            <li class="{{ request()->routeIs('admin.categories') ? 'active' : '' }}"><a
                                                href="{{ route('admin.categories') }}">Liste des catégories</a></li>
                                            <li class="{{ request()->routeIs('admin.boutiques') ? 'active' : '' }}"><a
                                                href="{{ route('admin.boutiques') }}">Liste des boutiques</a></li>
                                            {/* @endif */}
                                            <li class="last">
                                                <form id="logout" method="post" action="/logout">
                                                    {/* @csrf */}
                                                    <input type="hidden" name="hidden" />
                                                    <button role="button" type="submit"
                                                        class="p-0 m-0 border-0 bg-transparent" style={{ "outline": "none" }}>
                                                        <a href="#" role="button" style={{ "cursor": "pointer" }}>Se déconnecter</a>
                                                    </button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* @else */}
                <form method="POST" action="/login" class="theme-form">

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div class="form-group">
                        <label for="password" style={{ "text-transform": "none" }}>Mot de passe</label>
                        <input type="password" class="form-control" id="password" name="password"
                            placeholder="Entrer votre mot de passe" required />
                    </div>
                    <button type="submit" class="btn btn-solid btn-solid-sm btn-block ">Connexion</button>
                    <h5 class="forget-class"><a href="/auth/recuperation" class="d-block">Mot de passe oublié?</a></h5>
                    <h5 class="forget-class"><a href="/auth/inscription" class="d-block">Êtes-vous nouveau? Inscrivez-vous
                        dès maintenant</a></h5>
                </form>
                {/* @endif */}
            </div>
        </div>
    )
}

export default MyAccountSide