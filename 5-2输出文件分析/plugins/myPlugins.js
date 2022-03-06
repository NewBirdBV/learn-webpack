const axios = require('axios');

module.exports = class MyPlugins  {
    constructor(successCb, failedCb) {
        console.log('my');
        this.successCb = successCb;
        this.failedCb = failedCb;
    }

    apply(compiler) {
        compiler.plugin('done', (stat) => {
            this.successCb(stat);
            axios.post('http://localhost:3000/a', { f: true });
        });

        compiler.plugin('fail', (err) => {
            this.failedCb(err);
        });
    };
}
