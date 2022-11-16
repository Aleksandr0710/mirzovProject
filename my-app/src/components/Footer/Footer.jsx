import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container wrapper">
        <div className="footer__info">
          <span>
            {" "}
            <b>
              {" "}
              © ООО «<span className="footer__subtitle">Mirzov</span>Market»
              2018-2022.
            </b>
          </span>
          <span>
            {" "}
            Для уточнения информации звоните по номеру{" "}
            <a className="footer__tel a" href="tel:79000000000">
              +7 900 000 0000
            </a>
            ,
          </span>
          <span>
            {" "}
            а предложения по сотрудничеству отправляйте на почту
            <a className="footer__mailto a" href="mailto:partner@mymarket.com">
              partner@mymarket.com
            </a>
          </span>
        </div>
        <a className="footer__anchor a" href="#">
          {" "}
          в начало страницы{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
