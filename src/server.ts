import { app } from './app';

/**
 * Start Express server.
 */

console.log('Start Express server');
const port = app.get('port') || 8081
const server = app.listen(port, () => {
  console.log('  App is running at http://localhost:%d in %s mode', port, app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

export default server;