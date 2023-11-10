import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'game-development-programmer',
		company: 'WaCe Studios',
		description: 'Full-stack development for a couple of simulator games and system maintenance.',
		contract: ContractType.Freelance,
		type: 'Game Development',
		location: 'Remote',
		period: { from: new Date(2020, 5, 1), to: new Date(2020, 6, 1) },
		skills: getSkills('lua'),
		name: 'Lead Programmer',
		color: '#ffffff',
		links: ['https://www.roblox.com/groups/4603811/WaCe-Studios#!/about'],
		logo: Assets.Wace,
		shortDescription: ''
	},

	{
		slug: 'game-development-contractor',
		company: 'Jamies Restaurant Franchise',
		description: 'Hired as a contractor to re-write some of the old codebase along with making new systems.',
		contract: ContractType.Freelance,
		type: 'Game Development',
		location: 'Remote',
		period: { from: new Date(2021, 1, 1), to: new Date(2021, 2, 1) },
		skills: getSkills('lua', 'ui'),
		name: 'Contractor',
		color: '#ffffff',
		links: [],
		logo: Assets.Wace,
		shortDescription: ''
	},
];

export default MY_EXPERIENCES;
