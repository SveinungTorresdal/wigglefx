var ghpages = require('gh-pages')

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/SveinungTorresdal/wigglefx',
        user: {
            name: 'SveinungTorresdal',
            email: 'sveinung.torresdal@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)