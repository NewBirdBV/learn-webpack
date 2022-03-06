module.exports = function (source) {
    const comment = '//This is another comment\n';
    this.callback(null, comment+ source);
    return;
}
