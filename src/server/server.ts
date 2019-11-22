import express from 'express'
import next from 'next'
import nextI18NextMiddleware from 'next-i18next/middleware'
import { parse } from 'url'
import nextI18next from '../i18n'

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

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

        // server.get('/projects', (req, res) => {
        //     const actualPage = '/projects'
        //     const queryParams = {
        //         city: 'all',
        //     }

        //     app.render(req, res, actualPage, queryParams)
        // })

        // server.get('/projects/:city', (req, res) => {
        //     const actualPage = '/projects'
        //     const queryParams = {
        //         city: req.params.city,
        //     }

        //     app.render(req, res, actualPage, queryParams)
        // })

        // server.get('/project/:slug', (req, res) => {
        //     const actualPage = '/project'
        //     const queryParams = {
        //         slug: req.params.slug,
        //     }

        //     app.render(req, res, actualPage, queryParams)
        // })

        // server.get('/event/:slug', (req, res) => {
        //     const actualPage = '/event'
        //     const queryParams = {
        //         slug: req.params.slug,
        //     }

        //     app.render(req, res, actualPage, queryParams)
        // })

        server.get('/', (req, res) => {
            app.render(req, res, '/', {})
        })

        server.get('/about', (req, res) => {
            const lang = (req as any).lng
            const page = createPageName('/about', defaultLang, lang )
            app.render(req, res, page, {})
        })

        server.get('/partners', (req, res) => {
            const lang = (req as any).lng
            const page = createPageName('/partners', defaultLang, lang )
            app.render(req, res, page, {})
        })

        server.get('/repository', (req, res) => {
            app.render(req, res, '/repository', {})
        })

        server.get('/repository/:slug', (req, res) => {
            const lang = (req as any).lng

            const slug = req.params.slug
            const actualPage = createPageName(`/repository/${slug}`, defaultLang, lang)
            const queryParams = {
                //     slug: req.params.slug,
            }

            console.log('handle repository page', req.url, slug, actualPage, lang, req.query)

            app.render(req, res, actualPage, queryParams)
        })

        server.get('*', (req, res) => {
            const lang = (req as any).lng
            console.log('handle request with next', req.url, lang)

            const parsedUrl = parse(req.url, true)
            const { pathname, query } = parsedUrl

            // if (pathname) {
            // }

            // if (pathname === '/a') {
            //     app.render(req, res, '/b', query)
            // } else if (pathname === '/b') {
            //     app.render(req, res, '/a', query)
            // } else {
            //     handle(req, res, parsedUrl)
            // }

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
