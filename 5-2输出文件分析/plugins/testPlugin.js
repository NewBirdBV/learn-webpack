module.exports = class MyPlugins  {
    constructor(successCb, failedCb) {
        console.log('test');
        this.successCb = successCb;
        this.failedCb = failedCb;
    }

    apply(compiler) {
        compiler.plugin('done', (stat) => {
            this.successCb(stat);
        });

        compiler.plugin('fail', (err) => {
            this.failedCb(err);
        });
    };
}
