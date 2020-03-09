import express from 'express'
import next from 'next'
import nextI18NextMiddleware from 'next-i18next/middleware'
import nextI18next from '../i18n'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const redirectMap = new Map<string, string>([
    ['/repository/application_manual', '/application-manual'],
    ['/repository/chistopol', '/chistopol'],
    ['/repository/chistopol2', '/chistopol2'],
    ['/repository/delta', '/delta'],
    ['/repository/edu_ugra', '/ugra-edu'],
    ['/repository/garagescreen', '/garagescreen'],
    ['/repository/gor_projects_spb', '/gorprojects-spb'],
    ['/repository/heterotopia', '/heterotopia'],
    ['/repository/hovrinka', '/hovrinka'],
    ['/repository/kemb', '/kemb'],
    ['/repository/krvostok', '/krvostok'],
    ['/repository/latlng', '/latlng'],
    ['/repository/model4', '/model4'],
    ['/repository/oymyakon', '/oymyakon'],
    ['/repository/park_scnd', '/scnd-park'],
    ['/repository/boulevard_scnd', '/scnd-boulevard'],
    ['/repository/gb_scnd', '/scnd-gb'],
    ['/repository/d_scnd', '/scnd-d'],
    ['/repository/dc_scnd', '/scnd-dc'],
    ['/repository/samarapark', '/samarapark'],
    ['/repository/shelter', '/shelter'],
    ['/repository/swarm', '/swarm'],
    ['/repository/trollgardens', '/trollgardens'],
    ['/repository/uray_ppi', '/uray-ppi'],
    ['/repository/volokolamsk', '/volokolamsk'],
    ['/repository/yoshkola', '/yoshkola'],
])
const projects = [
    '/application-manual',
    '/chistopol',
    '/chistopol2',
    '/delta',
    '/urga-edu',
    '/garagescreen',
    '/gorprojects-spb',
    '/heterotopia',
    '/hovrinka',
    '/kemb',
    '/krvostok',
    '/latlng',
    '/model4',
    '/oymyakon',
    '/scnd-park',
    '/scnd-boulevard',
    '/scnd-gb',
    '/scnd-d',
    '/scnd-dc',
    '/samarapark',
    '/shelter',
    '/swarm',
    '/trollgardens',
    '/uray-ppi',
    '/volokolamsk',
    '/yoshkola',
]

function createPageName(name: string, defaultLang: string, lang?: string): string {
    if (!lang || lang === defaultLang) {
        return name
    }

    return `${name}.${lang}`
}

app.prepare()
    .then(() => {
        const defaultLang = nextI18next.config.defaultLanguage
        const server = express()

        server.use(nextI18NextMiddleware(nextI18next))

        server.get('/', (req, res) => {
            app.render(req, res, '/', {})
        })

        server.get('/about', (req, res) => {
            const lang = (req as any).lng
            const page = createPageName('/about', defaultLang, lang)
            app.render(req, res, page, {})
        })

        server.get('/partners', (req, res) => {
            const lang = (req as any).lng
            const page = createPageName('/partners', defaultLang, lang)
            app.render(req, res, page, {})
        })

        server.get('/contact', (req, res) => {
            const lang = (req as any).lng
            const page = createPageName('/contact', defaultLang, lang)
            app.render(req, res, page, {})
        })

        server.get('*', (req, res) => {
            if (redirectMap.has(req.path)) {
                console.log('will redirect')

                const to = redirectMap.get(req.path)
                res.redirect(to)
                res.end()
                return
            }

            if (projects.includes(req.path)) {
                const lang = (req as any).lng
                const actualPage = createPageName(`/project${req.path}`, defaultLang, lang)

                app.render(req, res, actualPage, {})
                return
            }

            return handle(req, res)
        })

        server.listen(port, () => {
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })
