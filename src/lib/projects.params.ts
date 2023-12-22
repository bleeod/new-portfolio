import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'roblox-programming-example-gun',
		color: '#002db3',
		description:
			'A quite complicated gun system, similar to games like Criminals Vs Swat and Criminality, thats easy to edit and add-on new guns, abilities, etc.',
		shortDescription:
			'A quite complicated gun system, similar to games like Criminals Vs Swat and Criminality, thats easy to edit and add-on new guns, abilities, etc.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'Roblox Game' }],
		logo: Assets.Lua,
		name: 'Modular Gun System',
		period: {
			from: new Date(2022, 5, 20)
		},
		skills: getSkills('lua', 'ui'),
		type: '',
		screenshots: [
			{
				label: 'screen 1',
				src: Assets.GunSystem_GIF
			}
		]
	}
];

export default MY_PROJECTS;
