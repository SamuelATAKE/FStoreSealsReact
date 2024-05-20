import React, { useEffect, useState } from 'react'
import CommonHeader from '../../components/CommonHeader'
import { Avatar, List, Modal, Select } from 'antd'
import axios from 'axios';
import { API_URL, LOGGED_USER, TOKEN } from '../../variables/constants';
import Footer from '../../components/Footer';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const MaBoutique = () => {
    const [articles, setArticles] = useState([]);
    const [initLoading, setInitLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [quantiteStock, setQuantiteStock] = useState(0);
    const [couleur, setCouleur] = useState('');
    const [prixUnitaire, setPrixUnitaire] = useState(0);
    const [remise, setRemise] = useState(0.0);
    const [categorie, setCategorie] = useState({});
    const [categories, setCategories] = useState([]);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [reload, setReload] = useState(false);
    const [nombreBoutique, setNombreBoutique] = useState(0);

    useEffect(() => {
        axios.get(`${API_URL}/boutiques?marchand=${LOGGED_USER.id}`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        })
            .then(response => {
                console.log(response.data);
                setNombreBoutique(response.data.data.length);
            })
            .catch(error => {
                console.log(error);
            });
    }
        , []);

    const params = useParams();

    useEffect(() => {
        // console.log(props);
        axios.get(`${API_URL}/categories`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        }).then(res => {
            console.log("Categories", res.data);
            let dt = [];
            res.data.data.forEach((cat) => {
                console.log("cat", cat.attributes.nom);
                dt.push({
                    value: JSON.stringify(cat),
                    label: cat.attributes.nom
                });
            })
            setCategories(dt);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        setConfirmLoading(true);
        axios.get(`${API_URL}/articles`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        }).then(res => {
            console.log("articles", res.data);
            setArticles(res.data.data);
            setConfirmLoading(false);
            setInitLoading(false);
        }).catch(err => {
            console.log(err);
        });
    }, [reload]);

    const handleCancel = () => {
        setOpen(false);
    }

    const handleOk = () => {
        setConfirmLoading(true);
        const article = {
            "data": {
                "nom": nom,
                "description": description,
                "couleur": couleur,
                "quantiteStock": quantiteStock,
                "prixUnitaire": prixUnitaire,
                "remise": remise,
                "categorie": JSON.parse(categorie),
                "boutique": params.id
            }
        }
        console.log("article, ", article);
        axios.post(`${API_URL}/articles`, JSON.stringify(article), {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        })
            .then(response => {
                console.log(response.data);
                setOpen(false);
                setReload(true);
                toast("Article ajouté avec succès");
                setConfirmLoading(false);
            })
            .catch(error => {
                console.log(error);
                toast("Erreur lors de l'ajout de l'article");
                setConfirmLoading(false);
            }
            );
    }

    return (
        <>
            <CommonHeader />
            <div class="container-xl px-4 mt-4">

                <nav class="nav nav-borders">
                    <a class="nav-link"
                        href="/profil">Profil</a>
                    {LOGGED_USER.profile === "MARCHAND" ? <a class="nav-link active ms-0" href="/mes-boutiques">Ma(mes) boutique(s)</a> : null}
                </nav>
                <hr class="mt-0 mb-4" />
                <div class="row">
                    <div class="col-lg-4 mb-4">

                        <div class="card h-100 border-start-lg border-start-primary">
                            <div class="card-body">
                                <div class="small text-muted">Revenu mensuel</div>
                                <div class="h3">0 FCFA</div>
                                <a class="text-arrow-icon small" href="#!">
                                    Passer au revenu annuel
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-arrow-right">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">

                        <div class="card h-100 border-start-lg border-start-secondary">
                            <div class="card-body">
                                <div class="small text-muted">Paiements</div>
                                <div class="h3"> -</div>
                                <a class="text-arrow-icon small text-secondary" href="#!">
                                    Voir l'historique des paiements
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-arrow-right">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="card h-100 border-start-lg border-start-success">
                            <div class="card-body">
                                <div class="small text-muted">Nombre de boutiques</div>
                                <div class="h3 d-flex align-items-center">0{nombreBoutique}</div>
                                <a class="text-arrow-icon small text-success" href="#!">
                                    boutique(s)
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-arrow-right">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card card-header-actions mb-4">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-9">
                                Mes articles
                            </div>
                            <div class="col-3">
                                <button class="btn btn-sm btn-primary" type="button" onClick={() => setOpen(true)}>Ajouter un article</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body px-0">
                        <List
                            className="demo-loadmore-list"
                            loading={initLoading}
                            itemLayout="horizontal"
                            dataSource={articles}
                            renderItem={(item) => (
                                <List.Item
                                    actions={[<a key="list-loadmore-edit">Editer</a>, <a key="list-loadmore-more">Plus</a>]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://via.placeholder.com/550x750" />}
                                        title={<a href="https://ant.design">{item.attributes?.nom}</a>}
                                        description={
                                            <>
                                                <div>{item.attributes.description}</div>
                                                <div>Couleur: {item.attributes.couleur}</div>
                                                {/* <div>Catégorie: {item.attributes.categorie}</div> */}
                                            </>
                                        }
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>
            <Footer />
            <Modal
                title="Ajouter un article"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <form class="form">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label>Nom de l'article<span>*</span></label>
                                <br />
                                <input type="text" className="form-control" name="nom" placeholder="" required="required" value={nom} onChange={(e) => setNom(e.target.value)} />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label>Description de l'article</label>
                                <br />
                                <textarea type="text" className="form-control" name="description" placeholder="" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="form-group">
                                <label>Quantité dans le stock<span>*</span></label>
                                <br />
                                <input type="number" className="form-control" name="quantiteStock" placeholder="" required="required" value={quantiteStock} onChange={(e) => setQuantiteStock(e.target.value)} />
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="form-group">
                                <label>Prix unitaire<span>*</span></label>
                                <br />
                                <input type="number" className="form-control" name="prixUnitaire" placeholder="" value={prixUnitaire} onChange={(e) => setPrixUnitaire(e.target.value)} />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label>Remise</label>
                                <br />
                                <input type="number" className="form-control" name="remise" placeholder="" value={remise} onChange={(e) => setRemise(e.target.value)} />
                            </div>
                        </div>
                        {/* <div class="col-12">
                            <div class="form-group">
                                <label>Image de l'article</label>
                                <br />
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                    beforeUpload={beforeUpload}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt="avatar"
                                            style={{
                                                width: '100%',
                                            }}
                                        />
                                    ) : (
                                        uploadButton
                                    )}
                                </Upload>
                            </div>
                        </div> */}
                        <div class="col-12">
                            <div class="form-group">
                                <label>Couleur</label>
                                <br />
                                <Select
                                    showSearch
                                    style={{
                                        width: "100%",
                                    }}
                                    placeholder="Selectionner la couleur de l'article"
                                    value={couleur}
                                    optionFilterProp="children"
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'NOIR',
                                            label: 'NOIR',
                                        },
                                        {
                                            value: 'BLANC',
                                            label: 'BLANC',
                                        },
                                        {
                                            value: 'BLEU',
                                            label: 'BLEU',
                                        },
                                        {
                                            value: 'VERT',
                                            label: 'VERT',
                                        },
                                        {
                                            value: 'JAUNE',
                                            label: 'JAUNE',
                                        },
                                        {
                                            value: 'ROUGE',
                                            label: 'ROUGE',
                                        },

                                        {
                                            value: 'MULTI-COULEUR',
                                            label: 'MULTI-COULEUR',
                                        },
                                    ]}
                                    onChange={(value) => setCouleur(value)}
                                />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label>Catégorie<span>*</span></label>
                                <br />
                                <Select
                                    showSearch
                                    style={{
                                        width: "100%",
                                    }}
                                    placeholder="La catégorie de l'article"
                                    value={categorie}
                                    optionFilterProp="children"
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={categories}
                                    onChange={(value) => setCategorie(value)}
                                />
                            </div>
                        </div>
                        {/* <div class="col-12">
                            <div class="form-group login-btn">
                                <button class="btn" onClick={() => handleOk()}>Ajouter</button>
                            </div>
                        </div> */}
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default MaBoutique