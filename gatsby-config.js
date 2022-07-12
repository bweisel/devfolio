module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.benweisel.com`,
    // Your Name
    name: 'Ben Weisel',
    // Main Site Title
    title: `Ben Weisel | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Experienced software engineer and leader specialized in developing complex, data-driven applications.`,
    // Optional: Twitter account handle
    author: `@bweisel`,
    // Optional: Github account URL
    github: `https://github.com/bweisel`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/benweisel/`,
    // Content of the About Me section
    about: `Currently building advanced NBA Analytics for Cleaning the Glass. Based in Denver, CO.`,
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
        name: 'Cleaning the Glass',
        description: 'Software Architect; April 2022 - Present',
        link: 'https://www.cleaningtheglass.com',
      },
      {
        name: 'Tall Tree Software',
        description: 'Founder; April 2022 - Present',
        link: 'https://www.benweisel.com',
      },
      {
        name: 'Uplight',
        description: 'Director of Engineering; March 2020 - April 2022',
        link: 'https://www.linkedin.com/company/uplightenergy/',
      },
      {
        name: 'Tendril',
        description: 'Engineering Manager; January 2016 - March 2020',
        link: 'https://www.linkedin.com/company/tendril/',
      },
      {
        name: 'Publicis Sapient',
        description: 'Lead Software Engineer; September 2012 - January 2016',
        link: 'https://www.linkedin.com/company/publicissapient/',
      },
      {
        name: 'Rosetta Marketing Group',
        description: 'Software Engineer; June 2010 - September 2012',
        link: 'https://www.linkedin.com/company/rosetta/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, Flask, FastAPI, SQLAlchemy, SQL, Prefect, Airflow, Spark, DBT, Java, Javascript',
      },
      {
        name: 'Databases & Storage',
        description: 'PostreSQL, MySQL, DynamoDB, Redshift, BigQuery, Cassandra, S3, GCS, Databricks',
      },
      {
        name: 'Cloud & DevOps',
        description:
          'Amazon Web Services (AWS), Google Cloud Platform (GCP), Docker, Terraform, CI / CD',
      },
      {
        name: 'Other',
        description:
          'Data Pipeline (ETL/ELT) Development, Microservices, API design, Agile / Scrum',
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
        trackingId: `G-M5CWLL101Q`, // Optional Google Analytics
        head: false,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#336699`,
        theme_color: `#336699`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/headshot.png`,
      },
    },
  ],
};
