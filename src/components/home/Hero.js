import '@/scss/hero';
import {Link} from 'react-router-dom';

export default function Hero(props) {
  return <div className="hero">
    <div className="hero__top">
      <div class="hero__logo">
        <img src="/images/header/logo.png" alt="" />
        <div class="hero__logo-info">
          <div class="hero__logo-uptext">quality</div>
          <div class="hero__logo-subtext">ITDevv</div>
        </div>
      </div>

      <div className="hero__admin"><Link to="/admin">Demo Admin</Link></div>
    </div>

    <div className="hero__content">
      <div className="hero__title">This is just React <br /> personal blog</div>
      <div className="hero__subtitle">Simple, fast, powerful</div>
      <div className="hero__more"><Link to="/blog">Go see what's is there</Link></div>
    </div>
  </div>;
}