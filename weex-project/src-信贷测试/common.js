/*eslint-disable*/
const IP = 'http://192.168.1.51:8081';
const storage = weex.requireModule('storage');
const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');
module.exports = {
    ip: IP,
    storage: storage,
    modal: modal,
    stream: stream
}