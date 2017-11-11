import React from "react";
import githubImage from "../images/github.svg";
import linkedinImage from "../images/linkedin.svg";
import mailImage from "../images/mail.svg";
import "../styles/flip-popup.css";

const FlipPopup = props => {
	//logic

	//return
	return (
		<div className="evo_c-expand-and-fold-out-popup-demo-wrapper">
			<ul className="evo_c-expand-and-fold-out-popup">
				<li
					className="evo_c-expand-and-fold-out-popup__popup-button"
					onTouchStart={function() {
						return false;
					}}
				>
					<p className="evo_c-expand-and-fold-out-popup__text-spacer">Contact</p>
					<div className="evo_c-expand-and-fold-out-popup__popup">
						<p className="evo_c-expand-and-fold-out-popup__button-text">Contact</p>
						<div className="evo_c-expand-and-fold-out-popup__popup-corner" />
						<div className="evo_c-expand-and-fold-out-popup__popup-text fold-popup-normal">
							<div className="contact-popup__icon">
								<a
									className="contact-popup__icon-link"
									href="mailto:sebastian.r.rb@gmail.com?Subject=Hey there"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img className="contact-popup__icon-image" src={mailImage} alt="mail" />
								</a>
								<div className="contact-icon-popup">Email</div>
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
								<div className="contact-icon-popup">GitHub</div>
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
								<div className="contact-icon-popup">LinkedIn</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default FlipPopup;
