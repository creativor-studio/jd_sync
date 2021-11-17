/*
活动：京小鸽吾悦寄
活动路径：边玩边赚-》京小鸽吾悦寄
很小的几率能抽到实物。
*/
const $ = new Env('京小鸽吾悦寄');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
$.helpCodeList = {};
$.sendCardList = [];
$.message = '';
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
  let cookiesData = $.getdata('CookiesJD') || "[]";
  cookiesData = jsonParse(cookiesData);
  cookiesArr = cookiesData.map(item => item.cookie);
  cookiesArr.reverse();
  cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
  cookiesArr.reverse();
  cookiesArr = cookiesArr.filter(item => item !== "" && item !== null && item !== undefined);
}

!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.thisHelpCode = {};
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = $.UserName;
      await TotalBean();
      console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      await jxg();
    }
  }
  if($.message){
    await notify.sendNotify(`京小鸽吾悦寄`, $.message);
  }
  if($.sendCardList.length>0){
    $.sendCardList = $.sendCardList.sort(randomsort);
    console.log(`\nsendCode开始领取赠送卡片`);
    $.sendCode = $.sendCardList.shift();
    for (let i = 0; i < cookiesArr.length/2; i++) {
      $.getCodeFlag = true;
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
      if ($.sendCode){
        do{
          await transferBoxCard($.sendCode);
        }while ($.getCodeFlag && $.sendCode)
      }
    }
  }
  console.log(`\n\n开始账号内互助`);
  let newCookiesArr = [];
  for(let i = 0;i<cookiesArr.length;i+=4){
    newCookiesArr.push(cookiesArr.slice(i,i+4))
  }
  for (let i = 0; i < newCookiesArr.length; i++) {
    let thisCookiesArr = newCookiesArr[i];
    let codeList = [];
    for (let j = 0; j < thisCookiesArr.length; j++) {
      cookie = thisCookiesArr[j];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
      codeList.push({
        'name':$.UserName,
        'helpCode':$.helpCodeList[$.UserName]
      });
    }
    for (let j = 0; j < thisCookiesArr.length; j++) {
      cookie = thisCookiesArr[j];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
      for (let k = 0; k < codeList.length; k++) {
        if(codeList[k].name === $.UserName){
          continue;
        }else{
          console.log(`${$.UserName}助力：${codeList[k].helpCode}`)
          await helpFriend(codeList[k].helpCode);
          await $.wait(2000);
        }
      }
    }
  }

})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })

async function jxg(){
  $.userInfo = {};
  $.cardList = [];
  $.missionList = [];
  $.shareCode = '';
  console.log(`初始化`);
  await Promise.all([getBoxUserRewardWinners(), getCardInfo(),getQueryRuleInfo(),getNewShare()]);
  if($.userInfo.code !== 1 || $.userInfo.success !== true ){
    console.log(`获取用户信息失败`);
    return ;
  }
  if($.missionList.length === 0){
    console.log(`获取任务列表失败`);
  }else{
    await $.wait(2000);
    await doMission();//做任务
  }
  await getCardInfo();
  await $.wait(2000);
  $.synthesisType = true;
  for (let i = 0; i < $.cardList.length && i <  7; i++) {
    if($.cardList[i].num === 0){
      $.synthesisType = false;
    }
  }
  if($.synthesisType){
    console.log('开始合成卡片');
    await synthesize();
    await $.wait(3000);
    console.log('抽奖');
    await getBigReward();
  }else{
    console.log('卡片不足，不能合成');
  }
  if($.index > (cookiesArr.length - cookiesArr.length/3)){
    console.log('开始赠送卡片');
    for (let i = 0; i < $.cardList.length; i++) {
      if($.cardList[i].num >0){
        //获取卡片详情
        $.cardDetailList = [];
        await getCardDetail($.cardList[i].type);
        await $.wait(1000);
        if($.cardDetailList.length>0){
          await sendBoxCard($.cardDetailList[0].card.userCardId);
        }
      }
    }
  }
  await $.wait(1000);
  await getFlowList();
}

