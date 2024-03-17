import React, {Component} from 'react';
import "../Style/MainStyle.css"
import "bootstrap/dist/css/bootstrap-grid.css"

class Main__Footer extends Component {
    render() {
        return (
            <>
                <main>
                    <div className="cointainer__news">
                        <div className="cointainer__item">
                            <h2 className="text1 d-flex"><span className="text1__spam">Бесплатные</span>курсы</h2>

                            <button className="all"><a className="a__all" href="">Все курсы</a></button>
                        </div>

                    <div className="ddd">
                        <p className="About">
                            Собрали опыт ученых и экспертов Атласа в короткие еmail-уроки. Подписывайтесь
                            и узнавайте, как устроено пищеварение и с чего начать изменения в питании.
                        </p>

                        <img className="book" src="../images/book.png" />
                        <img className="book2" src="../images/book2.png" />
                    </div>
                        <div className="card__shop d-flexx">

                            <div className="card1 s">
                                <img className="ss"  src="../images/card/card1.png" alt="" />
                                <p className="pp">
                                    Узнайте, как сделать бактерии вашего кишечника счастливее, и как заботится о микробиоте.
                                </p>
                            </div>

                            <div className="card2 s">
                                <img className="ss" src="../images/card/card2.png" alt="" />
                                <p className="pp">
                                    Мы — то, что мы едим. Узнайте, как питаться с удовольствием и с  пользой для своего здоровья
                                </p>
                            </div>

                            <div className="card3 s">
                                <img className="ss" src="../images/card/card3.png" alt="" />
                                <p className="pp">
                                    Все о проблемах пищеварения, как их предотвратить и решить
                                </p>
                            </div>

                            <div className="card4 s">
                                <img className="ss" src="../images/card/card4.png" alt="" />
                                <p className="pp">
                                    Научитесь управлять стрессом даже когда на вас бежит разъяренный слон
                                </p>
                            </div>

                            <button className="all__button">All courses</button>

                        </div>

                        {/*1509 height*/}

                    </div>

                    {/*---------------register page-------------*/}

                    <div className="register__page d-flexx">

                        <div className="Registration">
                            <div className="Email">
                                <h2 className="podpis">
                                    Подписка<br/>
                                    на блог
                                </h2>

                                <div className="img__cointainer d-flex">
                                    <p className="aboutt">
                                        Дайджесты популярных статей и секретные промокоды для подписчиков
                                    </p>
                                    <img className="Mail" src="../images/Mail.png" alt=""/>
                                </div>

                                <div className="input__email d-flexx">
                                    <input className="input" type="text"/>
                                    <button className="subs">
                                        Подписаться
                                    </button>
                                </div>
                                <p className="politic">
                                    Подписываясь на рассылку, вы принимаете нашу <br/>
                                    <a className="clone" href="">Политику конфиденциальности</a>
                                </p>
                            </div>
                        </div>

                        <div className="Telegram">
                            <img className="ava" src="../images/telegram.png" alt=""/>
                            <img className="avaa" src="../images/telegram2.png" alt=""/>
                            <h2 className="news">
                                Новости из мира науки и ценные советы о здоровье
                            </h2>
                            <p className="subss">
                                5 000+ подписчиков
                            </p>
                            <button className="Button__shop">
                                Подписаться
                            </button>
                        </div>

                        <div className="Zen">
                            <img className="ava__zen" src="../images/zen.png" alt=""/>
                            <img className="ava__zenn" src="../images/zeen.png" alt=""/>
                            <h2 className="newss">
                                <span className="atlas">Атлас в Дзене</span> Cамое интересное всегда под рукой
                            </h2>

                            <button className="Button__shopp">
                                Подписаться
                            </button>
                        </div>





                    </div>

                    <p className="why">
                        Есть вопрос к команде или идея для статьи?  Пишите на <span className="whyy">blog@atlas.ru</span>
                    </p>

                <div className="hr d-flexx">
                        <hr className="hrrr"/>
                            <img className="hrw" src="../images/Frame.png" alt=""/>
                        <hr className="hrrr"/>

                </div>
                </main>
            </>
        );
    }
}

export default Main__Footer;