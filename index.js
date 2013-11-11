module.exports = process.env.BPT_COV
  ? require('./lib-cov/bptAPI/')
  : require('./lib/bptAPI');