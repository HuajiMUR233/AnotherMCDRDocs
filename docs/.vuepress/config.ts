module.exports = {
    head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'MCDReforegd\'s documentation',
            description: 'Welcome to MCDReforged’s documentation!',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'MCDReforged 文档',
            description: '欢迎来到 MCDReforged 文档！',
        },
    },
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.png',
        locales: {
            '/': {
                selectLanguageName: 'English',
                navbar: [
                    {
                        text: 'Documentation',
                        children: [
                            '/quick_start.md',
                            '/configure.md',
                            '/command.md',
                            '/permission.md',
                            '/preference.md',
                            '/plugin_dev/',
                            '/customize/',
                            '/migrate/'
                        ]
                    },
                ],
            },
            '/zh/': {
                selectLanguageName: '简体中文',
            },
        },
        repo: 'Fallen-Breath/MCDReforged',
    },

    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                    '/zh/': {
                        placeholder: '搜索',
                    },
                },
                isSearchable: (page) => page.path !== '/',
            },
        ],
    ],
}