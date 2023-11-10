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
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
