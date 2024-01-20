
const Footer = () => {
    return (
      <div className="footer">
        <div className="heading">
          <h2>
            <img src="/src/assets/logo.png"  />
          </h2>
        </div>
        <div className="content">
          <div className="services">
            <h4>Services</h4>
            <p><a href="#">App development</a></p>
            <p><a href="#">Web development</a></p>
            <p><a href="#">DevOps</a></p>
            <p><a href="#">Web designing</a></p>
          </div>
          <div className="social-media">
            <h4>Social</h4>
            <p>
              <a href="#"><i className="fab fa-linkedin"></i> Linkedin</a>
            </p>
            <p>
              <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
            </p>
            <p>
              <a href="https://github.com/farazc60"><i className="github"></i> Github</a>
            </p>
            <p>
              <a href="https://www.facebook.com/codewithfaraz"><i className="facebook"></i> Facebook</a>
            </p>
            <p>
              <a href="https://www.instagram.com/codewithfaraz"><i className="instagram"></i> Instagram</a>
            </p>
          </div>
          <div className="links">
            <h4>Quick links</h4>
            <p><a href="#">Home</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Blogs</a></p>
            <p><a href="#">Contact</a></p>
          </div>
          <div className="details">
            <h4 className="address">Address</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Cupiditate, qui!
            </p>
            <h4 className="mobile">Mobile</h4>
            <p><a href="#">+91-12225*****</a></p>
            <h4 className="mail">Email</h4>
            <p><a href="#">xiddc60@gmail.com</a></p>
          </div>
        </div>
        <footer>
          <hr />
          © 2024 codewithXidd.
        </footer>
  
      </div>
    )
  }
  
  export default Footer

  