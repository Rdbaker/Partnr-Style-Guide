// set the env by running `ENV=<environment name> gulp`
var env = process.env.ENV || 'local';

var src = './src/';
var dest = './static/';


module.exports = {
  env: env,

  sass: {
    src: [src+'**/*.sass'],
    dest: dest+'css/',
    settings: {
      includePaths: [
        src,
        './node_modules/'
      ]
    }
  },

  jade: {
    src: src + '**/*.jade',
    dest: dest
  },

  coffee: {
    src: src + '**/*.coffee',
    dest: dest
  }
};
