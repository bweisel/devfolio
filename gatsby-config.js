module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.benweisel.com`,
    // Your Name
    name: 'Ben Weisel',
    // Main Site Title
    title: `Ben Weisel | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Experienced leader and engineer, specializing in backend data development.`,
    // Optional: Twitter account handle
    author: `@bweisel`,
    // Optional: Github account URL
    github: `https://github.com/bweisel`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/benweisel/`,
    // Content of the About Me section
    about: `Based in Denver, CO.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'NFL Margins',
        description:
          'A site to host free NFL Margin pools to play with friends.',
        link: 'https://www.nflmargins.com',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Independent Consultant',
        description: 'Software Engineer, April 2022 - Present',
      },
      {
        name: 'Uplight',
        description: 'Director of Software Engineering, March 2020 - April 2022',
      },
      {
        name: 'Tendril Networks',
        description: 'Engineering Manager, January 2016 - March 2020',
      },
      {
        name: 'Publicis/Sapient',
        description: 'Senior Software Engineer, September 2012 - January 2016',
      },
      {
        name: 'Publicis/Sapient',
        description: 'Software Engineer, June 2010 - September 2012',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, Flask, SQLAlchemy, Prefect, Airflow, Spark, SQL, Java, Javascript',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL, DynamoDB, Redshift, BigQuery',
      },
      {
        name: 'Cloud & DevOps',
        description:
          'Amazon Web Services (AWS), Google Cloud Platform (GCP)',
      },
      {
        name: 'Other',
        description:
          'Data Pipeline (ETL/ELT) Development, Microservices, API design, CI / CD, Docker, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
