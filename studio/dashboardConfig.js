export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8b47d02ff9404a71abef5e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nqqsf71b',
                  apiId: 'b24e6f9c-27c1-4d43-8837-df1d184920d4'
                },
                {
                  buildHookId: '5f8b47d134376760457252b0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y4m6jivp',
                  apiId: 'b85a1267-12b7-45f1-88b4-4b50f8b31979'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fridlinimrod/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y4m6jivp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
