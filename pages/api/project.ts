import { getPageBySlug } from '@/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug, locale } = JSON.parse(req.body)
    const page = await getPageBySlug(locale, slug)

    if (!page) {
        res.status(404).json({ message: `no project ${slug}.${locale}` })
    }

    const { cover: src, title: text, tags, location, year } = page
    res.status(200).json({
        src,
        tags: [location, year, ...tags],
        text,
    })
}