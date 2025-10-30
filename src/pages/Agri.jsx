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
        <nav className="main-nav">
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
            最先端テクノロジーと伝統的な農業技術を融合させ、
            持続可能で高効率な次世代型農業を実現します。
            環境に配慮しながら、豊かな食の未来を創造します。
          </p>
        </section>

        <section className="features-section">
          <h2>スマート農業ソリューション</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>スマート栽培管理</h3>
              <p>AIとIoTセンサーを活用した精密な環境制御により、最適な生育環境を実現します。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💧</div>
              <h3>水資源管理</h3>
              <p>自動灌漑システムにより、水資源を効率的に活用し、環境負荷を最小限に抑えます。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>データ分析</h3>
              <p>ビッグデータ解析により、収穫量の最適化と品質向上を実現します。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>有機栽培技術</h3>
              <p>化学肥料に頼らない、持続可能な有機農法をサポートします。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>自動化システム</h3>
              <p>ロボティクスを活用し、作業の効率化と労働負担の軽減を図ります。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">♻️</div>
              <h3>循環型農業</h3>
              <p>資源を循環させ、廃棄物ゼロを目指す持続可能な農業モデルを構築します。</p>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <h2>未来へのビジョン</h2>
          <div className="vision-content">
            <div className="vision-item">
              <h3>都市型農業の推進</h3>
              <p>垂直農法やビル内農園など、都市空間を活用した新しい農業の形を提案します。</p>
            </div>
            <div className="vision-item">
              <h3>地域農業の活性化</h3>
              <p>地域の特性を活かした農業支援により、地方創生に貢献します。</p>
            </div>
            <div className="vision-item">
              <h3>グローバル展開</h3>
              <p>世界の食糧問題解決に向けて、技術とノウハウを国際社会に提供します。</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Agri;
