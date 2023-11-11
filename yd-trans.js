const crypto = require('crypto-js');


//原代码
function j(e) {
    return i.a.createHash("md5").update(e.toString()).digest("hex")
}
function k(e, t) {
    return j(`client=${d}&mysticTime=${e}&product=${u}&key=${t}`)
}
function E(e, t) {
    const o = (new Date).getTime();
    return {
        sign: k(o, e),
        client: d,
        product: u,
        appVersion: p,
        vendor: A,
        pointParam: m,
        mysticTime: o,
        keyfrom: g,
        mid: b,
        screen: h,
        model: f,
        network: v,
        abtest: O,
        yduuid: t || "abcdefg"
    }
}
// token = 'fsdsogkndfokasodnaso'
// sigh : d4bfcc2a67499034301763d17e9c85c2
// getTime ： 1699592730361
// d: fanyideskweb
// u: webfanyi
// t: undefined

//逆向
const pwn = ()=>{
    let fakeTime = 1699595181369;
    let e = 'fsdsogkndfokasodnaso';
    let d = 'fanyideskweb';
    let u = 'webfanyi';
    let t = undefined;
    return crypto.MD5(`client=${d}&mysticTime=${fakeTime}&product=${u}&key=${e}`).toString();
}
console.log(pwn())