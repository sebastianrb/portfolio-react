export const projects = [
	{
		id: 0,
		name: "Front-end Portfolio",
		shortDescription:
			"The project you are currently viewing; it's a showcase of my front-end web development work. Click here to learn more about it",
		description:
			"This portfolio is built with React and pulls in JSON data about my projects to dynamically construct the UI.",
		technologies: "React, ES6, Webpack, Vanilla Javascript, Ajax, Sass, APIs",
		technologyObjects: [
			{
				name: "React",
				tag: "react"
			},
			{
				name: "ES6",
				tag: "es6"
			},
			{
				name: "Webpack",
				tag: "webpack"
			},
			{
				name: "Vanilla JavaScript",
				tag: "js"
			},
			{
				name: "Sass",
				tag: "sass"
			}
		],
		demoLink: "https://sebastianrb.github.io/portfolio/",
		githubLink: "https://github.com/sebastianrb/portfolio-react",
		image: "https://image.ibb.co/cumr56/Screen_Shot_2017_11_20_at_9_35_25_PM.png"
	},
	{
		id: 1,
		name: "Skratch Application",
		shortDescription: "A web application for the Skratch Initial Coin Offering",
		description:
			"This application teaches visitors about Skratch, a new cryptocurrency geared geared towards the music industry. The site is built with React. Users can enter and submit personal data, which is then saved to a cloud-based content management system called Contentful via front-end APIs.",
		technologies:
			"React, Isomorphic/Server-side Rendering, ES6, Webpack, Vanilla Javascript, Ajax, Sass, APIs, Gatsby.js",
		technologyObjects: [
			{
				name: "React",
				tag: "react"
			},
			{
				name: "ES6",
				tag: "es6"
			},
			{
				name: "Webpack",
				tag: "webpack"
			},
			{
				name: "Vanilla JavaScript",
				tag: "js"
			},
			{
				name: "Sass",
				tag: "sass"
			},
			{
				name: "Gatsby.js",
				tag: "gatsby"
			}
		],
		demoLink: "https://www.undergroundhiphop.com/skratch/",
		githubLink: "",
		image: "https://image.ibb.co/mEOuVw/skratch.png"
	},
	{
		id: 2,
		name: "Student Profiles",
		shortDescription: "A student profile site built with vanilla Javascript",
		description:
			"I was a lead developer on the team that built a student profile site for Bov Academy, a school for web development. The site contains profiles for the school's student body and implements multimedia and various animation effects via vanilla JavaScript and CSS.",
		technologies: "Vanilla Javascript, CSS, Handlebars Templating, Grunt",
		technologyObjects: [
			{
				name: "Vanilla JavaScript",
				tag: "js"
			},
			{
				name: "CSS",
				tag: "sass"
			},
			{
				name: "Handlebars",
				tag: "handlebarsjs"
			},
			{
				name: "Grunt",
				tag: "grunt"
			}
		],
		demoLink: "https://students.bovacademy.com/",
		githubLink: "",
		image: "https://image.ibb.co/mdC4Vw/bov.png"
	},
	{
		id: 3,
		name: "Weather Application",
		shortDescription: "A weather forecasting and clothing recommendation app utilizing Redux",
		description:
			"This weather app allows the user to search for a city and then calls two weather APIs to provide weather forecasting and clothing recommendations. The app is built with React and Redux.",
		technologies: "React, Redux, ES6, Webpack, Vanilla Javascript, Ajax, Sass, APIs",
		technologyObjects: [
			{
				name: "React",
				tag: "react"
			},
			{
				name: "Redux",
				tag: "redux"
			},
			{
				name: "ES6",
				tag: "es6"
			},
			{
				name: "Webpack",
				tag: "webpack"
			},
			{
				name: "Vanilla JavaScript",
				tag: "js"
			},
			{
				name: "Sass",
				tag: "sass"
			}
		],
		demoLink: "http://sebastian-react-weather-app.surge.sh/",
		githubLink: "https://github.com/sebastianrb/react-redux-weather-app",
		image: "https://image.ibb.co/cHj7iG/weather.png"
	},
	{
		id: 4,
		name: "Photo Gallery",
		shortDescription: "Photo gallery showcasing my personal work and built with Vue.js",
		description:
			"I am an amateur photographer, and this photo gallery app features some of my work. The application is built using the Vue.js JavaScript framework.",
		technologies: "Vue.js, ES6, Sass",
		technologyObjects: [
			{
				name: "Vue",
				tag: "vue"
			},
			{
				name: "ES6",
				tag: "es6"
			},
			{
				name: "Sass",
				tag: "sass"
			}
		],
		demoLink: "https://sebastianrb.github.io/vue-photo-gallery/",
		githubLink: "https://github.com/sebastianrb/vue-photo-gallery",
		image: "https://image.ibb.co/gOo03G/gallery.png"
	},
	{
		id: 5,
		name: "Jigsaw Puzzle",
		shortDescription: "Jigsaw puzzle app built with vanilla Javascript",
		description:
			"This is a working, interactive jigsaw puzzle game. The user can ask for hints, reset the game as needed, and increase the difficulty. Be warned: the puzzle is fairly challenging, so pay close attention to the three available hints!",
		technologies: "Vanilla JavaScript, CSS",
		technologyObjects: [
			{
				name: "Vanilla Javascript",
				tag: "js"
			}
		],
		demoLink: "https://sebastianrb.github.io/jigsaw/",
		githubLink: "https://github.com/sebastianrb/jigsaw",
		image: "https://image.ibb.co/j3byqw/jigsaw.png"
	},
	{
		id: 6,
		name: "Developer Profile",
		shortDescription: "A profile site about me",
		description:
			"The developer profile is meant to help visitors get to know me both professionally and personally. The site contains a short bio as well as pictures and other information about my life and interests. It is built with vanilla Javascript and jQuery.",
		technologies: "Vanilla Javascript, jQuery Sass, Gulp",
		technologyObjects: [
			{
				name: "Vanilla Javascript",
				tag: "js"
			},
			{
				name: "jQuery",
				tag: "jquery"
			},
			{
				name: "Sass",
				tag: "sass"
			},
			{
				name: "Gulp",
				tag: "gulp"
			}
		],
		demoLink: "https://sebastianrb.github.io/developer-profile/",
		githubLink: "https://github.com/sebastianrb/developer-profile",
		image: "https://image.ibb.co/cqe7iG/profile.png"
	},
	{
		id: 7,
		name: "Tic-Tac-Toe",
		shortDescription: "Game of tic-tac-toe built with jQuery",
		description:
			"This is a fully functional game of Tic-Tac-Toe. The computer opponent is moderately intelligent; it will win when possible and often try to block the player when the player is nearing victory. In addition, the computer will sometimes move first to keep things fair and interesting.",
		technologies: "jQuery, Sass",
		technologyObjects: [
			{
				name: "jQuery",
				tag: "jquery"
			},
			{
				name: "Sass",
				tag: "sass"
			}
		],
		demoLink: "https://sebastianrb.github.io/tic-tac-toe/",
		githubLink: "https://github.com/sebastianrb/tic-tac-toe",
		image: "https://image.ibb.co/nhxiAw/tictactoe.png"
	},
	{
		id: 8,
		name: "Random Fact Generator",
		shortDescription: "Generate random facts using AJAX",
		description:
			"This app uses Ajax to retrieve a random fact from an extrernal API and then displays it. The user can show a new random fact by pressing a button.",
		technologies: "jQuery, Ajax, CSS",
		technologyObjects: [
			{
				name: "jQuery",
				tag: "jquery"
			},
			{
				name: "CSS",
				tag: "css"
			}
		],
		demoLink: "https://sebastianrb.github.io/random-facts/",
		githubLink: "https://github.com/sebastianrb/random-facts",
		image: "https://image.ibb.co/bRoYOG/random.png"
	},
	{
		id: 9,
		name: "Handlebars Gallery",
		shortDescription: "Random photo gallery built with Handlebars.js",
		description:
			"This application is built using the Handlebars templating engine. It retrieves dozens of random images from the Unsplash API and then displays them in a grid.",
		technologies: "Vanilla Javascript, Handlebars Templating, CSS",
		technologyObjects: [
			{
				name: "Vanilla Javascript",
				tag: "js"
			},
			{
				name: "Handlebars",
				tag: "handlebarsjs"
			}
		],
		demoLink: "https://sebastianrb.github.io/handlebars-gallery/",
		githubLink: "https://github.com/sebastianrb/handlebars-gallery",
		image: "https://image.ibb.co/cnQrAw/handlebars.png"
	}
];

export const facts = [];
