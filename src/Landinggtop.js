import logo from './logo.svg';
import './Landinggtop.css';

import { Link, useNavigate } from 'react-router-dom';


function Landinggtop() {
  return (
    <>
      <div className='Landinggtop' style={{ marginTop: "50px" }}>
       <div className='Landinggtop-logo-cont'>
            <img src={require("./kennytechLogo.jpeg")} className="Landinggtop-logo" />
          </div>
          <div className='wtrite-up'>
            <div>
              At Keny-Tech, we specialize in providing top-notch repair services for a wide range of devices, including Apple iPhones, MacBooks, iPads, Samsung smartphones, and Apple Watches. Our commitment is to ensure that each device receives the highest quality of care and expertise.

              Our skilled technicians are trained to handle various technical issues, ensuring that your devices are restored to optimal functionality. We pride ourselves on staying updated with the latest industry trends and technological advancements, allowing us to offer effective solutions tailored to meet our customers' needs.
            
            </div>

            <div>
              At Keny-Tech, we believe in delivering reliable, fast, and affordable repair services. We understand the importance of your devices in your daily life, and our goal is to provide you with exceptional service that exceeds your expectations.
            </div>

       </div>

      </div>
    </>
  );
}

export default Landinggtop;