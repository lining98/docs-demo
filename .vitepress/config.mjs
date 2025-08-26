import { defineConfig } from 'vitepress';
import { nav, sidebar } from './configs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: '/shj-docs/',
	title: 'My Docs',
	description: '',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav,
		sidebar,
		search: {
			provider: 'local',
		},
		markdown: {
			lineNumbers: true,
		},
		/* 右侧大纲配置 */
		outline: {
			level: 'deep',
			label: '本页目录',
		},

		docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},
		// socialLinks: [{ icon: 'github', link: 'https://github.com/lining98/docs-demo' }],
	},
});
