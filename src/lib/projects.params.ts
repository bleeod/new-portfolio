import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'roblox-programming-example-gun',
		color: '#990000',
		description:
			'A quite complicated gun system, similar to games like Criminals Vs Swat and Criminality, thats easy to edit and add-on new guns, abilities, etc.',
		shortDescription:
			'A quite complicated gun system, similar to games like Criminals Vs Swat and Criminality, thats easy to edit and add-on new guns, abilities, etc.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'Roblox Game' }],
		logo: Assets.Lua,
		name: 'Modular Gun System',
		period: {
			from: new Date()
		},
		skills: getSkills('lua', 'ui'),
		type: '',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export default MY_PROJECTS;
