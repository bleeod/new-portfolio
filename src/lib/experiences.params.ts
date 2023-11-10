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
		links: [],
		logo: Assets.Wace,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
