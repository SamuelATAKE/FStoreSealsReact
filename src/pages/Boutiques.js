import React, { useEffect, useState } from 'react'
import CommonHeader from '../components/CommonHeader'
import ShopServices from '../components/ShopServices'
import ShopNewsLetter from '../components/ShopNewsLetter'
import Footer from '../components/Footer'
import axios from 'axios'
import { API_URL, LOGGED_USER, TOKEN } from '../variables/constants'
import { useNavigate } from 'react-router-dom'

const Boutiques = () => {
    const [boutiques, setBoutiques] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`${API_URL}/boutiques?marchand=${LOGGED_USER.id}`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        })
            .then(response => {
                console.log(response.data);
                setBoutiques(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
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
                                {boutiques.map((btq, index) => (
                                    <div class="col-lg-4 col-md-6 col-12" key={index}>
                                        <div class="shop-single-blog" onClick={() => navigate(`/boutique-details/${btq.id}`)}>
                                            <img src="https://via.placeholder.com/225x155" alt="#" />
                                            <div class="content">
                                                <p class="date">{btq.attributes.nom}</p>
                                                <a href={`/boutique-details/${btq.id}`} class="title">{btq.attributes.quartier}</a>
                                                <a href={`/boutique-details/${btq.id}`} class="more-btn">Explorer</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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