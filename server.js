require("./Database/db");
const chalk = require('chalk')
const http = require('http');

const { env } = require('process');
const app = require('./index');
const port = process.env.PORT || 3200;
const server = http.createServer(app);
// server.listen(port, ()=> {
//     console.log(chalk.bgYellowBright.red.bold(`Server started at port no ${port}`))
// } )
app.listen(port, () => {
    console.log(
      `${chalk.cyan('✓ ')}` + `${chalk.bgWhite.red.bold(
        ` Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
      )}`
    );
  });