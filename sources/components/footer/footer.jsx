import React from 'react';
import './footer.less';

class Footer extends React.Component {
    render(){
        return(
            <div className='footer'>
                <div className="container">
                    <a  href='#' className="footer__site">Films</a>
                    <small className="footer__copy">Copyright © 2020 FILMS. DARYA L.</small>
                </div>
            </div>
        )
    }
}

export default Footer;