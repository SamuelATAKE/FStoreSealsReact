import React, { useEffect, useState } from 'react'
import CommonHeader from '../../components/CommonHeader'
import Footer from '../../components/Footer'
import { Modal } from 'antd'
import axios from 'axios'
import { API_URL, LOGGED_USER, TOKEN } from '../../variables/constants'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

// const getBase64 = (img, callback) => {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
// };
// const beforeUpload = (file) => {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//         message.error('Vous pouvez seulement téléverser des fichiers JPG/PNG!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//         message.error('L\'image doit être plus petite que 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
// };

const MesBoutiques = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact1, setContact1] = useState('');
    const [contact2, setContact2] = useState('');
    const [localisation, setLocalisation] = useState('');
    const [quartier, setQuartier] = useState('');
    const [boutiques, setBoutiques] = useState([]);
    const [reload, setReload] = useState(false);

    const navigate = useNavigate();

    // const [loading, setLoading] = useState(false);
    // const [imageUrl, setImageUrl] = useState();

    // const handleChange = (info) => {
    //     if (info.file.status === 'uploading') {
    //         setLoading(true);
    //         return;
    //     }
    //     if (info.file.status === 'done') {
    //         // Get this url from response in real world.
    //         getBase64(info.file.originFileObj, (url) => {
    //             setLoading(false);
    //             setImageUrl(url);
    //         });
    //     }
    // };

    const handleOk = () => {
        const boutique = {
            "data": {
                "nom": name,
                "email": email,
                "contact1": contact1,
                "contact2": contact2,
                "localisation": localisation,
                "quartier": quartier,
                "marchand": LOGGED_USER
            }
        }

        axios.post(`${API_URL}/boutiques`, JSON.stringify(boutique), {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`
            }
        })
            .then(response => {
                console.log(response.data);
                setOpen(false);
                setReload(true);
                toast("Boutique ajoutée avec succès");

            })
            .catch(error => {
                console.log(error);
                toast("Erreur lors de l'ajout de la boutique");
            }
            );
    }

    const handleCancel = () => {
        setOpen(false);
    }

    const handleSubmit = (e) => {
        setConfirmLoading(true);
        e.preventDefault();
    }

    // const uploadButton = (
    //     <button
    //         style={{
    //             border: 0,
    //             background: 'none',
    //         }}
    //         type="button"
    //     >
    //         {loading ? <LoadingOutlined /> : <PlusOutlined />}
    //         <div
    //             style={{
    //                 marginTop: 8,
    //             }}
    //         >
    //             Téléversez
    //         </div>
    //     </button>
    // );

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
    }
        , [reload]);

    return (
        <>
            <CommonHeader />
            <div class="container-xl px-4 mt-4">

                <nav class="nav nav-borders">
                    <a class="nav-link"
                        href="/profil">Profil</a>
                    <a class="nav-link active ms-0" href="/mes-boutiques">Ma(mes) boutique(s)</a>
                </nav>
                <hr class="mt-0 mb-4" />
                <div class="row">
                    <div class="col-lg-4 mb-4">

                        <div class="card h-100 border-start-lg border-start-primary">
                            <div class="card-body">
                                <div class="small text-muted">Revenu mensuel</div>
                                <div class="h3">200.000 FCFA</div>
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
                                <div class="h3"> 15 Mai 2024</div>
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
                                <div class="h3 d-flex align-items-center">02</div>
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
                                Mes boutiques
                            </div>
                            <div class="col-3">
                                <button class="btn btn-sm btn-primary" type="button" onClick={() => setOpen(true)}>Ajouter une boutique</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body px-0">
                        {
                            boutiques?.map((btq) => (
                                <>
                                    <div class="d-flex align-items-center justify-content-between px-4">
                                        <div class="d-flex align-items-center" onClick={() => navigate(`/ma-boutique/${btq.id}`)}>
                                            <div class="ms-4">
                                                <div class="small">{btq.attributes.nom}</div>
                                                <div class="text-xs text-muted">{btq.attributes.quartier}</div>
                                            </div>
                                        </div>
                                        <div class="ms-4 small">
                                            {/* <div class="badge bg-light text-dark me-3">Default</div> */}
                                            <a href="#!">Editer</a>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            ))
                        }
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-header">Billing History</div>
                    <div class="card-body p-0">

                        <div class="table-responsive table-billing-history">
                            <table class="table mb-0">
                                <thead>
                                    <tr>
                                        <th class="border-gray-200" scope="col">Transaction ID</th>
                                        <th class="border-gray-200" scope="col">Date</th>
                                        <th class="border-gray-200" scope="col">Amount</th>
                                        <th class="border-gray-200" scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#39201</td>
                                        <td>06/15/2021</td>
                                        <td>$29.99</td>
                                        <td><span class="badge bg-light text-dark">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>#38594</td>
                                        <td>05/15/2021</td>
                                        <td>$29.99</td>
                                        <td><span class="badge bg-success">Paid</span></td>
                                    </tr>
                                    <tr>
                                        <td>#38223</td>
                                        <td>04/15/2021</td>
                                        <td>$29.99</td>
                                        <td><span class="badge bg-success">Paid</span></td>
                                    </tr>
                                    <tr>
                                        <td>#38125</td>
                                        <td>03/15/2021</td>
                                        <td>$29.99</td>
                                        <td><span class="badge bg-success">Paid</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Modal
                title="Ajouter une boutique"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <form class="form" onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label>Nom de la boutique<span>*</span></label>
                                <br />
                                <input type="text" className="form-control" name="nom" placeholder="" required="required" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label>Adresse mail de la boutique<span>*</span></label>
                                <br />
                                <input type="text" className="form-control" name="email" placeholder="" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="form-group">
                                <label>Numéro de téléphone (1)<span>*</span></label>
                                <br />
                                <input type="tel" className="form-control" name="contact1" placeholder="" required="required" value={contact1} onChange={(e) => setContact1(e.target.value)} />
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="form-group">
                                <label>Numéro de téléphone (2)</label>
                                <br />
                                <input type="tel" className="form-control" name="contact2" placeholder="" value={contact2} onChange={(e) => setContact2(e.target.value)} />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label>Adresse de la boutique<span>*</span></label>
                                <br />
                                <input type="text" className="form-control" name="password" placeholder="" required="required" value={quartier} onChange={(e) => setQuartier(e.target.value)} />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label>Localisation</label>
                                <br />
                                <input type="text" className="form-control" name="confirmPassword" placeholder="" required="required" value={localisation} onChange={(e) => setLocalisation(e.target.value)} />
                            </div>
                        </div>
                        {/* <div class="col-12">
                            <div class="form-group">
                                <label>Logo de la boutique</label>
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
                            <div class="form-group login-btn">
                                <button class="btn" type="submit">Ajouter</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default MesBoutiques