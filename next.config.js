/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        deviceSizes: [320, 420, 768, 1024, 2000, 2800],
        domains: ['unitcdn.tmshv.com', 'unit4.io', 'designunit-unit4-45de.twc1.net'],
    },
    redirects: async () => {
        const rewrites = [
            ['/projects', '/'],

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
            ['/application_manual', '/application-manual'],
            ['/edu_ugra', '/ugra-edu'],
            ['/gor_projects_spb', '/gorprojects-spb'],
            ['/park_scnd', '/scnd-park'],
            ['/boulevard_scnd', '/scnd-boulevard'],
            ['/gb_scnd', '/scnd-gb'],
            ['/d_scnd', '/scnd-d'],
            ['/dc_scnd', '/scnd-dc'],
            ['/uray_ppi', '/uray-ppi'],
            ['/model_4', '/model4'],
            ['/latlng', '/mesto'],
        ]

        return rewrites.map(([source, destination]) => ({
            source,
            destination,
            permanent: true,
        }))
    },
    i18n: {
        localeDetection: false,
        locales: ['ru', 'en'],
        defaultLocale: 'ru'
    },
    assetPrefix: '.',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    }
}

export default nextConfig
