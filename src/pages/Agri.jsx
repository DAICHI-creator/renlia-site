import { Link } from 'react-router-dom';
import renliaLogo from '../assets/renlia-logo.png';
import './Agri.css';

function Agri() {
  return (
    <div className="agri-container">
      {/* ロゴ - 独立して配置 */}
      <Link to="/" className="logo-link">
        <img src={renliaLogo} alt="RENLIA" className="logo-image" />
      </Link>

      <header className="agri-header">
        <Link to="/" className="header-logo">RENLIA</Link>
        <nav className="agri-main-nav">
          <Link to="/design">DESIGN</Link>
          <Link to="/about">ABOUT</Link>
        </nav>
      </header>

      <main className="agri-content">
        <section className="agri-hero-section">
          <h1 className="agri-title">AGRICULTURE</h1>
          <p className="agri-subtitle">テクノロジーと自然が調和する持続可能な農業</p>
        </section>

        <section className="mission-section">
          <h2>私たちの取り組み</h2>
          <p className="mission-text">
            テクノロジーとアイデアの力で、農業が抱える課題を根本から解決する。<br />
            環境に配慮しながら、持続可能で豊かな食の未来を創造する。
          </p>
        </section>

        <section className="features-section">
          <h2>スマート農業ソリューション</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>規格外農作物の再流通</h3>
              <p>規格外という理由で廃棄されてきた農作物に新しい販路と価値を。<br />
              ITを活用して流通とマッチングを最適化し、フードロスの削減を目指します。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">♻️</div>
              <h3>耕作放棄地の再生</h3>
              <p>地域に眠る土地を再び活かす。<br />
              農家・自治体・企業をつなぐ仕組みを構築し、地域循環型の農業へ。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>農業の労働環境改革</h3>
              <p>IT技術・AIを活用して、生産効率と働く人の自由度を両立。<br />
              作業の効率化と労働負担の軽減を図り、持続型農業の実現を目指す。</p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <h2>AGRI事業が想像する未来</h2>
          <div className="vision-content">
            <div className="vision-item">
              <h3 class="vision-item-text">都市型農業の推進</h3>
              <p>垂直農法やビル内農園など、都市空間を活用した新しい農業</p>
            </div>
            <div className="vision-item">
              <h3 class="vision-item-text">地域農業の活性化</h3>
              <p>
              人と自然、都市と地方をつなぎ、循環と共生の新時代</p>
            </div>
            <div className="vision-item">
              <h3 class="vision-item-text">グローバル展開</h3>
              <p>世界の食糧問題解決に向けて、技術とノウハウを国際社会に提供</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Agri;
