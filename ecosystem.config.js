module.exports = {
  apps : [{
    name: 'node-mai-www',
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
  },{
    name: 'node-mai-ygx',
    script: './server.js',
    instances: 8,
    exec_mode: "cluster",
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'yungengxin',
      PORT: 81
    }
  },{
    name: 'node-mai-st',
    script: './server.js',
    instances: 8,
    exec_mode: "cluster",
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'shengtian',
      PORT: 82
    }
  },{
    name: 'node-mai-zz',
    script: './server.js',
    instances: 8,
    exec_mode: "cluster",
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'zhuzhan',
      PORT: 83
    }
  }]
};
