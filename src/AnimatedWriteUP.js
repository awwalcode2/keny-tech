import logo from './logo.svg';
import "./AnimatedWriteUP.css";
import { Typewriter } from 'react-simple-typewriter'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


import { Link, useNavigate } from 'react-router-dom';


function AnimatedWriteUP() {
    const [text] = useTypewriter({
        words: ['Where reliability meets expertise'],
        loop: 1
    })

    const [secondtext] = useTypewriter({
        words: ['Keny-Tech,your trusted tech care partner!.'],
        loop: 0
    })
    return (
        <>
            <div className='animated'>
                <div>
                    <h3 className='text'>{text}</h3>
                    <h2 className='secondtext'>{secondtext}</h2>
                </div>

                <div>
                    <p >Count on Keny-Tech for fast, reliable, and affordable repairs. Your device is in expert hands, and we'll <br/> have it running  like new in no time</p>
                </div>
            </div>

        </>
    );
}

export default AnimatedWriteUP;