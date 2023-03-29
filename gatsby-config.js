/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `.`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //     googleAnalytics: {
    //       trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
    //       // Setting this parameter is optional
    //       anonymize: true,
    //     },
    //     facebookPixel: {
    //       pixelId: 'YOUR_FACEBOOK_PIXEL_ID',
    //     },
    //     // Defines the environments where the tracking should be available  - default is ["production"]
    //     environments: ['production', 'development'],
    //   },
    // },
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
