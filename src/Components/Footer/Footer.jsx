import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h1>
                        <i className="fas fa-gem me-3"></i>SportKG</h1>
                    <p>
                    Магазин спортивной обуви в Бишкеке
                    <br/> У нас можно приобрести всю линейку продукций мировых брендов по самым привлекательным ценам.
                    </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Продукция</h6>
                    <p>
                        <a>Nike</a>
                    </p>
                    <p>
                        <a>Adidas</a>
                    </p>
                    <p>
                        <a>Reebok</a>
                    </p>
                    <p>
                        <a>LI-NING</a>
                    </p>
                    <p>
                        <a>Puma</a>
                    </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4"> 10 лет с Вами! </h6>
                    <p>
                        <a>О нас</a>
                    </p>
                    <p>
                        <a>Почему SportKG</a>
                    </p>
                    <p>
                        <a>Услуги</a>
                    </p>
                    <p>
                        <a>Обратная связь</a>
                    </p>
                    <p>
                        <a>Помощь</a>
                    </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Контакты
                    </h6>
                    <p><i className="fas fa-home me-3"></i>ул.Ибраимова 115 Бишкек </p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>
                        sportkg@gmail.com
                    </p>
                    <p><i className="fas fa-phone me-3"></i>+996 (707) 07 07 07</p>
                    <p><i className="fas fa-print me-3"></i>+996 (555) 55 55 55</p>
                    </div>
                </div>
                </div>
            </section>

            <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
            Copyright 2012-2022 sport.kg все права защищены!
                <a className="text-reset fw-bold" href="https://to-moore.com/" target="_blanc"> </a>
            </div>
            </footer> 
        </div>
    );
};

export default Footer;