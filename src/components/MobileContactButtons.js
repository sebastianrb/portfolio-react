import React from "react";
import githubImage from "../images/github-orange.svg";
import linkedinImage from "../images/linkedin-orange.svg";
import mailImage from "../images/mail-orange.svg";
import "../styles/flip-popup.css";

const MobileContactButtons = props => {
	//logic

	//return
	return (
		<div className="header__mobile-contact-buttons">
			<div className="contact-popup__icon">
				<a
					className="contact-popup__icon-link"
					href="mailto:sebastian.r.rb@gmail.com?Subject=Hey there"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="contact-popup__icon-image" src={mailImage} alt="mail" />
				</a>
			</div>
			<div className="contact-popup__icon">
				<a
					className="contact-popup__icon-link"
					href="https://github.com/sebastianrb"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="contact-popup__icon-image" src={githubImage} alt="github" />
				</a>
			</div>
			<div className="contact-popup__icon">
				<a
					className="contact-popup__icon-link"
					href="https://www.linkedin.com/in/sebastian-ramirez-brunner-7544b08a?trk=hp-identity-name"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="contact-popup__icon-image" src={linkedinImage} alt="linkedin" />
				</a>
			</div>
		</div>
	);
};

export default MobileContactButtons;
