let EventEmitter = require('events');
let http = require('http');
let request = require('./request');
let response = require('./response');
let context = require('./context');

class Koa extends EventEmitter {
  constructor() {
    super();
    this.fn;
    this.context = context;
    this.request = request;
    this.response = response;
  }

  use(fn) {
    this.fn = fn;
  }

  createContext(req, res) {
    // 创建ctx
    const ctx = Object.create(this.context);
    const request = (ctx.request = Object.create(this.request));
    const response = (ctx.response = Object.create(this.response));
    ctx.req = request.req = response.res = req;
    ctx.res = request.res = response.res = res;
    request.ctx = response.ctx = ctx;
    request.response = respoonse;
    response.request = request;
    return ctx;
  }

  handleRequest (req,res) {
    let ctx = this.createContext(req,res)
    this.fn(ctx)
    res.end(ctx.body)
  }

  listen(...args) {
    const server = http.createServer(handleRequest.bind(this));
    server.listen(...args);
  }
}

module.exports = Koa;
