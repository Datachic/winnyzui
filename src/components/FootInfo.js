import React from 'react'
import '../css/footInfo.css'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const FootInfo = () => {
  return (
  <div className='foot section-center'>
    <div className='footInfo'>
        <div className="info">
                <h5 className='heading'>
                <span>information</span> </h5>
                <Link to='/'><h6>about us</h6></Link>
                <Link to='/'><h6>delivery information</h6></Link>
                <Link to='/'><h6>terms & condition</h6></Link>
                <Link to='/'><h6>our showrooms</h6></Link>
                <Link to='/'><h6>FAQs</h6></Link>
                <Link to='/'><h6>privacy</h6></Link>
            </div>
            <div className="info">
                <h5 className='heading'>
                <span>categories</span> </h5>
                <Link to='/'><h6>accesories</h6></Link>
                <Link to='/'><h6>bedroom</h6></Link>
                <Link to='/'><h6>curtains & blinds </h6></Link>
                <Link to='/'><h6>dining</h6></Link>
                <Link to='/'><h6>kitchen</h6></Link>
                <Link to='/'><h6>living room</h6></Link>
                <Link to='/'><h6>office</h6></Link>
            </div>
            <div className="info">
                <h5 className='heading'>
                <span>contact us</span> </h5>
                <Link to='/'><h6>accessories</h6></Link>
                <Link to='/'><h6>bedroom</h6></Link>
                <Link to='/'><h6>curtains </h6></Link>
                <Link to='/'><h6>blinds</h6></Link>
                <Link to='/'><h6>accessories</h6></Link>
                <Link to='/'><h6>accessories</h6></Link>
            </div>
            <div className="info">
                <h5 className='heading'>
                <span>account</span> </h5>
                <Link to='/'><h6>accessories</h6></Link>
                <Link to='/'><h6>bedroom</h6></Link>
                <Link to='/'><h6>curtains</h6></Link>
                <Link to='/'><h6>blinds</h6></Link>
                <Link to='/'><h6>accessories</h6></Link>
                <Link to='/'><h6>accessories</h6></Link>
            </div>
    </div>
    <div className="contact_us">
        <div className='heading'><h5 >contact us</h5></div>   
            <div className="building">
                    <img src="choice/office.jpg" alt=""  
                        className="img"/>
                <div className="addy">
                    <div className="lekki">
                    <h5 className='heading'><span>lekki showroom</span></h5> 
                    <p className='way'>Rd 14, 27B adebayo doherty. <br/>off admiralty way, 
                    lekki phase 1, <br/>
                    lemon green building by fola osibo jxn
                    </p>
                    <h6 className='heading2'><span>234-8024258257</span></h6> 
                    </div>
                    <div className="ilupeju">
                    <h5 className='heading'><span>ilupeju showroom</span></h5>
                    <p className='way'>10B town planning way, ilupeju, <br/>
                    lemon green building, <br/> beside sweet sensation/keystone bank
                    </p> 
                    <h6 className='heading2'><span>234-8024258257</span></h6> 
                    </div>
                </div>
            </div>
    </div> 
            
        
  </div>
  )
}

export default FootInfo
