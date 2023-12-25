{
  "version": "0.2.0",
  "configurations": [
      {
          "name": "Debug CRA Tests",
          "type": "node",
          "request": "launch",
          "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
          "args": ["test", "--runInBand", "--no-cache", "--watchAll=false"],
          "cwd": "${workspaceRoot}",
          "protocol": "inspector",
          "console": "integratedTerminal",
          "internalConsoleOptions": "neverOpen",
          "env": { "CI": "true" },
          "disableOptimisticBPs": true
      },
      {
          "type": "pwa-msedge",
          "name": "Launch Microsoft Edge",
          "request": "launch",
          "runtimeArgs": ["--remote-debugging-port=9222"],
          "url": [
              "c:\\Users\\Michael Que\\.vscode\\extensions\\ms-edgedevtools.vscode-edge-devtools-2.1.3\\out\\startpage\\app.js",
              "https://github.com/mrmichaelque/My-React-App/"
          ],
          "presentation": {
              "hidden": true
          }
      },
      {
          "type": "pwa-msedge",
          "name": "Launch Microsoft Edge in headless mode",
          "request": "launch",
          "runtimeArgs": ["--headless", "--remote-debugging-port=9222"],
          "url": "https://github.com/mrmichaelque/My-React-App/blob/9cdfb074b2ffee3ac936946627eafb62c7fa2293/App.js",
          "presentation": {
              "hidden": true
          }
      },
      {
          "type": "vscode-edge-devtools.debug",
          "name": "Open Edge DevTools",
          "request": "attach",
          "url": "https://github.com/mrmichaelque/My-React-App/blob/9cdfb074b2ffee3ac936946627eafb62c7fa2293/App.js",
          "presentation": {
              "hidden": true
          }
      }
  ],
  "compounds": [
      {
          "name": "Launch Edge Headless and attach DevTools",
          "configurations": [
              "Launch Microsoft Edge in headless mode",
              "Open Edge DevTools"
          ]
      },
      {
          "name": "Launch Edge and attach DevTools",
          "configurations": [
              "Launch Microsoft Edge",
              "Open Edge DevTools"
          ]
      }
  ]
}