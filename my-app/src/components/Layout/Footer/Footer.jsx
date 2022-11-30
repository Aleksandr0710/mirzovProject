import "./Footer.css";
import Link from "../../Link/Link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container wrapper">
        <div className="footer__info">
          <span>
            <b> © ООО «<span className="footer__subtitle">Mirzov</span>Market» 2018-2022. </b>
          </span>
          <span>Для уточнения информации звоните по номеру {""}
            <Link link={{ className: "link", href: "tel:79000000000", text: "+7 900 000 0000" }} />
          </span>
          <span>
            а предложения по сотрудничеству отправляйте на почту {" "}
            <Link link={{ className: "link", href: "mailto:partner@mymarket.com", text: "partner@mymarket.com" }} />
          </span>
        </div>
        <Link link={{ className: "link", href: "#", text: "в начало страницы" }} />
      </div>
    </footer >
  );
};

export default Footer;
