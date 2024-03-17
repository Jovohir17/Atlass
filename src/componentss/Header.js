import React from 'react'

export default function Header() {
  return (
    <>
        <header>
            <nav className="navbar">
                <a href="#" className="nav-logo">
                    <img src="./imgs/Logo.svg" alt="" />
                </a>

                <ul className="nav">
                    <li className="nav-item"><a href="#" className="nav-link">DNA</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Microbiome</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Partner with us</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About Atlas</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">FAQ</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Upload</a></li>
                </ul>

                <div className="nav__helps">
                    <a href="#" className="nav__cart"><img src="./imgs/Cart.svg" alt="" /></a>
                    <a href="#" className="nav__user"><img src="./imgs/user1.svg" alt="" /></a>
                    <a href="#" className="nav__search"><img src="./imgs/search1.svg" alt="" /></a>
                </div>
            </nav>

            <div className="header__menu">
                <div className="header__menu__texts">
                    <h2>
                        More <span className='span1'>answers</span> to your <span className='span2'>questions</span> in our blog
                    </h2>
                    <p>
                        Sharing knowledge on how genes, gut bacteria
                        and lifestyle affect your health
                    </p>
                </div>
               
                <img src="./imgs/mask.png" alt="" />

            </div>
        </header>   

        <div className="menu__guides">
            <a href="#">🧬 DNA <span>104</span></a>
            <a href="#">📖 Guides <span>33</span></a>
            <a href="#">🥼 Health <span>166</span></a>
            <a href="#">🎉 Lifestyle <span>33</span></a>
            <a href="#">🧫 Microbiome <span>79</span></a>
            <a href="#">📰 News <span>5</span></a>
            <a href="#">🥑 Nutrition <span>166</span></a>
            <a href="#">🔬 Oncology <span>104</span></a>
            <a href="#">🥗 Recepties <span>5</span></a>
            <a href="#">❤ Reviews <span>24</span></a>
        </div>     


        <div className="fixed__profs">
            <a href="#" className="facebook"><img src="./imgs/facebook.svg" alt="" /></a>
            <hr />
            <a href="#" className="insta"><img src="./imgs/insta.svg" alt="" /></a>
            <hr />
            <a href="3" className="mail"><img src="./imgs/mail.svg" alt="" /></a>
        </div>

    </>
  )
}
