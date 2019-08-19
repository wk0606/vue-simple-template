const path = require('path')

exports.util = {
  assetsPath(_path_) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production' ? 'static' : 'static'
    return path.posix.join(assetsSubDirectory, _path_)
  }
}