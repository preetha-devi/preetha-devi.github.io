import React from 'react'

import PropTypes from 'prop-types'

import Branding from './branding'
import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-information">
        <div className="footer-content">
          <div className="footer-header">
            <Branding></Branding>
            <p className="footer-text10">{props.text2}</p>
          </div>
          <div className="footer-contact-list">
            <div className="footer-contact1">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="footer-image1"
              />
              <span className="footer-text11">{props.text11}</span>
            </div>
            <div className="footer-contact2">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="footer-image2"
              />
              <span className="footer-text12">{props.text22}</span>
            </div>
          </div>
        </div>
        <span className="footer-copyright">{props.copyright}</span>
      </div>
      <div className="footer-links">
        <div className="footer-column1">
          <span className="link">{props.text}</span>
          <span className="link">{props.text1}</span>
          <span className="link">{props.text21}</span>
          <span className="link">{props.text3}</span>
          <span className="link">{props.text4}</span>
          <span className="link">{props.text5}</span>
        </div>
        <div className="footer-column2">
          <span className="link">{props.text6}</span>
          <span className="link">{props.text7}</span>
          <span className="link">{props.text8}</span>
          <span className="link">{props.text9}</span>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text5: 'Contact',
  text9: 'Facebook',
  text1: 'Training\n',
  copyright: '©2022 Product Calgary. All Rights Reserved.',
  imageAlt: 'image',
  text: 'About',
  text2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  imageSrc: '/group%201639.svg',
  text3: 'Membership',
  text11: 'office@remarkable.template',
  text8: 'Twitter',
  text4: 'Blog',
  text6: 'Linkedin',
  text21: 'Events',
  text22: '+0 222.345.987',
  imageAlt1: 'image',
  imageSrc1: '/group%201640.svg',
  text7: 'Instagram',
}

Footer.propTypes = {
  text5: PropTypes.string,
  text9: PropTypes.string,
  text1: PropTypes.string,
  copyright: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  imageSrc: PropTypes.string,
  text3: PropTypes.string,
  text11: PropTypes.string,
  text8: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  text21: PropTypes.string,
  text22: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text7: PropTypes.string,
}

export default Footer
