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
				src: 'https://media.discordapp.net/attachments/820946778588708865/1172824949581418528/example1.gif?ex=6561b95a&is=654f445a&hm=c443d0ca89fda4b5a42dd6a5d7e9b143eca61f89be108dcd2a212ad2d29a3036&='
			}
		]
	}
];

export default MY_PROJECTS;
