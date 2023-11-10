import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'lua',
		color: 'blue',
		description:
			'I possess a comprehensive Lua proficiency, encompassing both the traditional Lua and its Roblox variant, Luau. With approximately three years of hands-on experience, I demonstrate adeptness in utilizing both versions effectively. This expertise underscores my ability to navigate diverse Lua development scenarios, ensuring a nuanced and skilled approach. My background serves as a testament to a thorough understanding and practical application of Lua, enhancing my capacity to contribute meaningfully to varied projects.',
		logo: Assets.Lua,
		name: 'Lua'
	}),

	s({
		slug: 'ui',
		color: 'gray',
		description:
			'I boast a year of dedicated experience in Roblox user interface design, witnessing notable progress in my endeavors. Proficient in industry-standard software such as Adobe Photoshop, Paint.NET, and Figma, I employ these tools to meticulously craft high-quality user interfaces and experiences. This commitment to utilizing advanced design platforms underscores my dedication to delivering impactful and visually compelling solutions within the dynamic realm of Roblox.',
		logo: Assets.UI,
		name: 'User Interface'
	}),

	s({
		slug: 'translation',
		color: 'gray',
		description:
			'Drawing upon my robust history on the Roblox platform as a Romanian translator, I have collaborated with various agencies and independently, establishing myself as a premier professional. Renowned for delivering unparalleled quality, competitive pricing, and efficient turnaround times, I am recognized as one of the foremost Romanian translators. My portfolio includes collaboration on esteemed games such as Doomspire Brickbattle, Vehicle Simulator, Vehicle Tycoon, Dealership Tycoon, Horrific Housing, among others, underscoring my diverse expertise in the gaming domain.',
		logo: Assets.Translation,
		name: 'Translation'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));



