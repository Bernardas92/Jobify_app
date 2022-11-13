import {Link} from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
      <img src={img} alt='not found' />
      <h3>Oops!</h3>
      <p>Jūsų ieškomas puslapis nerastas</p>
      <Link to='/'>Grįžti į pagrindinį</Link>
      </div>
    </Wrapper>
  )
}

export default Error
