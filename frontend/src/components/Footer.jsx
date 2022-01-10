import React from "react";
const Footer = () => {
    return (
      <>
        <footer class="bg-dark text-center text-lg-start">
          <div class="container">
            <a class="linkImage" href="#">
              <img
                src="https://www.sofka.com.co/wp-content/uploads/2021/02/Group-35.png"
                alt=""
                width="100"
                height="24"
                class="d-inline-block align-text-top"
              />
              <br />
              © Sofka 2022.
            </a>
          </div>

          <div class="enlaces">
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          
        </footer>
      </>
    );
  };
  
  export default Footer;