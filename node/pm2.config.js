module.exports = {
  apps: [
  {
      'name': 'hxyblog',
      'script': './app.js',
      'watch': false,
      'env': {
          'NODE_ENV': 'production',
          "PORT": 80
      },
      // cpu负载均衡
      'exec_mode': 'cluster',
      'instances': 4,
      'error_file': './logs/err.log', // 错误日志路径
      'out_file': './logs/out.log', // 普通日志路径
      'log_date_format': 'YYYY-MM-DD HH:mm:ss',
      'merge_logs': true
  }
]}