const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
// const { copyLibFiles } = require('@builder.io/partytown/utils');

// exports.onPreBuild = async () => {
//   await copyLibFiles(path.join(__dirname, 'static', '~partytown'));
// };

exports.createPages = async ({ graphql, actions}) => {
    const { createPage, createRedirect } = actions

    const result = await graphql(`
        {
              allWpOplossing {
                edges {
                  node {
                    uri
                    databaseId
                  }
                }
              }

              allWpProject {
                edges {
                  node {
                    uri
                    databaseId
                  }
                }
              }

        }
    `)
    
    if (result.errors){
        throw new Error(result.errors)
    }

    const { allWpProject, allWpOplossing } = result.data

    const projectTemplate = path.resolve('./src/templates/project.js')
    const oplossingTemplate = path.resolve('./src/templates/oplossing.js')
    

    allWpProject.edges.forEach(edge => {
        createPage({
            path: `${edge.node.uri}`,
            component: slash(projectTemplate),
            context: {
                id: edge.node.databaseId,
            },
        })
    });

    allWpOplossing.edges.forEach(edge => {
        createPage({
            path: `${edge.node.uri}`,
            component: slash(oplossingTemplate),
            context: {
                id: edge.node.databaseId,
            },
        })
    });

}