import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'game-development-contractor',
		company: 'Jamies Restaurant Franchise',
		description: 'Hired as a contractor to rewrite some of the old codebase along with making new systems.',
		contract: ContractType.Contract,
		type: 'Game Development',
		location: 'Remote',
		period: { from: new Date(2021, 1, 1), to: new Date(2021, 2, 1) },
		skills: getSkills('lua', 'ui'),
		name: 'Contractor',
		color: '#ffffff',
		links: [{ to: 'https://www.roblox.com/groups/3512825/Paradi#!/about', label: 'Roblox Group' }],
		logo: Assets.Jamies,
		shortDescription: ''
	},

	{
		slug: 'game-development-director',
		company: 'Seda®',
		description: 'Originally hired as a contractor and ended up sticking around for longer and maintaining games, attendind interview/training sessions, moderating, etc.',
		contract: ContractType.SelfEmployed,
		type: 'Game Development',
		location: 'Remote',
		period: { from: new Date(2020, 7, 1), to: new Date(2020, 11, 1) },
		skills: getSkills('lua', 'ui'),
		name: 'Director of Development',
		color: '#ffffff',
		links: [{ to: 'https://www.roblox.com/groups/4178207/Seda#!/about', label: 'Roblox Group' }, { to: 'https://www.roblox.com/games/2069515776/Seda-Hotel', label: 'Main Roblox Game' }],
		logo: Assets.Seda,
		shortDescription: ''
	},

	{
		slug: 'game-development-programmer',
		company: 'WaCe Studios',
		description: 'Full-stack development for a couple of simulator games and system maintenance.',
		contract: ContractType.PartTime,
		type: 'Game Development',
		location: 'Remote',
		period: { from: new Date(2020, 5, 1), to: new Date(2020, 6, 1) },
		skills: getSkills('lua'),
		name: 'Lead Programmer',
		color: '#ffffff',
		links: [{ to: 'https://www.roblox.com/groups/4603811/WaCe-Studios#!/about', label: 'Roblox Group' }],
		logo: Assets.Wace,
		shortDescription: ''
	},
];

export default MY_EXPERIENCES;
