import './DefaultFooter.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__copyright">
        <span>© {year} HRNet</span>
      </div>
    </footer>
  );
};

export default Footer;
