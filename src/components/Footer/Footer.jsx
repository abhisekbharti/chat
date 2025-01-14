import { Box } from "@mui/material";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <Box>
        <h3>COMPANY</h3>
        <li>About us</li>
        <li>Talent</li>
        <li>Technology</li>
        <li>Teams</li>
      </Box>
      <Box>
        <h3>PRODUCTS</h3>
        <li>Chat</li>
        <li>Teams</li>
        <li>Professinoal</li>
        <li>Press</li>
      </Box>
      <Box>
        <h3>NETWORK</h3>
        <li>Work Here</li>
        <li>Life & Arts</li>
        <li>Cookie Policy</li>
        <li>Teams</li>
        <li>Business</li>
      </Box>
      <Box>
        <h3>OVERVIEW</h3>
        <li>Science</li>
        <li>Api</li>
        <li>Api</li>
        <li>blogn</li>
      </Box>
      <Box className={styles.icons}>
        <h3>CONTACT</h3>
        <a href="www.gmail.com" alt="gmail">
          gmail
        </a>
        <a href="www.github.com" alt="gmail">
          github
        </a>
        <a href="www.linkdin.com" alt="gmail">
          linkdin
        </a>
      </Box>
    </div>
  );
}

export default Footer;
