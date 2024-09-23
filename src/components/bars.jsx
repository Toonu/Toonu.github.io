import iconMail from '../img/mail.svg';
import iconLinkedIn from '../img/linkedIn.svg';
import iconGitHub from '../img/gitHub.svg';
import iconLogo from '../img/logo.svg';
import * as Element from './elements.jsx';
import Headline from './headline.jsx';

export function Header() {
	return (
		<nav className="flex flex-row justify-center items-center bg-black w-full min-h-10">
			<div className="flex gap-5 min-h-10 h-10 items-center mr-auto">
				<Element.ImageLink
					link="https://www.toonudesign.tech/"
					image={iconLogo}
					alt="Logo"></Element.ImageLink>
				<Headline href="https://www.toonudesign.tech/">Toonu Design</Headline>
			</div>
			<div className="flex gap-5 min-h-10 h-10 items-center ml-auto">
				<Element.ScrollButton scrollToRef={{}}>
					Graphics
				</Element.ScrollButton>
				<Element.ScrollButton scrollToRef={{}}>Apps</Element.ScrollButton>
				<Element.ScrollButton scrollToRef={{}}>
					Get in Touch
				</Element.ScrollButton>
			</div>
		</nav>
	);
}

export function Footer() {
	return (
		<div className="z-50 flex items-center justify-center text-sm fixed bottom-0 left-0 bg-transgray w-full h-6 min-h-6">
			<div style={{ flexBasis: '40vw', display: 'flex' }}></div>
			<div
				className="flex gap-5 justify-center items-center min-h-6 h-6"
				style={{ flexBasis: '20vw' }}>
				<Element.ImageLink
					link="mailto:Toonu4@icloud.com"
					image={iconLinkedIn}
					editStyle={{ flexBasis: '4vw' }}
					alt="LinkedIn"></Element.ImageLink>
				<Element.ImageLink
					link="mailto:Toonu4@icloud.com"
					image={iconMail}
					editStyle={{ flexBasis: '4vw' }}
					alt="Mail"></Element.ImageLink>
				<Element.ImageLink
					link="mailto:Toonu4@icloud.com"
					image={iconGitHub}
					editStyle={{ flexBasis: '4vw' }}
					alt="GitHub"></Element.ImageLink>
			</div>
			<div
				className="flex gap-5 justify-end items-center min-h-6 h-6 text-xxxs md:text-xxs lg:text-xs"
				style={{
					flexBasis: '40vw',
				}}>
				Copyright © 2024 Toonu Design | All Rights Reserved
				<Element.ImageLink
					link="https://www.toonudesign.tech/"
					image={iconLogo}
					alt="Logo"></Element.ImageLink>
			</div>
		</div>
	);
}

export function Spacer() {
	return (
		<div className="flex justify-center items-center w-full h-2">
			<div className="h-4/5 w-fit border-b border-white border-solid" />
		</div>
	);
}
