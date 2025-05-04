/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.APP_BASE_PATH,
  output: process.env.NEXT_OUTPUT,
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
        search: ''
      },
      {
        pathname: '/assets/**',
        search: ''
      }
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/a/:path*',
          destination: '/legacy/a/:path*/index.html'
        }
      ]
    };
  },
  async redirects() {
    return [
      {
        // Redirect old Medium archive pages (/archive, /archive/2016, etc.)
        source: '/archive',
        destination: '/',
        permanent: true
      },
      {
        // Redirect old Medium archive pages (/archive, /archive/2016, etc.)
        source: '/archive/2016',
        destination: '/',
        permanent: true
      },
      {
        // Redirect old Medium archive pages (/archive, /archive/2016, etc.)
        source: '/archive/2017',
        destination: '/',
        permanent: true
      },
      {
        // Redirect old Medium archive pages (/archive, /archive/2016, etc.)
        source: '/archive/2018',
        destination: '/',
        permanent: true
      },
      {
        // Redirect old Medium archive pages (/archive, /archive/2016, etc.)
        source: '/archive/2019',
        destination: '/',
        permanent: true
      },
      {
        // Redirect old Medium archive pages (/archive, /archive/2016, etc.)
        source: '/archive/2019',
        destination: '/',
        permanent: true
      },
      {
        // Redirect old Medium archive pages (/archive, /archive/2016, etc.)
        source: '/archive/2020',
        destination: '/',
        permanent: true
      },
      {
        // Redirect old Medium archive pages (/archive, /archive/2016, etc.)
        source: '/archive/2021',
        destination: '/',
        permanent: true
      },
      {
        // Redirect old Medium tag page (/20-years and /20-years/home)
        source: '/20-years/home',
        destination: '/20-years',
        permanent: true
      },
      {
        source: '/why-we-retreat-8ff6ab84f58d',
        destination: '/why-we-retreat',
        permanent: true
      },
      {
        source: '/silverorange-office-wins-2016-heritage-award-2b66c8386a2b',
        destination: '/silverorange-office-wins-2016-heritage-award',
        permanent: true
      },
      {
        source: '/how-we-retreat-c940777e41f7',
        destination: '/how-we-retreat',
        permanent: true
      },
      {
        source:
          '/how-the-credit-card-industry-is-helping-the-adoption-of-modern-web-standards-ec46c333605e',
        destination:
          '/how-the-credit-card-industry-is-helping-the-adoption-of-modern-web-standards',
        permanent: true
      },
      {
        source:
          '/silverorange-is-looking-to-hire-another-excellent-back-end-web-developer-f3353e4b4bcf',
        destination:
          '/silverorange-is-looking-to-hire-another-excellent-back-end-web-developer',
        permanent: true
      },
      {
        source:
          '/running-a-design-sprint-in-a-healthcare-organization-4ba01c5f9cd',
        destination: '/running-a-design-sprint-in-a-healthcare-organization',
        permanent: true
      },
      {
        source:
          '/neon-quickly-review-stuff-and-share-with-your-friends-193d2b257ae1',
        destination: '/neon-quickly-review-stuff-and-share-with-your-friends',
        permanent: true
      },
      {
        source: '/silverorange-retreat-2017-from-the-air-6027a75ffe2c',
        destination: '/silverorange-retreat-2017-from-the-air',
        permanent: true
      },
      {
        source: '/silverorange-is-looking-to-hire-project-manager-718de6783cd',
        destination: '/silverorange-is-looking-to-hire-project-manager',
        permanent: true
      },
      {
        source:
          '/silverorange-is-looking-to-hire-a-back-end-web-developer-69073299ce35',
        destination:
          '/silverorange-is-looking-to-hire-a-back-end-web-developer',
        permanent: true
      },
      {
        source: '/silverorange-is-hiring-54f1297952a4',
        destination: '/silverorange-is-hiring',
        permanent: true
      },
      {
        source: '/ownership-control-access-possession-9e0e443129ce',
        destination: '/ownership-control-access-possession',
        permanent: true
      },
      {
        source: '/a-brief-18-year-history-of-silverorange-com-be6a42b9e62d',
        destination: '/a-brief-18-year-history-of-silverorange-com',
        permanent: true
      },
      {
        source: '/a-company-on-the-verge-of-adulthood-42d743355ad7',
        destination: '/a-company-on-the-verge-of-adulthood',
        permanent: true
      },
      {
        source: '/silverorange-avatars-9181d1a353dc',
        destination: '/silverorange-avatars',
        permanent: true
      },
      {
        source: '/mug-for-the-camera-8778b263e46c',
        destination: '/mug-for-the-camera',
        permanent: true
      },
      {
        source:
          '/an-architectural-sketch-is-returned-to-its-rightful-home-52f73110b76e',
        destination:
          '/an-architectural-sketch-is-returned-to-its-rightful-home',
        permanent: true
      },
      {
        source: '/silverorange-retreat-2018-1fb718f6f977',
        destination: '/silverorange-retreat-2018',
        permanent: true
      },
      {
        source: '/learning-how-to-celebrate-with-s-92a3de823a82',
        destination: '/learning-how-to-celebrate-with-s',
        permanent: true
      },
      {
        source: '/usability-for-promotion-codes-and-access-codes-55b6978c4886',
        destination: '/usability-for-promotion-codes-and-access-codes',
        permanent: true
      },
      {
        source: '/emergent-patterns-on-slack-8ae20d097c21',
        destination: '/emergent-patterns-on-slack',
        permanent: true
      },
      {
        source: '/design-with-difficult-data-at-a-list-apart-944763661cad',
        destination: '/design-with-difficult-data-at-a-list-apart',
        permanent: true
      },
      {
        source: '/being-charitable-98aab53b3de1',
        destination: '/being-charitable',
        permanent: true
      },
      {
        source: '/how-to-receive-feedback-more-better-3fbec119b5d5',
        destination: '/how-to-receive-feedback-more-better',
        permanent: true
      },
      {
        source: '/web-authn-ux-89a61ba7b555',
        destination: '/web-authn-ux',
        permanent: true
      },
      {
        source:
          '/silverorange-at-20-how-silverorange-was-almost-called-net-prophet-4a204eaa6e61',
        destination:
          '/silverorange-at-20-how-silverorange-was-almost-called-net-prophet',
        permanent: true
      },
      {
        source: '/connecting-families-77364b798fb2',
        destination: '/connecting-families',
        permanent: true
      },
      {
        source: '/my-mothers-mentorship-506a1182ee26',
        destination: '/my-mothers-mentorship',
        permanent: true
      },
      {
        source: '/silverorange-pride-e1af8bd1bfd',
        destination: '/silverorange-pride',
        permanent: true
      },
      {
        source: '/20-years-of-silverorange-party-ace285746612',
        destination: '/20-years-of-silverorange-party',
        permanent: true
      },
      {
        source: '/the-20th-anniversary-silverorange-art-project-5d5138035224',
        destination: '/the-20th-anniversary-silverorange-art-project',
        permanent: true
      },
      {
        source: '/leaking-presence-198bfb048ca0',
        destination: '/leaking-presence',
        permanent: true
      },
      {
        source: '/climatestrike-protests-3995d8476c69',
        destination: '/climatestrike-protests',
        permanent: true
      },
      {
        source: '/serious-hugs-8db98ed6e3e0',
        destination: '/serious-hugs',
        permanent: true
      },
      {
        source: '/2019-silverorange-retreat-586339b75343',
        destination: '/2019-silverorange-retreat',
        permanent: true
      },
      {
        source: '/be-kind-3e9a91732b0b',
        destination: '/be-kind',
        permanent: true
      },
      {
        source: '/backing-up-ovirt-vms-with-ansible-4c2fca8b3b43',
        destination: '/backing-up-ovirt-vms-with-ansible',
        permanent: true
      },
      {
        source: '/2020-remote-remote-week-d283ba14f5b0',
        destination: '/2020-remote-remote-week',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
