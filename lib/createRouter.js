const fs = require('fs');
const path = require('path');

function createRouter(app, options = {}){
    const { pageDir = 'pages'} = options;

    const pagesPath = path.resolve(process.cwd(), pageDir)

    const scanDirectory = (dirPath, routerPrefix = '') => {
        fs.readdirSync(dirPath).forEach((file) => {
            const fullPath = path.join(dirPath, file);
            const stat = fs.statSync(fullPath);

            if(stat.isDirectory()) {
                scanDirectory(fullPath, `${routerPrefix}/${file}`);
            } else if(stat.isFile()&&file.endsWith('.js')){
                const routePath = path.join(routerPrefix, file.replace('.js',''));
                const route = routePath === '/index'? '/':routePath;

                app.app(route, require(fullPath));
            }
        }
    )

    }
    scanDirectory(pagesPath)

}
module.exports = createRouter;