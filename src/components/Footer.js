import React from 'react';
import './Footer.css'

function Footer() {
  return(
    <div className='footer' id='footer'>
    <footer>
      <div class="footer-content">
          <h3>Lawrence Salinas</h3>
          <h4>New York, NY</h4>
          <br></br>
          <h4>Lawrencesalinas7@gmail.com</h4>
          <ul class="socials">
              <li><a href="lawrencesalinas@gmail.com"  target="_blank"><i class="fa fa-google-plus"></i></a></li>
              <li><a href="https://github.com/lawrencesalinas"  target="_blank"><i class="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/lawrencesalinas/" target="_blank"  ><i class="fa fa-linkedin-square"></i></a></li>
          </ul>
      </div>
      <div class="footer-bottom">np
          <p>copyright &copy;2022 </p>
      </div>
  </footer>
</div>
  )
}

export default Footer;
