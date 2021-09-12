import '@/scss/layout/breadcrumbs.scss';
import {Link} from 'react-router-dom';

export default function Breadcrumbs(props) {
  return <div className="breadcrumbs">
    <div className="breadcrumbs__items">
      {props.items.map((item, index) => <div className="breadcrumbs__item">
        {item.link ? <Link to={item.link}>{item.name}</Link> : <span>{item.name}</span>}
        {props.items.length - 1 !== index ? ' / ' : ''}
      </div>)}
    </div>
  </div>;
}