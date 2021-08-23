module.exports = {
  siteMetadata: {
    title: `The Coder Gang`,
    description: `Nền tảng kết nối các bạn trẻ yêu thích lập trình tại Việt Nam, nơi mọi người có thể chia sẻ kiến thức và kinh nghiệm của mình trong quá trình học tập và làm việc, cùng nhau học hỏi và cùng nhau xây dựng những nội dung thú vị.`,
    siteUrl: `https://codergangvn.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
