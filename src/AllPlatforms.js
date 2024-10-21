import logo from './logo.svg';
import './AllPlatforms.css';
import { Typewriter } from 'react-simple-typewriter'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


import { Link, useNavigate } from 'react-router-dom';


function AllPlatforms() {
    const navigate = useNavigate()
    const goto = (e) => {
        window.open(e);
    }

    const [text] = useTypewriter({
        words: ['PLATFORMS'],
        loop: 0
    })
    return (
        <>

            <div className='platforms'>
                PLATFORMS
            </div>

            <div className='AllPlatforms' style={{ marginTop: "40px" }}>
                {/* <div className='platforms'>
                    PLATFORMS
                </div> */}



                <div className="social-wrapper" >
                    <div className="social-media" id="facebook" onClick={() => goto("https://www.facebook.com/olaide.hamidkehinde?mibextid=LQQJ4d")}>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                            <span>Facebook</span>
                        </a>
                        <p className="description">Stay connected with friends and family on Facebook, the world’s largest social network.</p>
                        <img src={require("./facebook.png")}  alt="Facebook" className="social-image" />
                        <p className="qr-text">Scan the QR code to get access to our platforms faster.</p>
                    </div>

                    <div className="social-media" id="twitter" onClick={() => goto("https://x.com/kenytech01/status/1756293557453787226?s=46&t=09f7ifCS_BEW4hq61lYMsg")}>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M..." fill="currentColor"></path>
</svg>
</i>
                            {/* <span style={{fontSize:"30px"}}>X</span> */}
                        </a>
                        <p className="description">Join the community on Facebook and stay updated with the latest tech insights from Keny-Tech. Get exclusive content, updates, and engage with fellow tech enthusiasts!</p>
                        <img src={require("./twitter.png")}  alt="Twitter" className="social-image" />
                        <p className="qr-text">Scan the QR code to get access to our platforms faster.</p>
                    </div>

                    <div className="social-media" id="instagram" onClick={() => goto("https://www.instagram.com/kenytech_world_concept?igsh=MTZtbzlwa3ppdHl0dQ%3D%3D&utm_source=qr")}>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                        <p className="description">Stay updated with the latest tech insights and trends by following Keny-Tech on Instagram for exclusive content and behind-the-scenes updates.       </p>
                        <img src={require("./INSTAGRAM.png")}  alt="Instagram" className="social-image" />
                        <p className="qr-text">Scan the QR code to get access to our platforms faster.</p>
                    </div>


                    <div className="social-media" id="linkedin" onClick={() => goto("https://www.linkedin.com/in/kenytech-world-concept-960010252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app")}>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                        <p className="description">Stay ahead in the tech industry by following Keny-Tech on LinkedIn. Get professional insights, trends, and exclusive content tailored for tech professionals!</p>
                        <img src={require("./linkedind.png")}  alt="LinkedIn" className="social-image" />l
                        <p className="qr-text">Scan the QR code to get access to our platforms faster.</p>
                    </div>

                    <div className="social-media" id="tiktok" onClick={() => goto("https://www.tiktok.com/@kennytech02?_t=8qesNXRdMu6&_r=1")}>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-tiktok"></i>
                            <span>Tiktok</span>
                        </a>
                        <p className="description">Catch the latest tech trends and insights in a fun, bite-sized format by following Keny-Tech on TikTok. Don’t miss out on exclusive tips and behind-the-scenes content!</p>
                        <img src={require("./tiktok.png")}  alt="tiktok" className="social-image" />
                        <p className="qr-text">Scan the QR code to get access to our platforms faster.</p>
                    </div>


                </div>
            </div>
        </>
    );
}

export default AllPlatforms;