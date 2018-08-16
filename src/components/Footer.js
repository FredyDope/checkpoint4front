import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { Link } from '@reach/router'
import '../css/Footer.css'

const Footer = () =>
  <div className="Footer">
    <Link to='/homepage'>
      {/*<img src={logo} className='logo' alt='logo' />*/}
    </Link>
    <div className='FooterText'>Fred Cine Blog © 2018</div>
            <div className='SocialNetworks'>    
                  <a href="https://www.facebook.com" target='_blank'>
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="https://www.twitter.com" target='_blank'>
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com" target='_blank'>
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="https://github.com/" target='_blank'>
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
            </div>
            <Link to='/home'><div className='FooterText'>Home</div></Link>
            <a href='https://www.service-public.fr/professionnels-entreprises/vosdroits/F31228' 
            target='_blank'><div className='FooterText'>Mentions légales</div></a>
  </div>

export default Footer