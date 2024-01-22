const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/translate', async (req, res) => {
  // const { text, targetLang } = req.query;

  try {
    const response = await axios.post('https://fanyi.baidu.com/v2transapi',{
      from: 'zh',
      to: 'en',
      query: '哈哈',  // 修改query参数的值为"哈哈"
      transtype: 'realtime',
      simple_means_flag: '3',
      sign: '404035.182642',
      token: 'dfeb25b3f6397d5df85106a440cf4f25',
      domain: 'common',
      ts: Date.now(),  // 修改ts参数的值为"1704113017846"
    }, {
      headers: {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Acs-Token': '1704107305281_1704112840953_R83ekwL6YgjUtgaNJEreZ+H5ecUaoaW4UpcqiYJZfV2sSSP+tkaeKLgsNYBIz3ysfcqS1IcgqRVY4OdZmu8DEUIcazA4AaPpbGqPYSqRzAcY87/sMEMz6/9YlfcmBwvk2CVso+6k4oRwcfFSxpqfnpymyF1/Aeb5cjmjA9Op4hGz6AFfr3+vdZx1C6fYjGw/ocGeTn0kCWVolekIPWFZzUkJXV64yoHLFuz4AJahzir+IdFup9WozvZM9Mftri2zOw+u9zzzjzLbOuqV9h+mUqT9TqrW8swq3ctAhd0+d27PIPbxTadDGzY3Jrbtj/AkXmiTunNGmjhzg/bp8KbISu8kIrLMNkfcj9plfSc8eF0tB38ed4mvAh2hqpto64kYhZV9RCD0d69qOTGg3jKbZTnK8uD84H5IKxmSILUDivqyqIuRMfiXl/QKAtMO/xRID5qE6OHtcC8szSUov/kYb74mHkbjehNhu0ykEUt1ttM=',
        'Cookie':'PSTM=1681389256; BIDUPSID=CA9E83888BE2326E740574433C14DED6; BAIDUID=358BC419D219DC37A56086D261D7FC2B:FG=1; MCITY=-%3A; BAIDUID_BFESS=358BC419D219DC37A56086D261D7FC2B:FG=1; _lxsdk_cuid=18b21c8ed02c8-0a465fdc445eb4-18525634-1fa400-18b21c8ed02c8; APPGUIDE_10_6_7=1; REALTIME_TRANS_SWITCH=1; FANYI_WORD_SWITCH=1; HISTORY_SWITCH=1; SOUND_SPD_SWITCH=1; SOUND_PREFER_SWITCH=1; ZFY=Hg5DPyQo3bIcgkrSI:A88Fwd4xUCIJxJr6:BCOpF1Hq34:C; delPer=0; PSINO=1; Hm_lvt_64ecd82404c51e03dc91cb9e8c025574=1704099342; H_PS_PSSID=39939_39998_40009_40045_40050; BA_HECTOR=a48hal0k8kag0h8hagal0k8lfh0p1a1ip599m1t; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574=1704112064; _lxsdk_s=18cc4fe8537-8ab-729-140%7C%7C0; _lx_utm=utm_source%3Dgoogle%26utm_medium%3Dorganic; ab_sr=1.0.1_YzM0MzRiYWYxNTc4ZDZjOTkzNDdiNGZmNDJiMzNmMWNkNjcwMDEwOTYyZmU5MjRiMjc2MjVjYzA4ZDc2YzRmMDNmNzFkZDdmMDdhOGI3MjJhOTNiNjAzNDA0ZTczYjk3NDNhY2RkNGQ5NTE4M2MwYzY0OWIyOWViNTM4NmUzMDRiODVkZTNiODZiMjkwM2Y3YTVlZGYxZDE5ZmZmNmI5Yw==' ,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Host':'fanyi.baidu.com'
      },
    });
    // console.log('params',Date.now());
    // console.log('res:',response.data);
    res.send(response.data);
    
  } catch (error) {
    // console.log('123123',error);
    res.status(500).send({ error: 'Error in translation' });
  }
});

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
