import React from 'react'
import CV from '../../assests/Resume.docx'
import CVFR from '../../assests/ResumeFr.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV English</a>
        <a href={CVFR} download className='btn'>Download CV French</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA