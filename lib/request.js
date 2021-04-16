/* 为什么koa里面没有req */
let url = require('url');
let request = {
  /* ctx.url == ctx.request.url */
  get url () {
    return this.req.url
  },
  get path () {
    return url.parse(this.req.url).pathname
  }
}

module.exports = request;

