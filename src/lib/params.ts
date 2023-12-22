import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = '';

export const NavBar = {
	home: 'Home',
	personal: 'Examples',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'bleeod',
	lastName: '',
	description:
		'Hello, Im bleeod, an experienced full-stack game programmer, skilled Romanian translator, and proficient UI/UX designer. With four years of experience on the Roblox platform, I have developed a well-rounded background. As a professional, I bring tons of experience in game development, linguistic proficiency in Romanian translation, and a keen ability to design visually appealing and intuitive user interfaces and experiences. (MY DISCORD IS: @vetemonts)',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/bleeod' },
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/dontsellurself'
		},
		{
			platform: Platform.Email,
			link: 'linkodavid.bidness@gmail.com'
		},
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Examples',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
