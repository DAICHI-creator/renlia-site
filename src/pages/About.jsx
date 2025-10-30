import { Link } from 'react-router-dom';
import { useState } from 'react';
import renliaLogo from '../assets/renlia-logo.png';
import takagidaichiPhoto from '../assets/takagidaichi.png';
import './About.css';

function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。担当者より折り返しご連絡させていただきます。');
    setFormData({
      name: '',
      email: '',
      company: '',
      interest: '',
      message: ''
    });
  };

  return (
    <div className="about-container">
      {/* ロゴ - 独立して配置 */}
      <Link to="/" className="logo-link">
        <img src={renliaLogo} alt="RENLIA" className="logo-image" />
      </Link>

      <header className="about-header">
        <Link to="/" className="header-logo">RENLIA</Link>
        <nav className="about-main-nav">
          <Link to="/design">DESIGN</Link>
          <Link to="/agri">AGRICULTURE</Link>
        </nav>
      </header>

      <main className="about-content">
        {/* ヒーローセクション */}
        <section className="about-hero-section">
          <h1 className="about-main-title">ABOUT US</h1>
        </section>

        {/* 企業理念 */}
        <section className="message-section">
          <div className="message-container">
            <h2 className="section-title">『未来を想像し、今を創造する』</h2>
            <div className="message-content">
              <p className="message-text">
                これこそが私たちRENLIAの行動の軸であり、取り組みのベースです。
              </p>
              <p className="message-text">
                「Missionを達成し、Visionを叶えるために、Valueを提供する」ことがRENLIAの存在意義であり、
              </p>
              <p className="message-text">
                その根底にある変わらぬ想いと一貫した世界観こそがRENLIAの独自性を生み、ブランドとしての強みに繋がると信じています。
              </p>
            </div>
          </div>
        </section>

        {/* Mission / Vision / Value */}
        <section className="philosophy-section">
          <div className="philosophy-container">
            <div className="philosophy-item mission-item">
              <h3 className="philosophy-label">Mission 使命</h3>
              <p className="philosophy-text">『日々に喜びを、人生に輝きを』</p>
            </div>

            <div className="philosophy-item vision-item">
              <h3 className="philosophy-label">Vision 未来像</h3>
              <p className="philosophy-text">
                個性を大切にし、1人1人が自分らしく輝ける世界の実現
              </p>
            </div>

            <div className="philosophy-item value-item">
              <h3 className="philosophy-label">Value 価値</h3>
              <div className="value-list">
                <div className="value-item-detail">
                  <span className="value-number">01</span>
                  <h4>Joy</h4>
                  <p>楽しい日々</p>
                </div>
                <div className="value-item-detail">
                  <span className="value-number">02</span>
                  <h4>Shine</h4>
                  <p>輝く人生</p>
                </div>
                <div className="value-item-detail">
                  <span className="value-number">03</span>
                  <h4>Connection</h4>
                  <p>出逢いと繋がり</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 代表メッセージ */}
        <section className="message-interview-section">
          <h2 className="section-title">代表メッセージ</h2>

          {/* 第1メッセージ: 左に写真、右にテキスト */}
          <div className="interview-item">
            <div className="interview-photo">
              <img src={takagidaichiPhoto} alt="代表取締役 髙木大地" className="ceo-photo" />
            </div>
            <div className="interview-content">
              <h3 className="interview-subtitle">デザインと農業、2つの事業への想い</h3>
              <p className="interview-text">
                私たちRENLIAは、「すべては日常を楽しく、人生を輝かせるため」という想いのもと、
                デザインと農業という一見異なる領域で事業を展開しています。
              </p>
              <p className="interview-text">
                なぜこの2つなのか。それは、どちらも人々の日常に深く関わり、
                生活に喜びと輝きをもたらす力を持っているからです。
                デザインは心を豊かにし、農業は身体を豊かにする。
                この両輪で、人々の人生そのものを輝かせたいと考えています。
              </p>
              <p className="interview-signature">代表取締役 田中美沙希</p>
            </div>
          </div>

          {/* 第2メッセージ: 左にテキスト、右に写真 */}
          <div className="interview-item">
            <div className="interview-content">
              <h3 className="interview-subtitle">「RENLIA」に込めた想いと未来への展望
              </h3>
              <p className="interview-text">
                事業が複数に広がっても、その根底にあるのは変わらぬ想い。
                私たちは、この一貫した世界観こそがRENLIAの独自性であり、
                ブランドとしての強みだと信じています。
              </p>
              <p className="interview-text">
                人々の日常に喜びを届け、人生を輝かせる。
                この使命を胸に、私たちは新しい価値と体験を生み出し続けます。
              </p>
              <p className="interview-signature">代表取締役 髙木大地</p>
            </div>
            <div className="interview-photo">
              <img src={takagidaichiPhoto} alt="代表取締役 髙木大地" className="ceo-photo" />
            </div>
          </div>
        </section>

        {/* お問い合わせフォーム */}
        <section className="contact-form-section">
          <h2 className="section-title">お問い合わせ</h2>
          <p className="contact-description">
            ご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>

          <div className="form-container">
            <form onSubmit={handleSubmit} className="about-contact-form">
              <div className="form-group">
                <label htmlFor="name">お名前 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="山田 太郎"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">メールアドレス *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">会社名・組織名</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="株式会社〇〇"
                />
              </div>

              <div className="form-group">
                <label htmlFor="interest">お問い合わせ内容 *</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">選択してください</option>
                  <option value="design">DESIGN事業について</option>
                  <option value="agriculture">AGRI事業について</option>
                  <option value="recruitment">採用について</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">メッセージ *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="お問い合わせ内容を詳しくお書きください"
                />
              </div>

              <button type="submit" className="about-submit-button">
                送信する
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
