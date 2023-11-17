import React from 'react'
import './Footer.css';

function Footer(props) {
  const {
footerText,
footerText2,
  } = props;
  return (
   <>
   <div className='parent'><center>
    <h3>{    footerText}</h3>
    <p>{footerText2}</p></center>
   </div>
   </>
  )
}

export default Footer