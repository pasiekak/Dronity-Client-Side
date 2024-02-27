import "./styles/footer.css";
import LogoSVG from "../../../../../../../../shared/assets/media/svg/LogoSVG/LogoSVG";

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <LogoSVG className="logo"/>
            </div>
            <div className="footer-info">
                <p>Autor: Krzysztof Pasieka</p>
                <p>Email: krzysztof.pasieka00@gmail.com</p>
            </div>
            <div className="footer-social">
                <a href="https://github.com/pasiekak" target="_blank">GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;
