// import Link from 'next/link'
import React from "react";
import { FooterStyled } from "../../../styled/Footer";

function Footer() {
  const location = `https://www.google.com/maps/place/Invento+Coworking+Office+Dwarka/@28.5963168,77.0393278,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1b41ab2b4b27:0xdf70632e3b3ccc41!8m2!3d28.5963121!4d77.0415165`;
  return (
    <FooterStyled>
      <div className="col">
        <div>
          <ul className="footer-main-links">
            <li>Properties</li>
            <li>How it Works</li>
            <li>Pricing</li>
            <li>FAQ's</li>
          </ul>
          <ul className="footer-main-links">
            <li>Privacy Policy</li>
            <li className={"mr-t"}>Terms and Conditions</li>
          </ul>
        </div>
        <div className="col mg-r">
          <ul>
            <li>
              <a href={location} target="_blank" rel="noreferrer">
                <div>
                  <div className={"footer-links"}>
                    <img
                      src="/assests/components/footer/location.svg"
                      alt={"location"}
                    />
                    <a href={location} target="_blank" rel="noreferrer">
                      <a href={location} target="_blank" rel="noreferrer">
                        Where to find us
                      </a>
                    </a>
                  </div>
                  <p className={"footer-links-mg"}>
                    ABC Corporation Pvt Ltd, India
                  </p>
                </div>
              </a>
            </li>
            <li>
              <div>
                <div className={"footer-links"} id={"desktop-linkedin"}>
                  <img
                    src="/assests/components/footer/linkedin-logo.png"
                    alt={"linkedin"}
                  />
                  <a href="/blank">Linkedin</a>
                  <img
                    src="assests/components/footer/footer-right-arrow.svg"
                    alt={"right-arrow"}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="col">
        <ul></ul>
      </div> */}
      <div className="col">
        <ul className="mg-r">
          <li>
            <div className={"footer-links"} id={"mobile-linkedin"}>
              <img
                src="assests/components/footer/linkedin.svg"
                alt={"linkedin"}
              />
              <a href="/blank">Linkedin</a>
              <img
                src="assests/components/footer/footer-right-arrow.svg"
                alt={"right-arrow"}
              />
            </div>
          </li>
          <li>
            <a href="tel:+919310478032">
              <div>
                <div className={"footer-links"}>
                  <img
                    src="assests/components/footer/phone.svg"
                    alt={"phone"}
                  />
                  <a href="tel:+919310478032">
                    <a href="tel:+919310478032">Call Us</a>
                  </a>
                  <img
                    src="assests/components/footer/footer-right-arrow.svg"
                    alt={"right-arrow"}
                  />
                </div>
                <p className={"footer-links-mg"}>+91 0000000000</p>
              </div>
            </a>
          </li>
          <li>
            <a href="mailto:info@trezo.com">
              <div>
                <div className={"footer-links"}>
                  <img
                    src="assests/components/footer/email.svg"
                    alt={"email"}
                  />
                  <a href="mailto:info@trezo.com">Email Us</a>
                  <img
                    src="assests/components/footer/footer-right-arrow.svg"
                    alt={"right-arrow"}
                  />
                </div>
                <p className={"footer-links-mg"}>info@abc.in</p>
              </div>
            </a>
          </li>
          <li>
            <div className={"footer-links"}>
              <img
                src="assests/components/footer/whatsapp.svg"
                alt={"whatsapp"}
              />
              <a href="whatsapp://send?text=Hi,Trezo Team, would you like to discuss ? &phone=+919310478032">
                Whatsapp Us
              </a>
              <img
                src="assests/components/footer/footer-right-arrow.svg"
                alt={"right-arrow"}
              />
            </div>
          </li>
        </ul>
      </div>

      <div className="about-trezo">
        <ul>
          <li>
            <p>
              Trezo.in is a website operated by Theek Property Management
              Private Limited (“Theek”) and by accessing the website and any
              pages thereof, you agree to be bound by its terms of service and
              privacy policy. Theek does not prima facie endorse or promote any
              of the opportunities that appear on this website nor make any
              recommendations regarding same to any Investor. Prospective
              investors are not to construe anything on the website as
              investment, business, legal or tax advice and the content
              contained herein does not constitute an offer by Theek to sell
              securities. Any information made available from our website or
              links to websites, do not represent a solicitation of an offer to
              buy or sell any property. It also does not constitute an offer to
              provide investment advice, service or assistance on particular
              investment or transaction. Direct and indirect purchase of real
              property involves significant risk and investments may lose value
              and are not insured by any Governmental Agency nor are they
              guaranteed by Theek. It is the responsibility of the recipient to
              verify the integrity and authenticity of the information made
              available. Any historical returns, expected returns, or
              probability projections may not reflect actual future performance.
              Investors must be able to afford to bear losses on investment
              made.
            </p>
          </li>
          <li>
            <p> © Theek Property Management Technologies Pvt Ltd, 2020. </p>
          </li>
          <li className={"flex"}>
            <div className={"love-container"}>
              <a
                href={"https://farziengineer.com/"}
                rel="noreferrer"
                target={"_blank"}
              >
                By Bharat Dussa
              </a>
            </div>
          </li>
        </ul>
      </div>
    </FooterStyled>
  );
}

export default Footer;
