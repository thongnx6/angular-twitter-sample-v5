import { writeFile } from 'fs';
import { argv } from 'yargs';

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-proxy.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment;
const isProd = environment === 'prod';


// set proxy to using the proxying support in webpack's dev server we can highjack certain URLs and send them to a backend server.
const targetPathProxy = `./proxy.conf.json`;
const proxyConfJsonFile = `
{
  "/api": {
    "target": "${process.env.SERVER_HOST}",
    "secure": false,
    "pathRewrite": {
      "^/api": ""
    },
    "logLevel": "debug",
    "changeOrigin": true
  }
}
`;
writeFile(targetPathProxy, proxyConfJsonFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPathProxy}`);
});
