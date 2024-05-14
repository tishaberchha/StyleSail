import React from "react";
import "./TrustPage.css";
import img from "../Images/trust.png";
import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { FaLinkSlash } from "react-icons/fa6";
import ScrollToTop from "../ScrollTop/Scrolltop";
const TrustPage = () => {
  return (
    <div>
      <ScrollToTop/>
      <div className="trustpage-container">
        <div className="main-trustpage">
          <div className="img-trustpage">
            <img src={img} alt="" />
          </div>
          <div className="main-trustcontent">
            <h1 style={{ fontSize: "40px" }}>
              BEWARE OF FRAUDULENT CALLS, &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;OFFERS AND PAYMENTS.
            </h1>
            <p style={{ display: "flex" }}>
              <IoMdArrowForward style={{ width: "100px" }} />
              &nbsp; At Stylesail, we understand the paramount importance of
              safeguarding your personal information and ensuring secure
              transactions. Rest assured, we have implemented stringent security
              measures to protect your data and provide you with a safe shopping
              experience.
            </p>

            <p style={{ display: "flex" }}>
              <IoMdArrowForward style={{ width: "100px" }} /> &nbsp; Our
              dedicated team of security experts conducts regular audits and
              assessments to identify and mitigate any potential vulnerabilities
              in our systems. We continuously monitor for security threats and
              take proactive measures to keep our platform secure.
            </p>
            <p style={{ display: "flex" }}>
              <IoMdArrowForward style={{ width: "100px" }} /> &nbsp; To prevent
              unauthorized access to your account, we offer multi-factor
              authentication options. By enabling features such as two-factor
              authentication, you can add an extra layer of security to your
              Stylesail account, further safeguarding your personal information.
            </p>
            <p style={{ display: "flex" }}>
              <IoMdArrowForward style={{ width: "100px" }} /> &nbsp; Our
              security systems are monitored round-the-clock to promptly detect
              and respond to any suspicious activity or attempted breaches. We
              employ advanced monitoring tools and employ trained professionals
              to ensure the continuous protection of our platform and your data.
            </p>
          </div>
          <div className="security">
            <p>
              Here are a few Simple Steps You Can Take to &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Guard Against Online Scams:
            </p>
            <div className="items-trust">
              <MdOutlineSecurity
                style={{
                  color: "pink",
                  fontSize: "100px",
                  paddingRight: "5px",
                }}
              />
              <h5>
                Use strong, unique passwords for your shopping website
                account.Avoid using easily guessable information such as your
                name or birthdate.
              </h5>
            </div>
            <div className="items-trust">
              <FaLinkSlash style={{ color: "pink", fontSize: "80px" }} />
              <h5>
                Stick to reliable e-commerce platforms to avoid the risks
                associated wsafeith fraudulent websites and keep your personal
                information safe.
              </h5>
            </div>
            <div className="items-trust">
              <MdOutlineVerified style={{ color: "pink", fontSize: "60px" }} />
              <h5>
                Always make your transactions through the official StyleSail
                Website.
              </h5>
            </div>
            <h4>
              If you Receive Any Suspicios calls or come across questionable
              offers, please report them to us immediately. We Will Take Scrict
              Action To Fraudulent Activities.
            </h4>
            <h3 style={{ fontSize: "28px" }}>
              Thank you for being the part of the &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; StyleSail Family.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustPage;
