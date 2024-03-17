import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>

                {/*____________________footer______________*/}

                <div className="card__footer d-flexx">

                    {/*___________________footer1 left______________*/}

                    <div className="footer__1">
                        <div className="icons d-flexx">
                            <p className="info">
                                ООО «Атлас»
                                ООО «Альфа»
                                354340, Краснодарский край, Ф. Т. Сириус, пгт. Сириус, проезд Триумфальный, д. 1, помещ. 2-037
                                8 (495) 150-09-90
                            </p>

                            <div className="telegram__icon">
                                <img className="icons__footer" src="../images/icons/telegram.png" alt=""/>
                                <img className="icons__footer" src="../images/icons/vk.png" alt=""/>
                                <img className="icons__footerr" src="../images/icons/zen.png" alt=""/>
                            </div>
                        </div>

                        <p className="info__shop">
                           <span className="info__shopp">Клиентский сервис</span><br/>
                            бесплатная линия 8 (800) 500-06-48
                            электронный адрес hello@atlas.ru
                            C понедельника по пятницу с 10 до 19
                            Выходные и официальные праздники —
                            нерабочие дни
                        </p>
                        <p className="footer__infoo">
                            © 2020-2023 Атлас Блог.
                            Правообладатель - Общество с ограниченной
                            ответственностью «Атлас»,<br/>
                            ОГРН 5137746188817.
                        </p>
                    </div>

                    {/*__________________footer2__right____________*/}

                    <div className="footer__2 d-flexx">
                        <div className="text1">
                            <p className="teext">О компании</p>
                            <p className="teext">Контакты</p>
                            <p className="teext">Вопросы и ответы </p>
                            <p className="teext">Партнерам</p>
                            <p className="teext">Клиника Атлас</p>
                            <p className="teext1">Интерпретация данных</p>
                        </div>

                        <div className="text2 ">
                            <p className="teexxt">Политика<br/>
                            конфиденциальности</p>
                            <p className="teexxt">Публичная оферта и правила оказания
                                услуг
                            </p>
                            <p className="teexxt">
                                Онкодиагностика
                            </p>
                            <p className="teexxt">
                                Knomx Contract Research
                            </p>
                            <p className="teexxt1">
                                Курс о правильном питании
                            </p>

                        </div>
                    </div>

                </div>

                <p className="over">
                    Все права защищены: любоеиспользование материалов данного Интернет-сайта, включая копирование и распространение, допустимо исключительно с предварительного письменного согласия ООО «Атлас».
                </p>

            </footer>
        );
    }
}

export default Footer;