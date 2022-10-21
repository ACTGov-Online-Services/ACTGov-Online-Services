import { createL21 } from "../../l2-logos/l21-logo-primary/component";

export const createF11 = () => {

  const logo = createL21({
    colour: "white",
    type: "horizontal",
    alt: "ACT Government",
  });

  return `
<footer  class="act-footer">
  <div class="act-flex act-flex-violet">
    <div class="act-flex__container">
      <div class="act-flex__grid">

        <div class="act-flex__row">
          <div class="act-col act-col-sm-3">
            <div class="act-box">
              <div class="act-footer-nav">
              <h4>Bunburung</h4>
              <ul>
                <li>Galu</li>
                <li>Bimbiang</li>
                <li>Dyindan</li>
                <li>Bunduluk</li>
                <li>Bural</li>
              </ul>
              </div>
            </div>
          </div>
          <div class="act-col act-col-sm-3">
            <div class="act-box">
              <div class="act-footer-nav">
                <h4>Wirria</h4>
                <ul>
                  <li>Dulwa</li>
                  <li>Guginya</li>
                  <li>Budyan</li>
                  <li>Dimbiang</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="act-col act-col-sm-3">
            <div class="act-box">
              <div class="act-footer-nav">
                <h4>Gurubun</h4>
                <ul>
                  <li>Daramoolen</li>
                  <li>Yerradhang</li>
                  <li>Gummiuk</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="act-col act-col-sm-3">
            <div class="act-box">
              <div class="act-footer-nav">
                <h4>Karrugang</h4>
                <ul>
                  <li>Gamburra</li>
                  <li>Yumba<i class="fa-solid fa-arrow-up-right-from-square"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="act-flex__row">
          <div class="act-col act-col-sm-12">
            <div class="act-box">
              <div class="act-footer-main">
                <div class="act-footer-main__container">
                  <div class="act-footer-main__content">
                    <!--<div class="act-footer-main__logos">
                    +logo+
                    </div>-->
                  </div>
                  <div class="act-footer-main__content">
                    <div class="act-footer-main__socials">
                      <h5>Follow us</h5>
                      <a class="act-footer-main__socials__icon" href="#" target="_blank" title="Facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                      <a class="act-footer-main__socials__icon" href="#" target="_blank" title="Twitter">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                      <a class="act-footer-main__socials__icon" href="#" target="_blank" title="Linkedin">
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a class="act-footer-main__socials__icon" href="#" target="_blank" title="YouTube">
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</footer>
`;
};