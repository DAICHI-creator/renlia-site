import { useNavigate } from 'react-router-dom';
import heroBackground from '../assets/hero-background.png';
import renliaLogo from '../assets/renlia-logo.png';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img
        src={heroBackground}
        alt="RENLIA Future City"
        className="hero-image"
      />

      {/* 左側のホログラム（デザイン） */}
      <div
        className="hologram-area left-hologram"
        onClick={() => navigate('/design')}
        aria-label="Design事業へ"
      >
        <div className="hover-overlay">
          <span className="hover-text">DESIGN</span>
        </div>
      </div>

      {/* 右側のホログラム（農業） */}
      <div
        className="hologram-area right-hologram"
        onClick={() => navigate('/agri')}
        aria-label="Agriculture事業へ"
      >
        <div className="hover-overlay">
          <span className="hover-text">AGRICULTURE</span>
        </div>
      </div>

      {/* ロゴ - 独立して配置 */}
      <img src={renliaLogo} alt="RENLIA" className="logo-image" />

      {/* ナビゲーション */}
      <header className="home-header">
        <nav className="home-main-nav">
          <a href="/about">ABOUT</a>
        </nav>
      </header>
    </div>
  );
}

export default Home;
