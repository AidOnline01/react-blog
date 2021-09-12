import '@/scss/layout/header.scss';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          <img src="/images/header/logo.png" alt="" />
          <div class="header__logo-info">
            <div class="header__logo-uptext">quality</div>
            <div class="header__logo-subtext">ITDevv</div>
          </div>
        </Link>
      </div>
    </div>
  );
}