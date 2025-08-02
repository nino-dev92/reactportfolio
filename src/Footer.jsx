import "./CSS/footer.css";

const Footer = () => {
  const date = new Date();

  return (
    <div>
      <footer className="footer">
        <p>Copyright &copy; Richard Nneji {date.getFullYear()}</p>
        <div className="footercontact" id="contact">
          <div>
            {" "}
            <h3 style={{ textAlign: "center" }}>CONTACT</h3>
          </div>
          <div>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/share/16BJguonrD/?mibextid=wwXIfr"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/italiannino_92?igsh=d2Y3azYzNzMyanJy&utm_source=qr"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="http://www.linkedin.com/in/richard-nneji-30"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:nnejirichard@yahoo.com" target="_blank">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
