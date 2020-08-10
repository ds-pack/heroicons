const fs = require('fs').promises
const camelcase = require('camelcase')
const { promisify } = require('util')
const rimraf = promisify(require('rimraf'))
const svgr = require('@svgr/core').default

function svgToReact(svg, componentName) {
  return svgr(
    svg,
    {
      ref: true,
      icon: true,
    },
    { componentName },
  )
}

console.log('Building React components...')

rimraf('./react/outline/*')
  .then(() => {
    return rimraf('./react/solid/*')
  })
  .then(() => {
    return Promise.all([
      fs.readdir('./solid').then((files) => {
        return Promise.all(
          files.map((file) => {
            const componentName = `${camelcase(file.replace(/\.svg$/, ''), {
              pascalCase: true,
            })}`
            return fs
              .readFile(`./solid/${file}`, 'utf8')
              .then((content) => {
                return svgToReact(content, `${componentName}Icon`)
              })
              .then((component) => {
                const fileName = `${componentName}.tsx`
                const content = component
                return fs
                  .writeFile(`./react/solid/${fileName}`, content)
                  .then(() => fileName)
              })
          }),
        ).then((fileNames) => {
          const exportStatements = fileNames
            .map((fileName) => {
              const componentName = `${camelcase(
                fileName.replace(/\.tsx$/, ''),
                {
                  pascalCase: true,
                },
              )}`
              return `export { default as ${componentName}Icon } from './${componentName}'`
            })
            .join('\n')

          fs.writeFile('./react/solid/index.tsx', exportStatements)
          return fileNames
        })
      }),

      fs.readdir('./outline').then((files) => {
        return Promise.all(
          files.map((file) => {
            const componentName = `${camelcase(file.replace(/\.svg$/, ''), {
              pascalCase: true,
            })}`
            return fs
              .readFile(`./outline/${file}`, 'utf8')
              .then((content) => {
                return svgToReact(content, `${componentName}Icon`)
              })
              .then((component) => {
                const fileName = `${componentName}.tsx`
                const content = component
                return fs
                  .writeFile(`./react/outline/${fileName}`, content)
                  .then(() => fileName)
              })
          }),
        ).then((fileNames) => {
          const exportStatements = fileNames
            .map((fileName) => {
              const componentName = `${camelcase(
                fileName.replace(/\.tsx$/, ''),
                {
                  pascalCase: true,
                },
              )}`
              return `export { default as ${componentName} } from './${componentName}'`
            })
            .join('\n')

          fs.writeFile('./react/outline/index.tsx', exportStatements)
          return fileNames
        })
      }),
    ])
  })
  .then(([solids, outlines]) => {
    const solidExports = solids
      .map((fileName) => {
        const componentName = `${camelcase(fileName.replace(/\.tsx$/, ''), {
          pascalCase: true,
        })}`
        return `export { default as Solid${componentName}Icon } from './solid/${componentName}'`
      })
      .join('\n')
    const outlineExports = outlines
      .map((fileName) => {
        const componentName = `${camelcase(fileName.replace(/\.tsx$/, ''), {
          pascalCase: true,
        })}`
        return `export { default as Outline${componentName}Icon } from './outline/${componentName}'`
      })
      .join('\n')

    fs.writeFile('./react/index.tsx', `${solidExports}\n${outlineExports}`)
  })
  .then(() => console.log('Finished building React components.'))
