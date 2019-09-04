import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ name, author }) => (
  <footer
    // style={{ background: `#323330` }}
    className={'site-footer outer'}
  >
    <div
      // style={{
      //   color: `#fff`,
      //   fontSize: '13px',
      //   margin: `0 auto`,
      //   maxWidth: 960,
      //   padding: `1.45rem 1.0875rem`,
      //   verticalAlign: `middle`,
      // }}
      // style={{
      //   ...siteFooterContent,
      //   ...inner,
      //   fontSize: '13px',
      //   margin: `0 auto`,
      //   padding: `1.45rem 0`,
      // }}
      className={'site-footer-content inner'}
    >
      <section className={'copyright'}>
        <a href={`https://www.twitter.com/${author}`}>{name}</a> ©{' '}
        {new Date().getFullYear()}
      </section>
      <nav className={'site-footer-nav'}>
        <Link to="/">Latest Posts</Link>
      </nav>
    </div>
  </footer>
);

Footer.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
};

Footer.defaultProps = {
  name: `Sanā Habeeb`,
  author: `@SanaHabeeb4`,
};

export default Footer;
