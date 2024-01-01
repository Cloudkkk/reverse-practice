const cryptoJS = require('crypto-js');
const crypto = require('crypto')

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
    return cryptoJS.MD5(`client=${d}&mysticTime=${fakeTime}&product=${u}&key=${e}`).toString();
}
console.log(pwn())

 //解码
 let t ="_jsUyA02rwkOJ4enKX7c4dhd7CjvGkcKfbRx0BjNGW8nkX89thX0MyjKyA9B1rPlFkcn-YUDPpuZ1IRZ7Ky4tWkjt3jGEcH23iXskvKCWyHN_1GmgcENcn6ZHC6I5alqEmt9iNwrnv5GqRebX5nqUQ==-YUDPpuZ1IRZ7Ky4tWkjt3jGEcH23iXskvKCWyHN_1GmgcENcn6ZHC6I5alqEmt9iNwrnv5GqRebX5nqUQ==-MeDWh3z252xRTQv-wZ6jddVo3tJLe7gIXz4PyxGl73nSfLAADyElSjjvrYdCvEP4pfohVVEX1DxoI0yhm36ytQNvu-WLU94qULZQ72aml6YoTyDk-eaU8ivao1ikg_ETAQGSJND7-6p9Ja0ygJB9fmy__lqpHtlVTCrkRxpmTFSMlk6Je4I9lJVaI-rRBcV3jBAWHow0b-cEl9UdC6MTxXpqWNf21qVsK2IGRo7s-KemM0wVdu4DmS6eugRjSFOF-vx2fhNzc7B1Od0-EnbHM4IzT8sYJN1wsNf1h1LsO9T73OSDkb8vCS_YEJhKIi9A783JeiS-o7JXkrNdjmk3djEQv11ZOUcHaswsxnY2JSVzWifY9wdp51SOWRFxohvM2M3NM-8ByviUnMZM-YQ63FkaH7s0mCrIJapuAWQSWXQJXjHHzRsQLu78G1YH-l98yFg6HU5D13wDmaiRPv62Fbii6biamBOH0TzxEQK_kJGrkT3JnneheZ4gxSpMBdhQ==";
 let o ="ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl";
 let n = "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4";
 // 定义y函数，这里假设y函数是用来处理o和n的，将其转换为适合Buffer的格式
 function y(e) {
    return crypto.createHash("md5").update(e).digest()
}
 const R = (t,o,n)=>{
    if (!t)
        return null;
    const a =  Buffer.alloc(16, y(o))
      , c =  Buffer.alloc(16, y(n))
      , r = crypto.createDecipheriv("aes-128-cbc", a, c);
    let s = r.update(t, "base64", "utf-8");
    console.log(a);
    return s += r.final("utf-8"),
    s
}
console.log(R(t, o, n));