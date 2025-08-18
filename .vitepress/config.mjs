import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: '/shj-docs/',
	title: 'My Docs',
	description: '',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/table/index' },
		],

		sidebar: [
			{
				text: 'table',
				items: [{ text: '表格', link: '/table/index' }],
			},
			{
				text: 'model',
				items: [{ text: '弹窗', link: '/model/index' }],
			},
		],
		search: {
			provider: 'local',
		},
		socialLinks: [{ icon: 'github', link: 'https://github.com/lining98/docs-demo' }],
	},
});
