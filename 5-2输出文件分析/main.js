// 异步加载 show.js

import('./show').then(show => {
  show(123);
})

//console.log('env', process.env.NODE_ENV);
