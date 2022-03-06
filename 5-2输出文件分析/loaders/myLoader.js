module.exports = function (source) {
    console.log(process.env.NODE_ENV);
    const comment = '//This is a comment\n';
    this.callback(null, comment+ source);
    return;
}

module.exports.raw = true;
