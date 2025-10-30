import { Link } from 'react-router-dom';
import renliaLogo from '../assets/renlia-logo.png';
import './Design.css';

function Design() {
  return (
    <div className="design-container">
      {/* ロゴ - 独立して配置 */}
      <Link to="/" className="logo-link">
        <img src={renliaLogo} alt="RENLIA" className="logo-image" />
      </Link>

      <header className="design-header">
        <Link to="/" className="header-logo">RENLIA</Link>
        <nav className="main-nav">
          <Link to="/agri">AGRICULTURE</Link>
          <Link to="/about">ABOUT</Link>
        </nav>
      </header>

      <main className="design-content">
        <section className="design-hero-section">
          <h1 className="design-title">DESIGN</h1>
          <p className="design-subtitle">未来を創造するデザインソリューション</p>
        </section>

        <section className="services-section">
          <h2>私たちのサービス</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>ブランディング</h3>
              <p>企業の価値を最大限に引き出すブランド戦略とビジュアルアイデンティティを提供します。</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>UI/UX デザイン</h3>
              <p>ユーザー中心のアプローチで、直感的で美しいインターフェースを設計します。</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>ウェブデザイン</h3>
              <p>レスポンシブで革新的なウェブサイトを制作し、デジタル体験を向上させます。</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>モバイルアプリ</h3>
              <p>iOS・Android向けのモダンなアプリケーションデザインを提供します。</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎬</div>
              <h3>モーショングラフィックス</h3>
              <p>動きのあるビジュアルコンテンツで、メッセージを効果的に伝えます。</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🖼️</div>
              <h3>グラフィックデザイン</h3>
              <p>印刷物からデジタルまで、あらゆるメディアに対応したデザインを制作します。</p>
            </div>
          </div>
        </section>

        <section className="philosophy-section">
          <h2>デザイン哲学</h2>
          <p className="philosophy-text">
            デザインは単なる見た目の美しさではありません。
            それは、問題を解決し、価値を創造し、未来を形作る力です。
            私たちは、テクノロジーとクリエイティビティを融合させ、
            人々の生活をより豊かにするデザインを追求しています。
          </p>
        </section>
      </main>
    </div>
  );
}

export default Design;
