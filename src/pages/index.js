import * as React from "react"

import "./index.css"

import LogoImage from "../images/thecodergang-logo.png"
import DiscordImage from "../images/discord.png"
import IntroImage from "../images/intro.jpg"
import CodeaholicguyImage from "../images/codeaholicguy.png"
import ToidicodedaoImage from "../images/toidicodedao.png"

const IndexPage = () => (
  <>
    <header>
      <nav className="nav">
        <a href="#">
          <img className="nav__logo" src={LogoImage} />
        </a>
        <ul className="nav__item-wrapper">
          <li className="nav__item">
            <a href="#">Sự kiện</a>
          </li>
          <li className="nav__item">
            <a href="#">The Coder Gang Warriors</a>
          </li>
          <li className="nav__item">
            <button className="btn btn--primary">Tham gia</button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section className="intro">
        <div className="intro__quote">
          <h2 className="intro__quote__title">The Coder Gang</h2>
          <p className="intro_quote__description">
            Nền tảng kết nối các bạn trẻ yêu thích lập trình tại Việt Nam, nơi
            mọi người có thể chia sẻ kiến thức và kinh nghiệm của mình trong quá
            trình học tập và làm việc, cùng nhau học hỏi và cùng nhau xây dựng
            những nội dung thú vị.
          </p>
        </div>
        <img className="intro__image" src={IntroImage} />
      </section>
      <section className="activities">
        <h2 className="title">Tham gia với chúng mình</h2>
        <div className="activities__cards">
          <div className="activities__card backdrop-top-left">
            <div className="activities__card__header">
              <img className="activities__card__logo" src={DiscordImage} />
            </div>
            <div className="activities__card__body">
              <span>
                Chit-chat những vấn đề liên quan đến lập trình và đời sống của
                lập trình viên.
              </span>
            </div>
            <div className="activities__card__footer">
              <button className="cta-btn">Tham gia ngay</button>
            </div>
          </div>
          <div className="activities__card backdrop-bottom-left">
            <div className="activities__card__header">
              <h3>Online Events</h3>
            </div>
            <div className="activities__card__body">
              <span>Những sự kiện để giúp thành viên gặp gỡ và trao đổi.</span>
            </div>
            <div className="activities__card__footer">
              <button className="cta-btn">Xem thêm</button>
            </div>
          </div>
          <div className="activities__card backdrop-top-right">
            <div className="activities__card__header">
              <h3>Warrior Program</h3>
            </div>
            <div className="activities__card__body">
              <span>
                Chương trình hỗ trợ các bạn có niềm đam mê sáng tạo nội dung về
                lập trình.
              </span>
            </div>
            <div className="activities__card__footer">
              <button className="cta-btn">Xem thêm</button>
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <h2 className="title">Cộng đồng</h2>
        <div className="partners__community">
          <img className="partners__community__logo" src={CodeaholicguyImage} />
          <img className="partners__community__logo" src={ToidicodedaoImage} />
        </div>
      </section>
    </main>
    <footer>
      <div className="footer">
        <div className="footer__about">
          <h3>Về chúng tôi</h3>
          <p className="footer__about__text">
            The Coder Gang là nền tảng kết nối các bạn trẻ yêu thích lập trình
            tại Việt Nam, nơi mọi người có thể chia sẻ kiến thức và kinh nghiệm
            của mình trong quá trình học tập và làm việc, cùng nhau học hỏi và
            cùng nhau xây dựng những nội dung thú vị.
          </p>
        </div>
        <div></div>
      </div>
      <p className="copyright">The Coder Gang © 2021 All rights reserved.</p>
    </footer>
  </>
)

export default IndexPage