function randomsort(a, b) {
  return Math.random()>.5 ? -1 : 1;
  //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}

async function getFlowList(){
  const body =  `[{"userNo":"$cooMrdGatewayUid$","activityNo":""}]`;
  const myRequest = getPostRequest('MangHeApi/getFlowList',body);
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        data = JSON.parse(data);
        let winFlowDTOList = data.content.winFlowDTOList;
        for (let i = 0; i < winFlowDTOList.length; i++) {
          if(winFlowDTOList[i].type === -2 || //快递券
            winFlowDTOList[i].type === -3    //满减券
          ){
            continue;
          }else if(winFlowDTOList[i].type === 41){
            if(winFlowDTOList[i].hasAddress !== 1){
              $.message += `第${$.index}个账号，${$.UserName},获得实物:${winFlowDTOList[i].name}\n`;
            }
            console.log(JSON.stringify(winFlowDTOList[i]));
          }else{
            console.log(JSON.stringify(winFlowDTOList[i]));
            $.message += `第${$.index}个账号，${$.UserName},获得:${winFlowDTOList[i].name}\n`;
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

//领取
async function transferBoxCard(cordId){
  const body =  `[{"userNo":"$cooMrdGatewayUid$","flowNo":"${cordId}"}]`;
  const myRequest = getPostRequest('MangHeApi/transferBoxCard',body)
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if(data.success === true && data.code === 1){
          console.log(`${$.UserName}领取卡片成功，获得${data.content.card.name || '未知'}`);
          $.sendCode = $.sendCardList.shift();
        }else if(data.success === false && data.code === -1004){
          $.getCodeFlag = false;
          console.log(`${$.UserName}领取失败，${data.errorMsg}`);
        }
      } catch (e) {
        $.getCodeFlag = false;
        $.sendCode = '';
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

//赠送卡片
async function sendBoxCard(userCardId){
  const body =  `[{"userNo":"$cooMrdGatewayUid$","sendType":1,"cardId":${userCardId}}]`;
  const myRequest = getPostRequest('MangHeApi/sendBoxCard',body)
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if(data.success === true && data.code === 1){
          console.log(`卡片赠送成功，赠送ID：${data.content}`);
          $.sendCardList.push(data.content);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

//获取卡片详情
async function getCardDetail(type){
  const body =  `[{"userNo":"$cooMrdGatewayUid$","cardType":${type}}]`;
  const myRequest = getPostRequest('MangHeApi/getCardDetail',body)
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if(data.success === true && data.code === 1){
          $.cardDetailList = data.content;
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

//抽奖
async function getBigReward(){
  const body =  `[{"userNo":"$cooMrdGatewayUid$"}]`;
  const myRequest = getPostRequest('MangHeApi/getBigReward',body)
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        console.log(data);
        data = JSON.parse(data);
        if(data.success === true && data.code === 1){
          if(data && data.content && data.content.rewardDTO){
            console.log(`抽奖成功，获得：${data.content.rewardDTO.title || '未知内容'}`);
            //$.message += `第${$.index}个${$.UserName}获得${data.content.rewardDTO.title || '未知内容'}\n`
          }else{
            console.log(`抽奖成功，获得：未知内容,${JSON.stringify(data)}`);
            //$.message += `第${$.index}个${$.UserName}获得未知内容，${JSON.stringify(data)}\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

//合成
async function synthesize(){
  const body =  `[{"userNo":"$cooMrdGatewayUid$"}]`;
  const myRequest = getPostRequest('MangHeApi/synthesize',body)
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if(data.success === true && data.code === 1){
          console.log(`合成成功`);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

//做任务
async function doMission(){
  let flag = false;
  console.log(`开始执行任务`);
  for (let i = 0; i < $.missionList.length; i++) {
    $.missionName = $.missionList[i].name;
    if($.missionList[i].status === 1 && $.missionList[i].jumpType === 31){
      await $.wait(3000);
      //签到
      await signIn();
      await $.wait(1000);
      flag = true;
    }else if($.missionList[i].status === 1 && $.missionList[i].jumpType === 41){
      await $.wait(3000);
      //访问精彩
      await setUserHasView();
      flag = true;
    }
  }
  if(flag){
    await getQueryRuleInfo();
  }
  for (let i = 0; i < $.missionList.length; i++) {
    $.missionName = $.missionList[i].name;
    //领取卡片
    if($.missionList[i].status === 11 && $.missionList[i].getRewardNos.length>0){
      for (let j = 0; j < $.missionList[i].getRewardNos.length; j++) {
        await getCard($.missionList[i].getRewardNos[j]);
        await $.wait(3000);
      }
    }
  }
  console.log(`执行任务结束`);
}

async function getCard(code){
  const body =  `[{"userNo":"$cooMrdGatewayUid$","getCode":"${code}"}]`;
  const myRequest = getPostRequest('MangHeApi/getCard',body)
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if(data.success === true && data.code === 1){
          console.log(`完成任务${$.missionName},获得卡片：${data.content.card.name}`);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}


async function setUserHasView(){
  const body =  `[{"userNo":"$cooMrdGatewayUid$"}]`;
  const myRequest = getPostRequest('mangHeApi/setUserHasView',body)
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if(data.success === true && data.code === 1){
          console.log(`执行任务：${$.missionName},成功`);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

//签到
async function signIn(){
  const body =  `[{"userNo":"$cooMrdGatewayUid$"}]`;
  const myRequest = getPostRequest('mangHeApi/signIn',body)
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if(data.success === true && data.code === 1){
          console.log(`执行任务：${$.missionName},成功`);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

//获取互助码
async function getNewShare(){
  const body =  `[{"userNo":"$cooMrdGatewayUid$"}]`;
  const myRequest = getPostRequest('MangHeApi/newShare',body)
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if(data.success === true){
          $.helpCodeList[$.UserName] = data.content;
          console.log(`互助码：${data.content}`);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

//获取任务列表
async function getQueryRuleInfo(){
  const body =  `[{"userNo":"$cooMrdGatewayUid$"}]`;
  const myRequest = getPostRequest('MangHeApi/queryRuleInfo',body)
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if(data.success === true){
          $.missionList = data.content;
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}


async function getCardInfo(){
  const body =  `[{"userNo":"$cooMrdGatewayUid$"}]`;
  const myRequest = getPostRequest('MangHeApi/getCardInfo',body);
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if(data.success === true && data.code === 1){
          $.cardList = data.content.cardInfos;
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

//获取用户信息
async function getBoxUserRewardWinners(){
  const body =  `[{"userNo":"$cooMrdGatewayUid$"}]`;
  const myRequest = getPostRequest('MangHeApi/boxUserRewardWinners',body);
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        if(data){
          $.userInfo = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

//助力
async function helpFriend(helpCode){
  const body = `[{"userNo":"$cooMrdGatewayUid$","missionNo":"${helpCode}"}]`;
  const myRequest = getPostRequest('MangHeApi/helpFriend',body);
  return new Promise(async resolve => {
    $.post(myRequest, (err, resp, data) => {
      try {
        /*
        * {"code":1,"content":true,"data":true,"errorMsg":"SUCCESS","msg":"SUCCESS","success":true}
        * */
        console.log(`助力结果:${data}`);
        data = JSON.parse(data);
        if(data.success === true && data.content === true){
          console.log(`助力成功`);
          $.helpFlag = true;
        }else{
          $.helpFlag = false;
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function getPostRequest(type,body){
  const url = `https://lop-proxy.jd.com/${type}`;
  const method = `POST`;
  const headers = {
    'Accept-Encoding' : `gzip, deflate, br`,
    'Host' : `lop-proxy.jd.com`,
    'Origin' : `https://jingcai-h5.jd.com`,
    'Connection' : `keep-alive`,
    'biz-type' : `service-monitor`,
    'Accept-Language' : `zh-cn`,
    'version' : `1.0.0`,
    'Content-Type' : `application/json;charset=utf-8`,
    "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0"),
    'Referer' : `https://jingcai-h5.jd.com`,
    'ClientInfo' : `{"appName":"jingcai","client":"m"}`,
    'access' : `H5`,
    'Accept' : `application/json, text/plain, */*`,
    'jexpress-report-time' : `${new Date().getTime()}`,
    'source-client' : `2`,
    'X-Requested-With' : `XMLHttpRequest`,
    'Cookie' :cookie,
    'LOP-DN' : `jingcai.jd.com`,
    'AppParams' : `{"appid":158,"ticket_type":"m"}`,
    'app-key' : `jexpress`
  };
  return {url: url, method: method, headers: headers, body: body};
}


function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0"),
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return;
            }
            //$.nickName = data['base'].nickname;
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}


// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3系统通知\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, 错误!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, 结束! \ud83d\udd5b ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

