const path = require('path')

exports.createPages = async ({ graphql, actions }) =>
{
  const { createPage } = actions
  const basicPageTemplate = path.resolve('src/templates/pageTemplate.js')
  const result = await graphql(`
    query{
      allContentfulPage{
        nodes{
          slug
        }
      }
    }
  `)
  result.data.allContentfulPage.nodes.map(node =>
  {
    // const slug = node.title === "Home" ? "/" : slugify(node.title, { lower: true })
    createPage({
      path: node.slug,
      component: basicPageTemplate,
      context: {
        slug: node.slug
      }
    })
  })
}

// const util = require("util");
// const child_process = require("child_process");
// const exec = util.promisify(child_process.exec);

// exports.onPostBuild = async (gatsbyNodeHelpers) =>
// {
//   const { reporter } = gatsbyNodeHelpers;

//   const reportOut = (report) =>
//   {
//     const { stderr, stdout } = report;
//     if (stderr) reporter.error(stderr);
//     if (stdout) reporter.info(stdout);
//   };

//   reportOut(await exec("yarn lambda"));
// };