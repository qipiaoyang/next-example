module.exports = {
  apps : [{
    name: 'pandaQi',
    script: './server.js',
    instances: 8,
    exec_mode: "cluster",
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 80
    }
  }]
};
