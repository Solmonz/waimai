 {

//好小子 该接口由2022.1.1创作，2022.1.10已更新，更新内容:把vip剧院中的理论片剔除，把FEISU影视中的理论片剔除，修复资源采集，修复剧迷影音，剔除两个失效源，根据网友要求已添加快云影音（M）这个源。 所有源已全部测试完毕都可以正常使用。

  "sites": [
 {
"key":"csp_Ysgc",
"name":"影视工厂",
"type":3,
"api":"csp_Ysgc",
"searchable":1,
"quickSearch":0,
"filterable":1},
{
"key":"csp_xpath_zjdr",
"name":"追剧达人(XPath)",
"type":3,
"api":"csp_XPath",
"searchable":1,
"quickSearch":0,
"filterable":0,
"ext":"https://gitee.com/CCSHCoder/APP/raw/master/XPath/vipmv.json"},{
"key":"csp_Buka",
"name":"真不卡(爬虫)",
"type":3,
"api":"csp_Buka",
"searchable":1,
"quickSearch":0,
"filterable":1
},
{
"key":"csp_xpath_nfmov",
"name":"奈菲(XPath)",
"type":3,
"api":"csp_XPathNfMov",
"searchable":1,
"quickSearch":0,
"filterable":0,
"ext":"https://gitee.com/CCSHCoder/APP/raw/master/XPath/nfmovie.json"},
{
"key":"csp_xpath_lranc",
"name":"天天影视(XPath)",
"type":3,
"api":"csp_XPath",
"searchable":1,
"quickSearch":1,
"filterable":0,
"ext":"https://gitee.com/CCSHCoder/APP/raw/master/XPath/lranc.json"},{
"key":"csp_xpath_pianku",
"name":"片库(XPath)",
"type":3,
"api":"csp_XPath",
"searchable":1,
"quickSearch":1,
"filterable":0,
"ext":"https://gitee.com/CCSHCoder/APP/raw/master/XPath/pianku.json"},{
      "key": "2345影视",
      "name": "2345影视",
      "type": 0,
      "api": "http://2345.tgzy.cc:1005/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },{
    "key": "csp_xpath_aixixi",
    "name": "爱西西影视(XPath)",
    "type": 3,
    "api": "csp_XPath",
    "searchable": 1,
    "quickSearch": 1,
    "filterable": 0,
    "ext": "https://gitee.com/CCSHCoder/APP/raw/master/XPath/aixixi.json"
},
{
"key":"csp_N0ys",
"name":"90影视(爬虫)",
"type":3,
"api":"csp_N0ys",
"searchable":1,
"quickSearch":0,
"filterable":0},{
"key":"csp_Cokemv",
"name":"Cokemv(爬虫)",
"type":3,
"api":"csp_Cokemv",
"searchable":1,
"quickSearch":0,
"filterable":1},

{
      "key": "buka_spider",
      "name": "真不卡(SP)",
      "type": 3,
      "api": "csp_Buka",
      "searchable": 0,
      "quickSearch": 0,
      "filterable": 1,
      "ext": "https://litecucumber.coding.net/p/cat/d/config/git/raw/master/pub/ext/buka.json"
    },


        
       {
      "key": "奇艺会员(官源)",
      "name": "奇艺会员1",
      "type": 0,
      "api": "http://api.000zy.com/provide/vod/from/qiyi/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "腾讯视频(官源)",
      "name": "腾讯会员1",
      "type": 0,
      "api": "http://api.000zy.com/provide/vod/from/qq/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
	
   
    {
      "key": "芒果TV会员(官源)",
      "name": "芒果会员1",
      "type": 0,
      "api": "http://api.000zy.com/provide/vod/from/mgtv/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
	
   
	
    {
      "key": "优酷视频会员(官源)",
      "name": "优酷会员1",
      "type": 0,
      "api": "http://api.000zy.com/provide/vod/from/youku/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },	
{
"key":"腾讯(官源)",
"name":"腾讯2",
"type":0,
"api":"http://www.zycaiji.net:7788/api.php/provide/vod/from/qq/at/xml/",
"playUrl":"",
"searchable":1,
"quickSearch":1,
"filterable":0,
"categories":[]
},
{
"key":"优酷(官源)",
"name":"优酷2",
"type":0,
"api":"http://www.zycaiji.net:7788/api.php/provide/vod/from/youku/at/xml/",
"playUrl":"",
"searchable":1,
"quickSearch":1,
"filterable":0
},
{
"key":"爱奇艺(官源)",
"name":"爱奇艺2",
"type":0,
"api":"http://www.zycaiji.net:7788/api.php/provide/vod/from/qiyi/at/xml/",
"playUrl":"",
"searchable":1,
"quickSearch":1,
"filterable":0
},
    {
      "key": "影视界",
      "name": "影视界",
      "type": 0,
      "api": "http://video.yingworld.vip/api.php/provide/vod/at/xml/",
      "playUrl": "https://jx.ysgc.xyz/?url="
    },
    


  
    {
      "key": "30综合",
      "name": "30综合",
      "type": 0,
      "api": "http://api.000zy.com/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },{
      "key": "30搜狐",
      "name": "30搜狐",
      "type": 0,
      "api": "http://api.000zy.com/provide/vod/from/sohu/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },

     
    {
     "key": "csp_xpath_555",
     "name": "555电影(XPath)",
     "type": 3,
     "api": "csp_XPath",
     "searchable": 1,
     "quickSearch": 1,
     "filterable": 0,
     "ext": "https://cdn.jsdelivr.net/gh/lite-cucumber/CatVodTVSpider@master/xpath/555.json"
},
{
"key":"csp_xpath_czspp",
"name":"厂长资源(XPath)",
"type":3,
"api":"csp_XPath",
"searchable":1,
"quickSearch":1,
"filterable":0,
"ext":"https://cdn.jsdelivr.net/gh/hstsws008/mao@master/xpath/czspp.json"
},
   {
     "key": "csp_xpath_gimytv",
     "name": "剧迷影音(XPath)",
     "type": 3,
     "api": "csp_XPath",
     "searchable": 1,
     "quickSearch": 1,
     "filterable": 0,
     "ext": "https://gitee.com/CCSHCoder/APP/raw/master/XPath/gimytv.json"
}, 
    {
"key":"csp_xpath_onedianshi",
"name":"ONE蓝光(XPath)",
"type":3,
"api":"csp_XPath",
"searchable":1,
"quickSearch":0,
"filterable":0,
"ext":"https://gitee.com/CCSHCoder/APP/raw/master/XPath/onedianshi.json"
      }, 
      {
    "key": "csp_xpath_94sm",
    "name": "94影视(XPath)",
    "type": 3,
    "api": "csp_XPath",
    "searchable": 1,
    "quickSearch": 1,
    "filterable": 0,
    "ext": "https://cdn.jsdelivr.net/gh/lite-cucumber/CatVodTVSpider@master/xpath/94sm.json"
    },
    {
    "key": "csp_xpath_jpyszl",
    "name": "极品直链(XPathMac)",
    "type": 3,
    "api": "csp_XPathMac",
    "searchable": 1,
    "quickSearch": 1,
    "filterable": 0,
    "ext": "https://cdn.jsdelivr.net/gh/lite-cucumber/CatVodTVSpider@master/xpath/jpys.json"
    },
    {
"key":"csp_xpath_cjt",
"name":"CJT影视(XPath)",
"type":3,
"api":"csp_XPathMac",
"searchable":1,
"quickSearch":1,
"filterable":0,
"ext":"https://gitee.com/CCSHCoder/APP/raw/master/XPath/cjtys.json"},{
"key":"csp_xpath_jpys",
"name":"极品影视(XPath)",
"type":3,
"api":"csp_XPath",
"searchable":1,
"quickSearch":1,
"filterable":0,
"ext":"https://cdn.jsdelivr.net/gh/lite-cucumber/CatVodTVSpider@master/xpath/jpys.json"
},{
"key":"csp_xpath_dm84",
"name":"动漫巴士(XP)",
"type":3,
"api":"csp_XPath",
"searchable":1,
"quickSearch":0,
"filterable":0,
"ext":"https://cdn.jsdelivr.net/gh/YuanHsing/OneClickRun@master/xpath/dm84.json"
},
{
"key":"csp_xpath_ysjc",
"name":"影视工厂(XPath)",
"type":3,
"api":"csp_XPath",
"searchable":1,
"quickSearch":1,
"filterable":0,
"ext":"https://wds.ecsxs.com/216758.json"
},
{
     "key":"csp_xpath_smdyy",
     "name":"神马影院(XPath)",
     "type":3,
     "api":"csp_XPath",
     "searchable":1,
     "quickSearch":1,
     "filterable":0,
     "ext":"https://gitee.com/CCSHCoder/APP/raw/master/XPath/smdyy.json"
},
{
"key":"csp_xpath_1090ys2_y",
"name":"1090影视(XPathMac)",
"type":3,
"api":"csp_XPathMac",
"searchable":1,
"quickSearch":1,
"filterable":0,
"ext":"https://cdn.jsdelivr.net/gh/YuanHsing/OneClickRun@master/xpath/1090ys2.json"
    },
{
      "key": "阿里",
      "name": "阿里",
      "type": 0,
      "api": "https://bljiex.com/api.php/provide/vod/at/xml"
    },
    
    {
      "key": "樱花",
      "name": "樱花",
      "type": 1,
      "api": "https://m3u8.apiyhzy.com/api.php/provide/vod/"
    },{
      "key": "喵派对",
      "name": "喵派对",
      "type": 0,
      "api": "https://www.mgtv.one/api.php/provide/vod/at/xml/",
     "playUrl": "https://sudu.renrenmi.cc:2021/ku/?url="
    },{
      "key": "人人迷",
      "name": "人人迷",
      "type": 0,
      "api": "https://kuu.renrenmi.cc/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },{
      "key": "玺心",
      "name": "玺心",
      "type": 0,
      "api": "https://tvcj.arbd.cn/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    }, 
     {
      "key": "思古",
      "name": "思古",
      "type": 0,
      "api": "https://www.siguyy.com/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
   {
      "key": "麒麟",
      "name": "麒麟",
      "type": 0,
      "api": "http://www.qilinzyz.com/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },{
      "key": "萌果",
      "name": "萌果",
      "type": 0,
      "api": "http://api.appearoo.top/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch":1,
      "filterable": 0
    },{
      "key": "YT影视",
      "name": "YT影视",
      "type": 0,
      "api": "http://ytys.cc/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },{
      "key": "明日",
      "name": "明日",
      "type": 0,
      "api": "http://zy.zcocc.com/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },{
      "key": "一点",
      "name": "一点",
      "type": 0,
      "api": "https://collect.movurl.xyz/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },{
      "key": "舒渡",
      "name": "舒渡",
      "type": 0,
      "api": "http://www.lovctv.com/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
{
      "key": "雪人",
      "name": "雪人",
      "type": 0,
      "api": "https://zl.qd234.cn/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },{
      "key": "椰子",
      "name": "椰子",
      "type": 0,
      "api": "https://zy.gbxy.net.cn/api.php/provide/vod/at/xml",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
   {
      "key": "七七电影",
      "name": "七七电影",
      "type": 0,
      "api": "https://www.77diany.com/api.php/provide/vod/at/xml",
      "searchable": 1,
      "quickSearch":1,
      "filterable": 0
    },{
      "key": "清欢",
      "name": "清欢",
      "type": 0,
      "api": "http://free.qinghuanzy.com/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
   {
      "key": "迅播",
      "name": "迅播",
      "type": 0,
      "api": "https://www.qgvod.com/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },{
      "key": "云海",
      "name": "云海",
      "type": 0,
      "api": "http://101.34.7.151:600/api.php/provide/vod/at/xml/",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
"key":"Djx",
"name":"瓜皮TV(XPath)",
"type":3,"api": "csp_XPathFilter",
"searchable":1,
"quickSearch":1,
"filterable":1,"ext": "https://cdn.jsdelivr.net/gh/Tangsan99999/cat@main/rewrite/xpath/Djx.json"},



{ 
"key": "8090资源",
 "name": "8090资源", 
 "type": 0, "api": "http://zy.yilans.net:8090/api.php/provide/vod/at/xml/", "playUrl": "",
 "categories": [ "国产剧", "港台剧", "日韩剧", "欧美剧", "泰国剧", "综艺片", "动漫片", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "纪录片" ]
    },
    
    
   
 



   {
     "key": "csp_xpath_saohuo",
     "name": "骚火(XPath)",
     "type": 3,
     "api": "csp_XPath",
     "searchable": 1,
     "quickSearch": 1,
     "filterable": 0,
     "ext": "https://gitee.com/CCSHCoder/APP/raw/master/XPath/saohuo.json"
},
{
     "key": "csp_xpath_lezhutv",
     "name": "乐猪(XPath)",
     "type": 3,
     "api": "csp_XPath",
     "searchable": 1,
     "quickSearch": 1,
     "filterable": 0,
     "ext": "https://gitee.com/CCSHCoder/APP/raw/master/XPath/lezhutv.json"
},{
     "key": "csp_xpath_newfii",
     "name": "奈落影院(XPath)",
     "type": 3,
     "api": "csp_XPath",
     "searchable": 1,
     "quickSearch": 1,
     "filterable": 0,
     "ext": "https://gitee.com/CCSHCoder/APP/raw/master/XPath/newfii.json"
},
    
    {
      "key": "auete_spider",
      "name": "Auete影视(SP)",
      "type": 3,
      "api": "csp_Auete",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": "https://litecucumber.coding.net/p/cat/d/config/git/raw/master/pub/ext/auete.json"
    },
    {
      "key": "n0ys_spider",
      "name": "90影视(SP)",
      "type": 3,
      "api": "csp_N0ys",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0,
      "ext": "https://litecucumber.coding.net/p/cat/d/config/git/raw/master/pub/ext/90ys.json"
    },
    {
      "key": "cokemv_spider",
      "name": "Cokemv(SP)",
      "type": 3,
      "api": "csp_Cokemv",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": "https://litecucumber.coding.net/p/cat/d/config/git/raw/master/pub/ext/cokemv.json"
    },
    {
      "key": "adys_spider",
      "name": "爱迪影视(SP)",
      "type": 3,
      "api": "csp_Aidi",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": "https://litecucumber.coding.net/p/cat/d/config/git/raw/master/pub/ext/aidi.json"
    },
    {
      "key": "enlienli_spider",
      "name": "嗯哩嗯哩(SP)",
      "type": 3,
      "api": "csp_Enlienli",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
  
    {
     "key":"csp_xpath_pianba",
     "name":"片吧影院(XPath)",
     "type":3,
     "api":"csp_XPath",
     "searchable":1,
     "quickSearch":1,
     "filterable": 0,
     "ext":"https://gitee.com/CCSHCoder/APP/raw/master/XPath/pianba.json"
},
{
     "key":"csp_xpath_miniku",
     "name":"迷你库(XPath)",
     "type":3,
     "api":"csp_XPath",
     "searchable":1,
     "quickSearch":1,
     "filterable": 0,
     "ext":"https://gitee.com/CCSHCoder/APP/raw/master/XPath/miniku.json"
},

   
    {
"key":"csp_appys_v1_全能影视",
"name":"全能影视",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,
"ext":"v1_全能影视"
    }, 
    {
    "key": "csp_xpath_tvci",
    "name": "大师兄(XPath)",
    "type": 3,
    "api": "csp_XPathFilter",
    "searchable": 1,
    "quickSearch": 1,
    "filterable": 1,
    "ext": "https://cdn.jsdelivr.net/gh/lite-cucumber/CatVodTVSpider@master/xpath/tvci.json"
    },
    {
      "key": "飞速",
      "name": "FEISU影视",
      "type": 0,
      "api": "https://m3u8.feisuzyapi.com/vod/at/xml/",
      "playUrl": "https://www.feisuplayer.com/m3u8/?url=",
      "categories": [ "国产剧", "韩国剧", "日本剧", "大陆综艺", "海外剧", "欧美剧",  "动漫片", "动作片", "喜剧片", "爱情片", "科幻片", "恐怖片", "剧情片", "战争片", "记录片" ]
   
    },

    
  {
      "key": "资源采集",
      "name": "资源采集",
      "type": 0,
      "api": "http://www.zycaiji.net:7788/api.php/provide/vod/at/xml//n"
    },
    {
      "key": "毒蜥蜴影视",
      "name": "毒蜥蜴影视",
      "type": 0,
      "api": "https://www.duxiyi.com/api.php/provide/vod/at/xml/",
      "playUrl": "https://jx.renrenmi.cc/?url=",
      "searchable": 1,
      "quickSearch": 0,
      "filterable": 0
    },
   
{
"key":"csp_appys_xiaogui_躺平影视",
"name":"躺平影视(M)",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":0,
"filterable":1,
"ext":"xiaogui_躺平影视"
},
{
"key":"csp_appys_xiaogui_老韩综",
"name":"老韩综(M)",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":0,
"filterable":1,
"ext":"xiaogui_老韩综"
},
{
"key":"csp_appys_xiaogui_快云影音",
"name":"快云影音(M)",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,"ext":"xiaogui_快云影音"
},
{
"key":"csp_appys_xiaogui_毒舌电影",
"name":"毒舌电影(M)",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":0,
"filterable":1,
"ext":"xiaogui_毒舌电影"
},
{
"key":"csp_appys_xiaogui_蜜果TV",
"name":"蜜果TV(M)",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":0,
"filterable":1,
"ext":"xiaogui_蜜果TV"
},
{
"key":"csp_appys_xiaogui_极客",
"name":"极客影视(搜)",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,
"ext":"xiaogui_极客"
},
{
"key":"csp_appys_xiaogui_(无名)",
"name":"超级剧场(搜)",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,
"ext":"xiaogui_(无名)"
},
{
"key":"csp_appys_v1_雪梨视频",
"name":"雪梨视频(搜)",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,"ext":"v1_雪梨视频"
},
{
"key":"csp_appys_v1_绿箭影视", "name":"绿箭影视(M)", 
"type":3, 
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,
"ext":"v1_绿箭影视"
},
{
"key":"阿姨追剧",
"name":"阿姨追剧(搜)",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,
"ext":"v1_阿姨追剧"
},
{
"key":"VIP剧院",
"name":"VIP剧院(xml)",
"type":0,
"api":"https://www.dianyingn.cc/api.php/provide/vod/at/xml/",
"playUrl":"","categories":["动作片","喜剧片","爱情片","科幻片","恐怖片","剧情片","战争片","欧美剧","国产剧","港澳剧","韩剧","综艺","动漫","动漫电影","台湾剧","泰剧","纪录片"]
},
{
"key":"csp_appys_xiaogui_嗷呜动漫",
"name":"嗷呜动漫(搜)",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":0,
"filterable":1,
"ext":"xiaogui_嗷呜动漫"
},
{
"key":"csp_appys_v1_熊猫动漫",
"name":"熊猫动漫(搜)",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":0,
"filterable":1,
"ext":"v1_熊猫动漫"
},
{
"key":"csp_appys_xiaogui_污妖动漫",
"name":"污妖动漫(搜)",
"type":3,
"api":"csp_AppYs",
"searchable":1,
"quickSearch":0,
"filterable":1,
"ext":"xiaogui_污妖动漫"
},
{
"key":"csp_appys_xiaogui_星空影视", 
"name":"星空影视(M)", 
"type":3, 
"api":"csp_AppYs",
"searchable":1,
"quickSearch":0,
"filterable":1,
"ext":"xiaogui_星空影视"
},

{
"key":"csp_appys_xiaogui_抹茶猪", "name":"抹茶猪(M)", 
"type":3, 
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,"ext":"xiaogui_抹茶猪"
},
{
"key":"csp_appys_v1_初心影视", "name":"初心影视(M)", 
"type":3, 
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,
"ext":"v1_初心影视"
},



{
"key":"csp_appys_xiaogui_追剧达人", 
"name":"追剧达人(M)", 
"type":3, 
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,
"ext":"xiaogui_追剧达人"
},

{
"key":"csp_appys_v1_土豆TV", "name":"土豆TV(M)", 
"type":3, 
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,
"ext":"v1_土豆TV"
},
{
"key":"csp_appys_v1_爱看美剧", "name":"爱看美剧(M)", 
"type":3, 
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,
"ext":"v1_爱看美剧"
},
{"key":"csp_appys_xiaogui_天空影视", 
"name":"天空影视(M)", 
"type":3, 
"api":"csp_AppYs",
"searchable":1,
"quickSearch":0,
"filterable":1,
"ext":"xiaogui_天空影视"
},
{
"key":"csp_appys_v1_美剧虫", "name":"美剧虫(M)", 
"type":3, 
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,
"ext":"v1_美剧虫"
},

{
"key":"csp_appys_v1_淘剧社", "name":"淘剧社(M)", 
"type":3, 
"api":"csp_AppYs",
"searchable":1,
"quickSearch":1,
"filterable":1,
"ext":"v1_淘剧社"
}


  ], "lives":[{"group":"直播","channels":[{"name":"凤凰中文","urls":["http://playtv-live.ifeng.com/live/06OLEGEGM4G.m3u8","http://223.110.245.138/PLTV/3/224/3221226922/index.m3u8","https://zxtv.herokuapp.com/PLTV/sccn.php?id=test1_4000.m3u8","http://223.110.235.3/ott.js.chinamobile.com/PLTV/3/224/3221228057/index.m3u8$JS1080P","http://223.110.245.138/PLTV/3/224/3221226922/index.m3u8"]},{"name":"凤凰资讯","urls":["http://ott.js.chinamobile.com/TVOD/3/224/3221228098/index.m3u8","http://playtv-live.ifeng.com/live/06OLEEWQKN4.m3u8","http://223.110.235.13/ott.js.chinamobile.com/PLTV/3/224/3221228098/index.m3u8","http://223.110.235.13/ott.js.chinamobile.com/PLTV/3/224/3221228098/index.m3u8$JS1080P","http://117.169.124.37:6610/ysten-businessmobile/live/fhzixun/1.m3u8"]},{"name":"凤凰香港","urls":["http://ott.js.chinamobile.com/TVOD/3/224/3221228060/index.m3u8","http://223.110.236.2/ott.js.chinamobile.com/PLTV/3/224/3221228060/index.m3u8"]},{"name":"澳门莲花","urls":["http://nettvpro.live/hls/lotustv.php","http://anren.live/HK/BiIOU11uLA.m3u8"]},{"name":"4K央视","urls":["http://121.18.168.210/livetestcdn.cctv.cn/hls/4KHD/playlist.m3u8","http://host496323.us.ooqr.com/pltv/cctv4k_ts.php?hls=cq&set=0","http://liveop.cctv.cn/hls/4KHD/playlist.m3u8"]},{"name":"4K纯享","urls":["http://39.134.115.163:8080/PLTV/88888910/224/3221225786/index.m3u8"]},{"name":"4K欢笑","urls":["http://39.134.39.39/PLTV/88888888/224/3221226203/index.m3u8","http://39.134.18.66/dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221226582/index.m3u8"]},{"name":"4K电影","urls":["https://zxtv.herokuapp.com/PLTV/sccn.php?id=emdy4k_8000.m3u8"]},{"name":"CCTV-1","urls":["http://coocaa-ynbit-ws.ifengli.com:2386/live/cctv-1hd/1.m3u8","http://39.135.138.58:18890/PLTV/88888888/224/3221225642/index.m3u8","http://223.110.243.159/ott.js.chinamobile.com/PLTV/3/224/3221227725/index.m3u8$8M1080P","http://39.134.134.87/otttv.bj.chinamobile.com/TVOD/88888888/224/3221226226/1.m3u8","http://117.148.179.160/PLTV/88888888/224/3221231468/index.m3u8","http://111.13.42.43/PLTV/88888888/224/3221226438/1.m3u8","rtp://239.253.156.96:8550"]},{"name":"CCTV-2","urls":["http://39.135.138.60:18890/PLTV/88888910/224/3221225619/index.m3u8","http://39.135.138.60:18890/PLTV/88888910/224/3221225643/index.m3u8","http://39.134.18.82/dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221226195/index.m3u8$5M1080P50F","http://ott.js.chinamobile.com/TVOD/3/224/3221228118/index.m3u8","http://ott.js.chinamobile.com/TVOD/3/224/3221228094/index.m3u8","http://39.130.202.81:6610/gitv_live/G_CCTV-2-HD/1.m3u8"]},{"name":"CCTV-3","urls":["http://39.135.32.39:6610/000000001000/1000000001000011218/1.m3u8?channel-id=ystenlive&Contentid=1000000001000011218&livemode=1&stbId=005203FF000360100001001A34C0CD33&userToken=4ef1f6fdd53988bdf19472c73151206f21vv&usergroup=g21077200000&version=1.0&owaccma","http://117.148.179.37/PLTV/88888888/224/3221229875/index.m3u8","http://39.134.18.82/dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221226397/index.m3u8$5M1080P50F","http://111.40.196.9/PLTV/88888888/224/3221225588/index.m3u8","http://59.49.111.212/live.aishang.ctlcdn.com/00000110240245_1/encoder/0/playlist.m3u8?CONTENTID=00000110240245_1","http://223.110.254.137:6610/gitv/live1/G_CCTV-3-HQ/G_CCTV-3-HQ.m3u8#http://39.130.202.76:6610/gitv_live/CCTV-3/CCTV-3.m3u8"]},{"name":"CCTV-4","urls":["http://39.134.115.163:8080/PLTV/88888910/224/3221225621/index.m3u8$4M1080P","http://202.204.118.254/hls/ch5.m3u8","http://39.134.18.82/dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221226191/index.m3u8$5M1080P","http://ott.js.chinamobile.com/TVOD/3/224/3221228156/index.m3u8","http://39.130.202.81:6610/gitv_live/G_CCTV-4-HD/G_CCTV-4-HD.m3u8","http://202.204.118.254/hls/ch5.m3u8"]},{"name":"CCTV-5","urls":["http://ott.js.chinamobile.com/TVOD/3/224/3221228173/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225743/index.m3u8","http://129.226.106.4/zycfcdn.gdwlcloud.com/PLTV/88888888/224/3221225489/1.m3u8","http://39.135.138.58:18890/PLTV/88888888/224/3221225751/index.m3u8","http://39.134.39.37/PLTV/88888888/224/3221226146/index.m3u8"]},{"name":"CCTV-5+","urls":["http://39.134.65.175/PLTV/88888888/224/3221225507/index.m3u8","http://39.135.138.60:18890/PLTV/88888910/224/3221225649/index.m3u8","http://39.135.138.60:18890/PLTV/88888910/224/3221225706/index.m3u8","http://cctvalih5ca.v.myalicdn.com/live/cctv5plus_2/index.m3u8","http://117.169.124.46:6410/ysten-businessmobile/live/hdcctv05plus/1.m3u8","http://39.134.65.175/PLTV/88888888/224/3221225507/index.m3u8"]},{"name":"CCTV-6","urls":["http://223.110.246.70/ott.js.chinamobile.com/PLTV/4/224/3221227430/index.m3u8$8M1080P","http://39.134.115.163:8080/PLTV/88888910/224/3221225632/index.m3u8$7M1080P","http://39.134.18.82/dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221226393/index.m3u8$5M1080P50F","http://39.135.138.58:18890/PLTV/88888888/224/3221225632/index.m3u8","http://ott.js.chinamobile.com/TVOD/3/224/3221228185/index.m3u8","http://39.134.115.163:8080/PLTV/88888910/224/3221225632/index.m3u8","http://202.204.118.254/hls/ch11.m3u8","http://cg01.hrtn.net:9090/live/cctv6hd_4000.m3u8"]},{"name":"CCTV-7","urls":["http://ott.js.chinamobile.com/TVOD/3/224/3221227642/index.m3u8","http://cctvalih5ca.v.myalicdn.com/live/cctv7_2/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225492/index.m3u8","http://39.134.18.82/dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221226192/index.m3u8$5M1080P50F","http://39.135.138.60:18890/PLTV/88888910/224/3221225624/index.m3u8","rtp://239.69.1.103:10256"]},{"name":"CCTV-8","urls":["http://39.134.115.163:8080/PLTV/88888910/224/3221225635/index.m3u8$4M1080P","http://39.135.138.59:18890/PLTV/88888910/224/3221225631/index.m3u8","http://ott.js.chinamobile.com/TVOD/3/224/3221228079/index.m3u8","http://39.134.18.82/dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221226391/index.m3u8$5M1080P50F","http://223.110.245.151/ott.js.chinamobile.com/PLTV/3/224/3221227204/index.m3u8$4M1080P","http://39.134.39.39/PLTV/88888888/224/3221226150/index.m3u8$3M1080P","http://39.135.137.24:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221226008/1.m3u8","http://39.134.24.24/PLTV/88888888/224/3221225666/index.m3u8"]},{"name":"CCTV-9","urls":["http://ott.js.chinamobile.com/TVOD/3/224/3221227614/index.m3u8","http://39.134.115.163:8080/PLTV/88888910/224/3221225626/index.m3u8$3M1080P","http://111.63.117.13:6060/030000001000/G_CCTV-9/G_CCTV-9.m3u8","http://117.148.179.160/PLTV/88888888/224/3221231697/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225502/index.m3u8","http://39.134.134.86/otttv.bj.chinamobile.com/TVOD/88888888/224/3221226236/1.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225502/index.m3u8"]},{"name":"CCTV-10","urls":["http://117.148.179.137:80/PLTV/88888888/224/3221231666/1.m3u8","http://ott.js.chinamobile.com/TVOD/3/224/3221228078/index.m3u8","http://223.110.245.163/ott.js.chinamobile.com/PLTV/3/224/3221227317/index.m3u8$3M1080P","http://39.135.138.59:18890/PLTV/88888910/224/3221225627/index.m3u8","http://39.135.137.35:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225730/1.m3u8"]},{"name":"CCTV-11","urls":["http://117.148.179.163:80/PLTV/88888888/224/3221231711/1.m3u8","http://39.135.138.58:18890/PLTV/88888888/224/3221225628/index.m3u8","http://223.110.251.152:6610/cntv/live1/cctv-11/cctv-11","http://39.135.47.66/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225750/index.m3u8","http://39.135.137.38:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225597/1.m3u8"]},{"name":"CCTV-12","urls":["http://39.130.202.81:6610/gitv_live/G_CCTV-12-HD/G_CCTV-12-HD.m3u8","http://ott.js.chinamobile.com/TVOD/3/224/3221227655/index.m3u8","http://183.207.248.71/cntv/live1/HD-8000k-1080P-cctv12/HD-8000k-1080P-cctv12","http://111.40.196.9/PLTV/88888888/224/3221225498/index.m3u8"]},{"name":"CCTV-13","urls":["http://ott.js.chinamobile.com/TVOD/3/224/3221228224/index.m3u8","http://newsbsh5ca.v.live.baishancdnx.cn/live/newscctv13_2_900.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225504/index.m3u8","http://ott.js.chinamobile.com/TVOD/3/224/3221228224/index.m3u8","http://117.148.179.37/PLTV/88888888/224/3221229690/index.m3u8","http://223.110.242.200:6610/gitv/live1/G_CCTV-13-CQ/G_CCTV-13-CQ","http://ott.js.chinamobile.com/TVOD/3/224/3221228121/index.m3u8","http://39.134.115.163:8080/PLTV/88888910/224/3221225638/index.m3u8$3M1080P","http://111.13.42.8/PLTV/88888888/224/3221226568/1.m3u8","http://39.134.24.24/PLTV/88888888/224/3221225650/index.m3u8"]},{"name":"CCTV-14","urls":["http://59.51.68.40:1936/live/cctv14/playlist.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225573/index.m3u8","http://39.135.138.60:18890/PLTV/88888910/224/3221225639/index.m3u8","http://39.134.115.163:8080/PLTV/88888910/224/3221225639/index.m3u8$4M1080P","http://223.110.242.151:6610/cntv/live1/HD-8000k-1080P-cctv14/1.m3u8","http://39.130.202.76:6610/gitv_live/G_CCTV-14-HD/G_CCTV-14-HD.m3u8","http://223.110.242.146:6610/cntv/live1/HD-8000k-1080P-cctv14/1.m3u8"]},{"name":"CCTV-15","urls":["http://111.40.196.9/PLTV/88888888/224/3221225500/index.m3u8","http://223.110.242.26/ott.js.chinamobile.com/PLTV/3/224/3221227538/index.m3u8","http://ott.js.chinamobile.com/TVOD/3/224/3221227538/index.m3u8","http://39.135.138.58:18890/PLTV/88888910/224/3221225641/index.m3u8","http://39.134.65.162/PLTV/88888888/224/3221225513/index.m3u8","http://117.148.179.169:80/PLTV/88888888/224/3221231693/1.m3u8","http://39.135.47.66/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225693/index.m3u8"]},{"name":"CCTV-16","urls":["http://ott.js.chinamobile.com/PLTV/3/224/3221228144/index.m3u8","http://39.135.129.162/hwottcdn.ln.chinamobile.com/PLTV/88888890/224/3221226880/index.m3u8","http://39.135.129.162/hwottcdn.ln.chinamobile.com/TVOD/-/224/3221226880/index.m3u8","http://ott.js.chinamobile.com/TVOD/3/224/3221228144/index.m3u8","http://59.49.72.48/live.aishang.ctlcdn.com/00000110240388_1/encoder/0/playlist.m3u8?CONTENTID=00000110240388_1","https://live.olympicchannelchina.cn:443/aoyun/cctv16_1ud.m3u8"]},{"name":"CCTV-17","urls":["http://ott.js.chinamobile.com/TVOD/3/224/3221227726/index.m3u8","http://cctvalih5ca.v.myalicdn.com/live/cctv17_2/index.m3u8","http://39.134.115.163:8080/PLTV/88888910/224/3221225908/index.m3u8$4M1080P","http://39.135.47.66/cdnrrs.gx.chinamobile.com/PLTV/3/224/3221225833/index.m3u8","http://39.134.24.24/PLTV/88888888/224/3221225859/index.m3u8"]},{"name":"教育1台","urls":["http://117.148.179.156/PLTV/88888888/224/3221231714/index.m3u8","http://39.130.202.81:6610/gitv_live/G_CETV-1-HD/G_CETV-1-HD.m3u8","http://39.136.18.70/cdnrrs.gz.chinamobile.com/PLTV/88888888/224/3221225723/1/index.m3u8?fmt=ts2hls"]},{"name":"湖南卫视","urls":["http://223.110.245.151/ott.js.chinamobile.com/PLTV/3/224/3221227698/index.m3u8$4M1080P","http://223.110.244.133:6610/gitv/live1/G_HUNAN-CQ/G_HUNAN-CQ/","http://111.40.196.9/PLTV/88888888/224/3221225554/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225521/index.m3u8","http://39.134.18.82/dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221225799/index.m3u8$3M1080P","http://39.135.138.60:18890/PLTV/88888910/224/3221225745/index.m3u8","http://39.135.138.59:18890/PLTV/88888910/224/3221225704/index.m3u8","http://39.134.135.126/otttv.bj.chinamobile.com/TVOD/88888888/224/3221226509/1.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225519/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225594/index.m3u8"]},{"name":"湖南经视","urls":["http://124.232.233.17:6610/000000001001/201500000234/index.m3u8?IASHttpSessionId=SLB2046220190906022827233263&m3u8_level=2"]},{"name":"湖南都视","urls":["http://124.232.233.17:6610/000000001001/201500000235/index.m3u8?IASHttpSessionId=SLB2046220190906022827233263&m3u8_level=2"]},{"name":"湖南电影","urls":["http://124.232.233.17:6610/000000001001/201500000237/index.m3u8?IASHttpSessionId=SLB2046220190906022827233263&m3u8_level=2"]},{"name":"湖南电视剧","urls":["http://124.232.233.17:6610/000000001001/201500000236/index.m3u8?IASHttpSessionId=SLB2046220190906022827233263&m3u8_level=2"]},{"name":"湖南娱乐","urls":["http://124.232.233.17:6610/000000001001/201500000239/index.m3u8?IASHttpSessionId=SLB2046220190906022827233263&m3u8_level=2"]},{"name":"快乐垂钓","urls":["http://124.232.233.17:6610/000000001001/201500000245/index.m3u8?IASHttpSessionId=SLB2046220190906022827233263&m3u8_level=2","http://39.136.18.76/cdnrrs.gz.chinamobile.com/PLTV/88888888/224/3221226190/1/index.m3u8?fmt=ts2hls"]},{"name":"东安综合","urls":["http://play-dgv-xhncloud.voc.com.cn/live/5243_Twis7r.m3u8"]},{"name":"东方卫视","urls":["http://223.110.243.142/ott.js.chinamobile.com/PLTV/3/224/3221227597/index.m3u8","http://223.110.242.152:6610/gitv/live1/G_DONGFANG-CQ/G_DONGFANG-CQ/","http://39.135.138.59:18890/PLTV/88888910/224/3221225658/index.m3u8","http://39.134.135.126/otttv.bj.chinamobile.com/TVOD/88888888/224/3221226237/1.m3u8","http://39.135.138.59:18890/PLTV/88888910/224/3221225658/index.m3u8","http://39.135.138.59:18890/PLTV/88888910/224/3221225659/index.m3u8","http://219.151.31.43/liveplay-kk.rtxapp.com/live/program/live/hddfws/2300000/mnf.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225542/index.m3u8"]},{"name":"江苏卫视","urls":["http://223.110.246.82/ott.js.chinamobile.com/PLTV/4/224/3221227689/index.m3u8","http://223.110.242.158:6610/gitv/live1/G_JIANGSU-CQ/G_JIANGSU-CQ/","http://111.40.196.9/PLTV/88888888/224/3221225596/index.m3u8","http://39.135.138.59:18890/PLTV/88888910/224/3221225743/index.m3u8","http://39.134.18.82/dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221225800/index.m3u8$3M1080P","http://117.148.179.160/PLTV/88888888/224/3221231447/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225578/index.m3u8"]},{"name":"浙江卫视","urls":["http://223.110.246.73/ott.js.chinamobile.com/PLTV/4/224/3221227692/index.m3u8$4M1080P","http://39.134.18.82/dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221225798/index.m3u8$3M1080P","http://39.134.67.2:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225612/1.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225538/index.m3u8"]},{"name":"深圳卫视","urls":["http://223.110.246.71/ott.js.chinamobile.com/PLTV/4/224/3221227695/index.m3u8","http://223.110.244.148:6610/gitv/live1/G_SHENZHEN-CQ/G_SHENZHEN-CQ/","http://39.134.39.37/PLTV/88888888/224/3221226199/index.m3u8","http://39.134.39.39/PLTV/88888888/224/3221226199/index.m3u8","http://39.134.135.126/otttv.bj.chinamobile.com/TVOD/88888888/224/3221226245/1.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225602/index.m3u8"]},{"name":"北京卫视","urls":["http://223.110.246.72/ott.js.chinamobile.com/PLTV/4/224/3221227694/index.m3u8$4M1080P","http://223.110.246.72/ott.js.chinamobile.com/PLTV/4/224/3221227694/index.m3u8","http://223.110.244.200:6610/gitv/live1/G_BEIJING-CQ/G_BEIJING-CQ/","http://39.134.135.126/otttv.bj.chinamobile.com/TVOD/88888888/224/3221226436/1.m3u8","http://39.134.39.37/PLTV/88888888/224/3221226161/index.m3u8","http://39.134.24.24/PLTV/88888888/224/3221225646/index.m3u8"]},{"name":"冬奥纪实","urls":["http://39.135.138.58:18890/PLTV/88888910/224/3221225676/index.m3u8","http://39.135.138.58:18890/PLTV/88888910/224/3221225676/index.m3u8"]},{"name":"第一财经","urls":["http://39.134.39.37/PLTV/88888888/224/3221226172/index.m3u8","http://39.134.39.39/PLTV/88888888/224/3221226172/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225497/index.m3u8","http://39.134.39.39/PLTV/88888888/224/3221226172/index.m3u8"]},{"name":"天津卫视","urls":["http://117.148.179.37/PLTV/88888888/224/3221228818/index.m3u8","http://cdn2.ynumc.com:8278/tjws/playlist.m3u8","http://39.136.18.76/cdnrrs.gz.chinamobile.com/PLTV/88888888/224/3221225756/1/index.m3u8?fmt=ts2hls"]},{"name":"安徽卫视","urls":["http://39.134.39.39/PLTV/88888888/224/3221226205/index.m3u8","http://39.135.138.59:18890/PLTV/88888910/224/3221225691/index.m3u8","http://39.134.39.37/PLTV/88888888/224/3221226205/index.m3u8","http://39.134.24.24/PLTV/88888888/224/3221225638/index.m3u8"]},{"name":"重庆卫视","urls":["http://183.207.248.71:80/cntv/live1/HD-8000k-1080P-chongqingstv/HD-8000k-1080P-chongqingstv","http://39.135.138.59:18890/PLTV/88888910/224/3221225734/index.m3u8","http://39.134.24.24/PLTV/88888888/224/3221225592/index.m3u8"]},{"name":"东南卫视","urls":["http://39.135.138.59:18890/PLTV/88888910/224/3221225657/index.m3u8","http://223.110.243.162/ott.js.chinamobile.com/PLTV/3/224/3221227553/index.m3u8$4M1080P","http://39.134.135.84/otttv.bj.chinamobile.com/TVOD/88888888/224/3221226496/1.m3u8"]},{"name":"海峡卫视","urls":["rtsp://183.252.166.199/PLTV/88888888/224/3221226128/10000100000000060000000002434539_0.smil"]},{"name":"广东卫视","urls":["http://39.135.138.60:18890/PLTV/88888910/224/3221225701/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225533/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225531/index.m3u8"]},{"name":"广西卫视","urls":["http://39.130.202.76:6610/gitv_live/G_GUANGXI-HD/G_GUANGXI-HD.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225518/index.m3u8"]},{"name":"贵州卫视","urls":["http://cdn2.ynumc.com:8278/gzws/playlist.m3u8","http://39.130.202.76:6610/gitv_live/G_GUIZHOU-HD/G_GUIZHOU-HD.m3u8","http://cdn1.ynumc.com:8278/gzws/playlist.m3u8"]},{"name":"河北卫视","urls":["http://ott.js.chinamobile.com/TVOD/3/224/3221228159/index.m3u8","http://39.134.66.66/PLTV/88888888/224/3221225867/index.m3u8","http://39.134.66.66/PLTV/88888888/224/3221225867/index.m3u8"]},{"name":"河南卫视","urls":["http://ott.js.chinamobile.com/TVOD/3/224/3221228221/index.m3u8","rtsp://183.252.176.54:554/PLTV/88888888/224/3221226076/10000100000000060000000002296917_0.smil","http://39.134.24.24/PLTV/88888888/224/3221225716/index.m3u8"]},{"name":"湖北卫视","urls":["http://39.135.138.59:18890/PLTV/88888910/224/3221225699/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225566/index.m3u8"]},{"name":"吉林卫视","urls":["rtsp://183.252.166.199/PLTV/88888888/224/3221226792/48616745.smil","http://39.134.24.24/PLTV/88888888/224/3221225804/index.m3u8"]},{"name":"江西卫视","urls":["http://39.134.39.39/PLTV/88888888/224/3221226207/index.m3u8","http://117.148.179.160/PLTV/88888888/224/3221231964/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225591/index.m3u8"]},{"name":"辽宁卫视","urls":["http://ott.js.chinamobile.com/TVOD/3/224/3221228162/index.m3u8","http://39.135.138.59:18890/PLTV/88888910/224/3221225696/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225593/index.m3u8"]},{"name":"黑龙江卫视","urls":["http://39.135.138.59:18890/PLTV/88888910/224/3221225736/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225539/index.m3u8","http://117.148.179.160/PLTV/88888888/224/3221231967/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225541/index.m3u8"]},{"name":"山东卫视","urls":["http://59.49.111.212/live.aishang.ctlcdn.com/00000110240254_1/encoder/0/playlist.m3u8?CONTENTID=00000110240254_1","http://39.135.138.59:18890/PLTV/88888910/224/3221225697/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225546/index.m3u8"]},{"name":"云南卫视","urls":["rtsp://183.252.166.199/PLTV/88888888/224/3221226108/10000100000000060000000002310150_0.smil","rtsp://183.252.176.54:554/PLTV/88888888/224/3221226108/10000100000000060000000002310150_0.smil","http://39.134.24.24/PLTV/88888888/224/3221225696/index.m3u8"]},{"name":"青海卫视","urls":["http://live.geermurmt.com/qhws/sd/live.m3u8"]},{"name":"五星体育","urls":["http://112.25.48.11/live/program/live/ssty/4000000/mnf.m3u8","http://219.151.31.43/liveplay-kk.rtxapp.com/live/program/live/ssty/2300000/mnf.m3u8","http://112.132.209.46/liveplay-kk.rtxapp.com/live/program/live/ssty/4000000/mnf.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225503/index.m3u8","http://39.134.24.24/PLTV/88888888/224/3221225718/index.m3u8"]},{"name":"劲爆体育","urls":["http://112.132.209.46/liveplay-kk.rtxapp.com/live/program/live/jbtyhd/4000000/mnf.m3u8","http://shbu.live.bestvcdn.com.cn:8080/live/program/live/jbtyhd/2300000/mnf.m3u8","http://219.151.31.43/liveplay-kk.rtxapp.com/live/program/live/jbtyhd/2300000/mnf.m3u8"]},{"name":"新视觉HD","urls":["http://183.207.255.188/live/program/live/xsjhd/4000000/mnf.m3u8","http://112.132.209.46/liveplay-kk.rtxapp.com/live/program/live/xsjhd/4000000/mnf.m3u8","http://219.151.31.43/liveplay-kk.rtxapp.com/live/program/live/xsjhd/2300000/mnf.m3u8","http://shbu.live.bestvcdn.com.cn:8080/live/program/live/xsjhd/2300000/mnf.m3u8"]},{"name":"魅力足球","urls":["http://183.207.255.188/live/program/live/mlyyhd/4000000/mnf.m3u8","http://cg01.hrtn.net:9090/live/mlyyhd_4000.m3u8"]},{"name":"超级体育","urls":["http://39.135.138.59:18890/PLTV/88888910/224/3221225622/index.m3u8","http://39.134.24.24/PLTV/88888888/224/3221225718/index.m3u8"]},{"name":"精品体育","urls":["http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225674/1.m3u8","http://39.134.67.7:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225674/1.m3u8"]},{"name":"CHC高清","urls":["http://111.20.33.93/PLTV/88888893/224/3221226463/index.m3u8","http://39.134.18.68/dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226463/1.m3u8","http://39.134.18.69/dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226463/1.m3u8","http://y3y4.f3322.net:808/hls/81/index.m3u8 ","http://y3y4.f3322.net:808/hls/82/index.m3u8","http://111.20.109.68:6610/yinhe/2/ch00000090990000002065/index.m3u8?virtualDomain=yinhe.live_hls.zte.com ","http://39.134.18.68/dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221226463/index.m3u8"]},{"name":"CHC动作","urls":["http://111.20.33.93/PLTV/88888893/224/3221226465/index.m3u8","http://39.134.18.68/dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226465/1.m3u8","http://39.134.18.68/dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226465/index.m3u8"]},{"name":"CHC家庭","urls":["http://111.20.33.93/PLTV/88888893/224/3221226462/index.m3u8","http://39.134.18.68/dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226462/1.m3u8","http://y3y4.f3322.net:808/hls/83/index.m3u8","http://y3y4.f3322.net:808/hls/81/index.m3u8 ","http://39.134.18.68/dbiptv.sn.chinamobile.com/PLTV/88888888/224/3221226462/1.m3u8","http://39.134.18.68/dbiptv.sn.chinamobile.com/PLTV/88888890/224/3221226462/index.m3u8"]},{"name":"北京电影频道","urls":["http://117.148.179.176/PLTV/88888888/224/3221231565/index.m3u8"]},{"name":"东方影视频道","urls":["http://117.148.179.160/PLTV/88888888/224/3221231639/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225615/index.m3u8","http://39.134.24.24/PLTV/88888888/224/3221225708/index.m3u8"]},{"name":"黑莓电影频道","urls":["http://111.40.196.9/PLTV/88888888/224/3221225610/index.m3u8","http://117.148.179.160/PLTV/88888888/224/3221231621/index.m3u8","http://39.134.24.24/PLTV/88888888/224/3221225708/index.m3u8"]},{"name":"动作电影频道","urls":["http://111.40.196.9/PLTV/88888888/224/3221225620/index.m3u8","http://117.148.179.160/PLTV/88888888/224/3221231565/index.m3u8","http://117.148.179.160/PLTV/88888888/224/3221231556/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225622/index.m3u8"]},{"name":"超级电影频道","urls":["http://117.148.179.160/PLTV/88888888/224/3221231568/index.m3u8","http://117.148.179.160/PLTV/88888888/224/3221231564/index.m3u8","http://39.134.135.126/otttv.bj.chinamobile.com/TVOD/88888888/224/3221226233/1.m3u8"]},{"name":"精品大剧","urls":["http://111.40.196.9/PLTV/88888888/224/3221225612/index.m3u8","http://39.134.135.126/otttv.bj.chinamobile.com/TVOD/88888888/224/3221226331/1.m3u8"]},{"name":"爱情喜剧","urls":["http://111.40.196.9/PLTV/88888888/224/3221225616/index.m3u8","http://111.40.196.9/PLTV/88888888/224/3221225624/index.m3u8"]},{"name":"IPTV古装剧场","urls":["http://58.20.64.92:9999/tsfile/live/1044_1.m3u8"]},{"name":"超级电视剧","urls":["http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225716/1.m3u8","http://39.134.67.55:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225716/1.m3u8","http://39.134.67.7:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225716/1.m3u8"]},{"name":"超级综艺","urls":["http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225714/1.m3u8",",http://39.134.67.7:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225714/1.m3u8"]},{"name":"潮妈辣婆","urls":["http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225685/1.m3u8","http://39.135.137.15:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225685/1.m3u8"]},{"name":"明星大片","urls":["http://39.134.67.2:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225664/1.m3u8","http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225664/1.m3u8"]},{"name":"古装剧场","urls":["http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225663/1.m3u8","http://39.134.67.7:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225663/1.m3u8"]},{"name":"欢乐剧场","urls":["http://39.135.137.15:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225742/1.m3u8","http://39.135.137.24:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225742/1.m3u8","http://39.135.137.32:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225742/1.m3u8"]},{"name":"家庭剧场","urls":["http://39.134.67.2:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225677/1.m3u8","http://39.134.67.55:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225677/1.m3u8","http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225677/1.m3u8"]},{"name":"悬疑剧场","urls":["http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225665/1.m3u8","http://39.134.67.7:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225665/1.m3u8"]},{"name":"军旅剧场","urls":["http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225676/1.m3u8","http://39.134.67.7:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225676/1.m3u8"]},{"name":"金牌综艺","urls":["http://39.135.137.32:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225666/1.m3u8","http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225666/1.m3u8","http://39.135.137.38:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225666/1.m3u8"]},{"name":"精品大剧","urls":["http://39.134.67.2:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225670/1.m3u8","http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225670/1.m3u8","http://39.134.67.7:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225670/1.m3u8"]},{"name":"精品记录","urls":["http://39.134.67.2:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225672/1.m3u8","http://39.134.67.55:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225672/1.m3u8"]},{"name":"军事评论","urls":["http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225668/1.m3u8","http://39.134.67.7:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225668/1.m3u8","http://183.207.248.71:80/cntv/live1/n-junshipl/n-junshipl"]},{"name":"农业致富","urls":["http://39.134.67.2:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225683/1.m3u8","http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225683/1.m3u8"]},{"name":"黑莓动画","urls":["http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225662/1.m3u8","http://39.134.67.7:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225662/1.m3u8"]},{"name":"芒果TV直播","urls":["http://117.148.179.160/PLTV/88888888/224/3221231276/index.m3u8","http://117.148.179.160/PLTV/88888888/224/3221231301/index.m3u8","http://117.148.179.160/PLTV/88888888/224/3221231310/index.m3u8","http://117.148.179.160/PLTV/88888888/224/3221231273/index.m3u8"]},{"name":"游戏直播","urls":["http://39.134.66.66/PLTV/88888888/224/3221225559/index.m3u8"]},{"name":"旋舞未来","urls":["http://39.134.67.6:80/ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225719/1.m3u8"]}]}],"parses":[{"name":"Json并发","type":2,"url":"Parallel"},{"name":"Json轮询","type":2,"url":"Sequence"}, {
      "name":"m3u8",
      "url":"https://jx.m3u8.tv/jiexi/?url="
    },{"name":"003","type":1,"url":"http://47.94.137.151:8089/?url="},{
      "name": "江北",
      "url": "https://jx.vjiangbei.com/khd/?uid=224314&key=ejmtwyBGHJNQUX1469&url="
    }, {
      "name":"龙腾",
      "url":"http://jifei.longtengzy.fun/video/?url="
    },
    {
      "name":"影视工厂",
      "url":"https://jx.ysgc.xyz/?url="
    }, {
      "name": "追剧达人",
      "url": "https://vip123kan.vip/m3u8.php?url="
    }, {
      "name": "虾米",
      "url": "https://jx.xmflv.com/?url="
    },
    {
      "name": "星空",
      "url": "http://60jx.com/?url="
    }, 
    {
      "name": "萌欣",
      "url": "https://jiexi.linzhiyuan.xyz/jiexi/?url="}, {
     "name": "Json.VodJX",
     "url": "http://admin.vodjx.top/json.php?url=",
     "type": 1
    },
    {
      "name": "VodJX1",
      "url": "https://api.vodjx.top/?url="
    }, 
    {
      "name": "VodJX2",
      "url": "https://jx.vodjx.top/jiexi.php?url="
    },  {
      "name": "解析啦",
      "url": "https://api.jiexi.la/?url="
    },
    {
      "name": "8090",
      "url": "https://www.8090g.cn/?url="
    },
    {
      "name": "Ckplayer",
      "url": "https://www.ckplayer.vip/jiexi/?url="
    },
{
            "name": "ok3389",
            "url": "https://api.okjx.cc:3389/jx.php?url="
        },
{
            "name": "游艺",
            "url": "https://api.u1o.net/?url="
        },   
        {"name":"高清1","type":0,"url":"https://titan.mgtv.com.jumi.tv/player/?url="},
	{"name":"高清2","type":0,"url":"https://dmku.dijiaxia.com/?url="},
	{"name":"高清3","type":0,"url":"https://jx.ppflv.com/?url="},
	{"name":"高清4","type":0,"url":"http://an61.com/jx/vip?v="},{
      "name": "明日",
      "url": "https://jx.yingxiangbao.cn/vip.php?url="
    },
    {
      "name": "2A资源",
      "url": "https://www.2ajx.com/vip.php?url="
    },{
      "name": "人人迷",
      "url": "https://jx.renrenmi.cc/?url="
    },
  {
      "name": "VIP尊享",
      "url": "https://player.maqq.cn/?url="
    }, {
      "name": "瓜瓜优选",
      "type": 2,
      "url": "Preference"
    },{
      "name": "小强TV",
      "type": 1,
      "url": "https://json.pangujiexi.com:12345/json.php?url=",
      "t": 143,
      "i": "check at 2021-12-10 08:39:33"
    },{"name":"高手影视","type":1,"url":"http://vipjh.chunbaotaiji.com/?url="},{"name":"极客","type":1,"url":"https://sbsb.i8k.cc/?url="},{"name":"久九影视","type":1,"url":"https://json.hfyrw.com/mao.go?url="},{"name":"TV酷","type":1,"url":"http://a.dxzj88.com/jhjson/?url="},{"name":"星空影视","type":1,"url":"http://api.vip123kan.vip/?url="},{"name":"遗忘影视","type":1,"url":"http://gq.bywdtk.cn/?url="},{"name":"影阅阁1","type":1,"url":"https://json.pangujiexi.com:12345/json.php?url=","t":184,"i":"checkat2021-12-2819:44:30"},{"name":"DC影视","type":1,"url":"https://api.m3u8.tv:5678/home/api?type=ys&uid=7665652&key=dglmnwEFILMOPRW056&url=","t":206,"i":"checkat2021-12-2819:44:09"},{"name":"筋斗云","type":1,"url":"https://api.m3u8.tv:5678/home/api?type=ys&uid=1494542&key=ijmqvwxABEHILMOT48&url=","t":282,"i":"checkat2021-12-2819:44:44"},{"name":"4K影院1","type":1,"url":"https://api.m3u8.tv:5678/home/api?type=ys&uid=1095368&key=cdgjpsuDFLNRTUVY03&url=","t":335,"i":"checkat2021-12-2819:45:32"},{"name":"手指影视","type":1,"url":"http://a.dxzj88.com/jhjson/?url=","t":434,"i":"checkat2021-12-2819:44:19"},{"name":"黄河影视","type":1,"url":"http://jx.ledu8.cn/api/?key=P8QSgO61p1MpHV2ALn&url=","t":450,"i":"checkat2021-12-2819:44:01"},{"name":"优视影视","type":1,"url":"http://ccc.ysys.asia/jx/?id=2&url=","t":481,"i":"checkat2021-12-2819:44:55"},{"name":"看剧吧1","type":1,"url":"http://47.100.138.210:91/home/api?type=ys&uid=243653&key=kqswxyABGHKLQSV127&url=","t":559,"i":"checkat2021-12-2819:45:42"},{"name":"麻瓜视频1","type":1,"url":"https://jhjx.ptygx.com/xttyjx.php/?url=","t":598,"i":"checkat2021-12-2819:44:16"},{"name":"星辰视频","type":1,"url":"https://cs.024zs.com:4433/api/?key=2yqrXys9F3TcDiRz3k&url=","t":629,"i":"checkat2021-12-2819:45:37"},{"name":"阿姨追剧1","type":1,"url":"https://cs.024zs.com:4433/api/?key=P3lAZ3QJlv6KBNNLHM&url=","t":673,"i":"checkat2021-12-2819:45:16"},{"name":"影阅阁","type":1,"url":"http://api1.json.vin:4433/api/?key=WPDh6vf0aT0ahepWzW&url=","t":721,"i":"checkat2021-12-2819:44:27"},{"name":"01","type":0,"url":"https://jx.parwix.com:4433/player/?url="},{"name":"02","type":0,"url":"https://vip.2ktvb.com/player/?url="},{"name":"03","type":0,"url":"https://vip.parwix.com:4433/player/analysis.php?v="},{"name":"04","type":0,"url":"https://api.okjx.cc:3389/jx.php?url="},{"name":"05","type":0,"url":"https://9kjx.com/?url="},{"name":"06","type":0,"url":"https://okjx.cc/?url="}],"flags":["youku","qq","iqiyi","qiyi","letv","sohu","tudou","pptv","mgtv","wasu","renrenmi","miaoparty","bilibili"],"ijk":[{"group":"软解码","options":[{"category":4,"name":"opensles","value":"0"},{"category":4,"name":"overlay-format","value":"842225234"},{"category":4,"name":"framedrop","value":"1"},{"category":4,"name":"soundtouch","value":"1"},{"category":4,"name":"start-on-prepared","value":"1"},{"category":1,"name":"http-detect-range-support","value":"0"},{"category":1,"name":"fflags","value":"fastseek"},{"category":2,"name":"skip_loop_filter","value":"48"},{"category":4,"name":"reconnect","value":"1"},{"category":4,"name":"enable-accurate-seek","value":"0"},{"category":4,"name":"mediacodec","value":"0"},{"category":4,"name":"mediacodec-auto-rotate","value":"0"},{"category":4,"name":"mediacodec-handle-resolution-change","value":"0"},{"category":4,"name":"mediacodec-hevc","value":"0"},{"category":1,"name":"dns_cache_timeout","value":"600000000"}]},{"group":"硬解码","options":[{"category":4,"name":"opensles","value":"0"},{"category":4,"name":"overlay-format","value":"842225234"},{"category":4,"name":"framedrop","value":"1"},{"category":4,"name":"soundtouch","value":"1"},{"category":4,"name":"start-on-prepared","value":"1"},{"category":1,"name":"http-detect-range-support","value":"0"},{"category":1,"name":"fflags","value":"fastseek"},{"category":2,"name":"skip_loop_filter","value":"48"},{"category":4,"name":"reconnect","value":"1"},{"category":4,"name":"enable-accurate-seek","value":"0"},{"category":4,"name":"mediacodec","value":"1"},{"category":4,"name":"mediacodec-auto-rotate","value":"1"},{"category":4,"name":"mediacodec-handle-resolution-change","value":"1"},{"category":4,"name":"mediacodec-hevc","value":"1"},{"category":1,"name":"dns_cache_timeout","value":"600000000"}]}],"ads":["mimg.0c1q0l.cn","www.googletagmanager.com","www.google-analytics.com","mc.usihnbcq.cn","mg.g1mm3d.cn","mscs.svaeuzh.cn","cnzz.hhttm.top","tp.vinuxhome.com","cnzz.mmstat.com","www.baihuillq.com","s23.cnzz.com","z3.cnzz.com","c.cnzz.com","stj.v1vo.top","z12.cnzz.com","img.mosflower.cn","tips.gamevvip.com","ehwe.yhdtns.com","xdn.cqqc3.com","www.jixunkyy.cn","sp.chemacid.cn","hm.baidu.com","s9.cnzz.com","z6.cnzz.com","um.cavuc.com","mav.mavuz.com","wofwk.aoidf3.com","z5.cnzz.com","xc.hubeijieshikj.cn","tj.tianwenhu.com","xg.gars57.cn","k.jinxiuzhilv.com","cdn.bootcss.com","ppl.xunzhuo123.com","xomk.jiangjunmh.top","img.xunzhuo123.com","z1.cnzz.com","s13.cnzz.com","xg.huataisangao.cn","z7.cnzz.com","xg.huataisangao.cn","z2.cnzz.com","s96.cnzz.com","q11.cnzz.com","thy.dacedsfa.cn","xg.whsbpw.cn","s19.cnzz.com","z8.cnzz.com","s4.cnzz.com","f5w.as12df.top","ae01.alicdn.com","www.92424.cn","k.wudejia.com","vivovip.mmszxc.top","qiu.xixiqiu.com","cdnjs.hnfenxun.com","cms.qdwght.com"],"spider":"https://gitee.com/binbo1/maotv/raw/master/custom_spider.jar","wallpaper":"https://api.ixiaowai.cn/gqapi/gqapi.php"}
