const lost = require('lost')
const pxtorem = require('postcss-pxtorem')

const url = 'https://lumen.netlify.com'

module.exports = {
  siteMetadata: {
    url,
    siteUrl: url,
    title: '성장일기',
    subtitle:
      '여러 분야의 성장 일기',
    copyright: '© All rights reserved.',
    disqusShortname: '',
    menu: [
      {
        label: 'All',
        path: '/',
      },
      {
        label: 'About me',
        path: '/about/',
      },
      {
        label: 'Programming',
        path: '/pg/',
        sub_menu: [
          {
            label: 'Java',
            path: '/Java/',
          },
        ],
      },
      {
        label: 'Database',
        path: '/db/',
        sub_menu: [
          {
            label: 'DB',
            path: '/Db/',
          },
        ],
      },
      {
        label: 'Computer Science',
        path: '/sc/',
        sub_menu: [
          {
            label: '자료구조 & 알고리즘',
            path: '/Algorithm/',
          },
        ],
      },
      {
        label: 'ETC',
        path: '/ETC/',
        sub_menu: [
          {
            label: 'IT용어',
            path: '/Itword/',
          },
          {
            label: 'Git',
            path: '/Git/',
          },
          {
            label: '블로그',
            path: '/Blog/',
          },
        ],
      },
      // {
      //   label: 'Learning',
      //   path: '/learning/',
      //   sub_menu: [
      //     {
      //       label: '경제',
      //       path: '/Economhy/',
      //     },
      //   ],
      // },
    ],
    author: {
      name: 'Taehee Kwon',
      email: 'kwonth9509@gmail.com',
      telegram: '@TaeheeKwon',
      github: 'https://taehee9.github.io/',
      rss: '#',
      vk: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.url + edge.node.fields.slug,
                  guid: site.siteMetadata.url + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              ),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        layout
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Taehee's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-158782029-1' },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto:400,400i,500,700'],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          lost(),
          pxtorem({
            rootValue: 16,
            unitPrecision: 5,
            propList: [
              'font',
              'font-size',
              'line-height',
              'letter-spacing',
              'margin',
              'margin-top',
              'margin-left',
              'margin-bottom',
              'margin-right',
              'padding',
              'padding-top',
              'padding-left',
              'padding-bottom',
              'padding-right',
              'border-radius',
              'width',
              'max-width',
            ],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
          }),
        ],
        precision: 8,
      },
    },
  ],
}
