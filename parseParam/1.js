function parseParam(url) {
   // 协议  域名/ 路径 : 端口 ?
   const paramsStr = /.+\?(.+)$/.exec(url)[1];
   // console.log(paramsStr);
   const paramsArr = paramsStr.split('&');
   console.log(paramsArr);
   let paramsObj = {};
   paramsArr.forEach(param => {
      // 当我们测试每一个要结构的单元，正确的单元
      if (/=/.test(param)) {
         let [key, val] = param.split('=');
         paramsObj[key] = val;
         val = decodeURIComponent(val);
         // key in paramsObj
         // if(key in paramsObj)
         if (paramsObj.hasOwnProperty(key)) {
            paramsObj[key] = [].concat(paramsObj[key], val);
         } else {
            paramsObj[key] = val;
         }
      } else {
         paramsObj[param] = true;
      }
   });
   console.log(paramsObj);
   return paramsObj;
}

parseParam('http://localhost:8080?a=1&b=2&c=3&a=4&keyword=%E6%89%8B%E6%9C%BA');
