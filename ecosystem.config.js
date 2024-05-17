module.exports = {
    apps: [
      {
        name: 'Dissuasio-Client',
        script: 'npm',
        args: 'run start',
        cwd: '/var/www/html/Dissuasio/client',
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
      {
        name: 'Dissuasio-Server',
        script: 'npm',
        args: 'run start',
        cwd: '/var/www/html/Dissuasio/server',
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  