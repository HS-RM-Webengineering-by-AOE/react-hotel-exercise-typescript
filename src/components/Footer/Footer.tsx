import Styles from "./Footer.module.css";
import { Container } from "../Container/Container";

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <div className={Styles.footer}>
      <Container className={Styles.flex}>
        <div className={Styles.element}>
          <p>We hope that will you enjoy your stay at our hotel!</p>
          <p>If you have any questions or concerns just give us a call</p>
          <p>0172 345689</p>
          <p>
            or <a href="/contact">write us</a>
          </p>
        </div>
        <div className={`${Styles.element} ${Styles.copyright}`}>
          Copyright {year} LovelyHotel.com
        </div>
      </Container>
    </div>
  );
};
