import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <main>
                <nav>
                   <Logo />
                </nav>
                <div className='container page'>
                    <div className='info'>
                        <h1>
                            job <span>tracking</span> app
                        </h1>
                        <p>
                            I'm baby shoreditch DSA tumblr jean shorts offal praxis chillwave hella schlitz health
                            goth tacos hell of ascot. Tumblr tacos man bun hashtag. Stumptown chicharrones hammock
                            viral vape tacos Brooklyn. Messenger bag unicorn single-origin coffee chia hashtag
                            iPhone swag DIY, bodega boys bicycle rights 8-bit.
                        </p>
                        <Link to='/register' className="btn btn-hero">
                            Login/Register
                        </Link>
                    </div>
                    <img src={main} alt="jobify" className='img main-img' />
                </div>
            </main>
        </Wrapper>
    )
}


export default Landing