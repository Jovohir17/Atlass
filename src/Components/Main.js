// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function Main() {
    

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

  return (
    <>
        <article>
            <div className="container">
                <div className="row">
                    <h3>Управляйте вашим здоровьем <span><a href="#!">с тестами Атлас</a></span></h3>

                    
                    <div className="scrollll">
                    <div className="col-3">
                        <div className="card" id='cardik'>
                            <div className="card-body">
                                <div className="top">
                                    <h4 className="text-center">
                                    Генетический  <br />
                                    тест
                                    </h4>
                                </div>
                                <div className="bottom">
                                    <div className="cost">
                                        <p>16 900 ₽ </p>
                                        <h6>-35%</h6>
                                    </div>
                                    <h5>10 999 <span>₽</span></h5>
                                    <button><a href="#!">Подробнее</a></button>
                                </div>
                            </div>
                        </div>
                    </div> 

                        <div className="col-3">
                            <div className="card card__1">
                                <div className="card-body">
                                    <div className="top">
                                        <h4 className="text-center">
                                        Тест <br />
                                        Микробиоты
                                        </h4>
                                    </div>
                                    <div className="bottom">
                                        <div className="cost">
                                            <p>18 900 ₽ </p>
                                            <h6>-26%</h6>
                                        </div>
                                        <h5>13 999 <span>₽</span></h5>
                                        <button><a href="#!">Подробнее</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card card__2">
                                <div className="card-body">
                                    <div className="top">
                                        <h4 className="text-center">
                                        Тест Полный  <br />
                                        геном
                                        </h4>
                                    </div>
                                    <div className="bottom">
                                        <div className="cost">
                                            <p>139 000 ₽ </p>
                                            <h6>-29%</h6>
                                        </div>
                                        <h5>98 999 <span>₽</span></h5>
                                        <button><a href="#!">Подробнее</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card card__3">
                                <div className="card-body">
                                    <div className="top">
                                        <h4 className="text-center">
                                        Интерпретируем  <br />
                                        данные других
                                        </h4>
                                    </div>
                                    <div className="bottom">
                                        <div className="cost">
                                            <p>8 900 ₽ </p>
                                            <h6>-35%</h6>
                                        </div>
                                        <h5>5000 <span>₽</span></h5>
                                        <button><a href="#!">Подробнее</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <main>
            <div className="container" >
                <div className="row" >


                    
                    


                    <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

        <div className="col-3 ">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/tron.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/sabza.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/gen.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>генетика</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/milk.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/tron.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/sabza.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/gen.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>генетика</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/milk.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide><div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/tron.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/sabza.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/gen.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>генетика</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/milk.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    </SwiperSlide>
        <SwiperSlide>
            <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/tron.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/sabza.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/gen.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>генетика</p>
                            </div>
                   

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/milk.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/tron.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/sabza.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/gen.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>генетика</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/milk.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/tron.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/sabza.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/gen.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>генетика</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/milk.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/tron.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/sabza.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/gen.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>генетика</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/milk.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/tron.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/sabza.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/gen.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>генетика</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/milk.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/tron.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/sabza.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/gen.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>генетика</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/milk.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                    </div>

                    
        </SwiperSlide>
         <SwiperSlide>
            <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/tron.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/sabza.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/gen.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>генетика</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/milk.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                    </div>

                    
        </SwiperSlide>
         <SwiperSlide>
            <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/tron.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/sabza.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/gen.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>генетика</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/milk.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                    </div>

                    
        </SwiperSlide>
         <SwiperSlide>
            <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/tron.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/sabza.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/gen.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>9 апреля • 8 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>генетика</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>19 марта • 15 мин</h6>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/goliy.png" alt="Error" />
                                <p>днк</p>
                            </div>

                            <div className="card-footer">
                                <h5>Развенчиваем мифы о ДНК-тестах</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                        <div className="card">
                            <div className="card-body">
                                <img src="../images/milk.png" alt="Error" />
                                <p>Питание</p>
                            </div>

                            <div className="card-footer">
                                <h5>Ожирение ч. 2: риски, генетика, и лечение</h5>
                                <h6>5 марта • 15 мин</h6>
                            </div>

                        </div>
                        
                    </div>



                    
        </SwiperSlide>

        <div className="col-9">
                <div class="uk-inline">
                        <button class="uk-button uk-button-default" type="button">Показать ещё</button>
                        <div class="uk-card uk-card-body uk-card-default" uk-drop="mode: click">Что бы узнать больше информации, нажмите кнопки с цифрами ниже.</div>
                    </div>
            </div>


            {/* <img src="../images/cart.svg" alt="Error" /> */}
                    
      </Swiper>
                    
            

                </div>
            </div>
        </main>
    </>
  )
}

export default Main