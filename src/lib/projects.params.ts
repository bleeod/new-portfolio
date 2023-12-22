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
		links: [{ to: 'https://github.com/bleeod', label: 'Click Me' }],
		logo: Assets.Lua,
		name: 'Modular Gun System',
		period: {
			from: new Date(2022, 5, 20)
		},
		skills: getSkills('lua', 'ui'),
		type: '',
		screenshots: [
			{
				label: 'ON-SITE',
				src: Assets.GunSystem_GIF
			},

			{
				label: 'URL',
				src: "https://media.discordapp.net/attachments/831547738940112927/1187702167142944839/GunSystem_GIF.gif?ex=6597d8d7&is=658563d7&hm=5ae813d1ea01cd4878135ebfd8de96fef60b6f0272687c93546799f4c08f454a&="
			}
		]
	},

	{
		slug: 'roblox-programming-example-tycoon',
		color: '#002db3',
		description:
			'A fully modular sandbox tycoon/housing system similar to games like Restaurant Tycoon 2 or Miners Haven.',
		shortDescription:
			'A fully modular sandbox tycoon/housing system similar to games like Restaurant Tycoon 2 or Miners Haven.',
		links: [{ to: 'https://github.com/bleeod', label: 'Click Me' }],
		logo: Assets.Lua,
		name: 'Sandbox Tycoon System',
		period: {
			from: new Date(2022, 5, 20)
		},
		skills: getSkills('lua'),
		type: '',
		screenshots: [
			{
				label: 'ON-SITE',
				src: Assets.SandboxTycoon_GIF
			},

			{
				label: 'URL',
				src: "https://media.discordapp.net/attachments/831547738940112927/1187702186344456192/SandboxTycoon_GIF.gif?ex=6597d8db&is=658563db&hm=6f5f96dcd5b781f30f94ebf59598ed970b9220dc39d185f5cb5bd1c9827ce34b&=&width=1264&height=676"
			}
		]
	}
];

export default MY_PROJECTS;
