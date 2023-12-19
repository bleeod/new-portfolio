import{w as me,b as fe}from"./paths.a01b3d31.js";const ue="@riadh-adrani-theme",ge=e=>{localStorage.setItem(ue,JSON.stringify(e))},ce=me(!1),oe=e=>ce.update($=>{var g;const b=typeof e=="boolean"?e:!$;return ge(b),(g=document.querySelector(":root"))==null||g.setAttribute("data-theme",b?"dark":"light"),b}),we=()=>{const e=localStorage.getItem(ue);e?oe(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&oe(!0)},se=e=>`${fe}/logos/${e}`,n=(e,$)=>$?{dark:se($),light:se(e)}:se(e),F={AWS:n("aws.svg"),Bootstrap:n("bootstrap.svg"),C:n("c.svg"),Cpp:n("cpp.svg"),Celery:n("celery.svg"),Django:n("django.svg"),FastApi:n("fastapi"),Flask:n("flask.svg"),Go:n("go.svg"),Kafka:n("kafka.svg"),Neo4j:n("neo4j.svg"),Nginx:n("nginx.svg"),Numpy:n("numpy.svg"),Pandas:n("pandas.svg"),RabbitMQ:n("rabbitmq.svg"),Rust:n("rust.svg","rust-dark.png"),Scrapy:n("scrapy.png"),Selenium:n("selenium.svg"),Docker:n("docker.svg"),Kubernetes:n("kubernetees.svg"),Csharp:n("csharp.svg"),Xamarin:n("xamarin.svg"),TypeScript:n("ts.png"),VueJs:n("vue.png"),ReactJs:n("react.svg"),Dart:n("dart.png"),Kotlin:n("kotlin.png"),Python:n("python.png"),NodeJs:n("node.png"),Deno:n("deno.png","deno-dark.png"),Svelte:n("svelte.png"),ExpressJs:n("express.png"),JavaScript:n("js.png"),Fastify:n("fastify.svg","fastify-dark.png"),NestJs:n("nest.svg"),Quasar:n("quasar.svg"),SolidJs:n("solid.svg"),Electron:n("electron.png"),Flutter:n("flutter.svg"),Java:n("java.png"),AdonisJs:n("adonis.png"),Android:n("android.png"),Angular:n("angular.png"),PostgreSQL:n("postgres.png"),Firebase:n("firebase.png"),Sass:n("sass.png"),Unknown:n("no-img.svg"),MongoDB:n("mongodb.svg"),Redis:n("redis.svg"),Tailwind:n("tailwind.svg"),HTML:n("html.svg"),Premiere:n("premiere.svg"),Photoshop:n("photoshop.svg"),CSS:n("css.svg"),AfterEffects:n("after-effects.svg"),Illustrator:n("illustrator.svg"),Nuxt:n("nuxt.png"),Vite:n("vite.png"),Vitest:n("vitest.svg"),Jest:n("jest.png"),Unocss:n("unocss.svg"),Ruvy:n("ruvy.svg"),Postcss:n("postcss.svg"),Lua:n("lua.png"),UI:n("ui.png"),Translation:n("translation.png"),Wace:n("wace.png"),Jamies:n("jamies.PNG"),Seda:n("seda.png"),Fizze:n("Fizze.png"),SGC:n("SGC.png")};let le;ce.subscribe(e=>le=e);const Se=e=>typeof e=="string"?e:le?e.dark:e.light,re=e=>e,de=[re({slug:"lua",color:"blue",description:"I possess a comprehensive Lua proficiency, encompassing both the traditional Lua and its Roblox variant, Luau. With approximately three years of hands-on experience, I demonstrate adeptness in utilizing both versions effectively. This expertise underscores my ability to navigate diverse Lua development scenarios, ensuring a nuanced and skilled approach. My background serves as a testament to a thorough understanding and practical application of Lua, enhancing my capacity to contribute meaningfully to varied projects.",logo:F.Lua,name:"Lua"}),re({slug:"ui",color:"gray",description:"I boast a year of dedicated experience in Roblox user interface design, witnessing notable progress in my endeavors. Proficient in industry-standard software such as Adobe Photoshop, Paint.NET, and Figma, I employ these tools to meticulously craft high-quality user interfaces and experiences. This commitment to utilizing advanced design platforms underscores my dedication to delivering impactful and visually compelling solutions within the dynamic realm of Roblox.",logo:F.UI,name:"User Interface"}),re({slug:"translation",color:"gray",description:"Drawing upon my robust history on the Roblox platform as a Romanian translator, I have collaborated with various agencies and independently, establishing myself as a premier professional. Renowned for delivering unparalleled quality, competitive pricing, and efficient turnaround times, I am recognized as one of the foremost Romanian translators. My portfolio includes collaboration on esteemed games such as Doomspire Brickbattle, Vehicle Simulator, Vehicle Tycoon, Dealership Tycoon, Horrific Housing, among others, underscoring my diverse expertise in the gaming domain.",logo:F.Translation,name:"Translation"})],q=(...e)=>de.filter($=>e.includes($.slug));var O=(e=>(e.GitHub="github",e.StackOverflow="stackoverflow",e.Twitter="twitter",e.Linkedin="linkedin",e.Email="email",e.Facebook="facebook",e.Youtube="youtube",e))(O||{}),Z=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e))(Z||{});const pe=[{slug:"game-development-contractor",company:"Survival Game Central",description:"Hired as a contractor to finish up a complex anime simulator game.",contract:Z.Contract,type:"Game Development",location:"Remote",period:{from:new Date(2021,7,1),to:new Date(2021,9,1)},skills:q("lua"),name:"Contractor",color:"#ffffff",links:[{to:"https://www.roblox.com/groups/4325629/Survival-Game-Central#!/about",label:"Roblox Group"}],logo:F.SGC,shortDescription:""},{slug:"game-development-contractor",company:"Fizze",description:"Hired as a contractor to rewrite the premium membership system + other smaller stuff.",contract:Z.Contract,type:"Game Development",location:"Remote",period:{from:new Date(2021,9,1),to:new Date(2021,10,1)},skills:q("lua"),name:"Contractor",color:"#ffffff",links:[{to:"https://www.roblox.com/groups/3117188/Fizze#!/about",label:"Roblox Group"}],logo:F.Fizze,shortDescription:""},{slug:"game-development-contractor",company:"Jamies Restaurant Franchise",description:"Hired as a contractor to rewrite some of the old codebase along with making new systems.",contract:Z.Contract,type:"Game Development",location:"Remote",period:{from:new Date(2021,1,1),to:new Date(2021,2,1)},skills:q("lua","ui"),name:"Contractor",color:"#ffffff",links:[{to:"https://www.roblox.com/groups/3512825/Paradi#!/about",label:"Roblox Group"}],logo:F.Jamies,shortDescription:""},{slug:"game-development-director",company:"Seda®",description:"Originally hired as a contractor and ended up sticking around for longer and maintaining games, attendind interview/training sessions, moderating, etc.",contract:Z.SelfEmployed,type:"Game Development",location:"Remote",period:{from:new Date(2020,7,1),to:new Date(2020,11,1)},skills:q("lua","ui"),name:"Director of Development",color:"#ffffff",links:[{to:"https://www.roblox.com/groups/4178207/Seda#!/about",label:"Roblox Group"},{to:"https://www.roblox.com/games/2069515776/Seda-Hotel",label:"Main Roblox Game"}],logo:F.Seda,shortDescription:""},{slug:"game-development-programmer",company:"WaCe Studios",description:"Full-stack development for a couple of simulator games and system maintenance.",contract:Z.PartTime,type:"Game Development",location:"Remote",period:{from:new Date(2020,5,1),to:new Date(2020,6,1)},skills:q("lua"),name:"Lead Programmer",color:"#ffffff",links:[{to:"https://www.roblox.com/groups/4603811/WaCe-Studios#!/about",label:"Roblox Group"}],logo:F.Wace,shortDescription:""}],ve=[{slug:"roblox-programming-example-gun",color:"#002db3",description:"A quite complicated gun system, similar to games like Criminals Vs Swat and Criminality, thats easy to edit and add-on new guns, abilities, etc.",shortDescription:"A quite complicated gun system, similar to games like Criminals Vs Swat and Criminality, thats easy to edit and add-on new guns, abilities, etc.",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"Roblox Game"}],logo:F.Lua,name:"Modular Gun System",period:{from:new Date(2022,5,20)},skills:q("lua","ui"),type:"",screenshots:[{label:"screen 1",src:"https://media.discordapp.net/attachments/820946778588708865/1172824949581418528/example1.gif?ex=6561b95a&is=654f445a&hm=c443d0ca89fda4b5a42dd6a5d7e9b143eca61f89be108dcd2a212ad2d29a3036&="}]}];var he=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ae={},ye={get exports(){return ae},set exports(e){ae=e}};(function(e,$){(function(b,g){e.exports=g()})(he,function(){var b=1e3,g=6e4,w=36e5,S="millisecond",k="second",R="minute",V="hour",H="day",N="week",L="month",G="quarter",x="year",A="date",J="Invalid Date",X=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ne={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var r=["th","st","nd","rd"],t=i%100;return"["+i+(r[(t-20)%10]||r[t]||r[0])+"]"}},T=function(i,r,t){var o=String(i);return!o||o.length>=r?i:""+Array(r+1-o.length).join(t)+i},Q={s:T,z:function(i){var r=-i.utcOffset(),t=Math.abs(r),o=Math.floor(t/60),s=t%60;return(r<=0?"+":"-")+T(o,2,"0")+":"+T(s,2,"0")},m:function i(r,t){if(r.date()<t.date())return-i(t,r);var o=12*(t.year()-r.year())+(t.month()-r.month()),s=r.clone().add(o,L),l=t-s<0,d=r.clone().add(o+(l?-1:1),L);return+(-(o+(t-s)/(l?s-d:d-s))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:L,y:x,w:N,d:H,D:A,h:V,m:R,s:k,ms:S,Q:G}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},_="en",m={};m[_]=ne;var u="$isDayjsObject",a=function(i){return i instanceof y||!(!i||!i[u])},f=function i(r,t,o){var s;if(!r)return _;if(typeof r=="string"){var l=r.toLowerCase();m[l]&&(s=l),t&&(m[l]=t,s=l);var d=r.split("-");if(!s&&d.length>1)return i(d[0])}else{var p=r.name;m[p]=r,s=p}return!o&&s&&(_=s),s||!o&&_},h=function(i,r){if(a(i))return i.clone();var t=typeof r=="object"?r:{};return t.date=i,t.args=arguments,new y(t)},c=Q;c.l=f,c.i=a,c.w=function(i,r){return h(i,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var y=function(){function i(t){this.$L=f(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[u]=!0}var r=i.prototype;return r.parse=function(t){this.$d=function(o){var s=o.date,l=o.utc;if(s===null)return new Date(NaN);if(c.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var d=s.match(X);if(d){var p=d[2]-1||0,v=(d[7]||"0").substring(0,3);return l?new Date(Date.UTC(d[1],p,d[3]||1,d[4]||0,d[5]||0,d[6]||0,v)):new Date(d[1],p,d[3]||1,d[4]||0,d[5]||0,d[6]||0,v)}}return new Date(s)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return c},r.isValid=function(){return this.$d.toString()!==J},r.isSame=function(t,o){var s=h(t);return this.startOf(o)<=s&&s<=this.endOf(o)},r.isAfter=function(t,o){return h(t)<this.startOf(o)},r.isBefore=function(t,o){return this.endOf(o)<h(t)},r.$g=function(t,o,s){return c.u(t)?this[o]:this.set(s,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,o){var s=this,l=!!c.u(o)||o,d=c.p(t),p=function(I,z){var j=c.w(s.$u?Date.UTC(s.$y,z,I):new Date(s.$y,z,I),s);return l?j:j.endOf(H)},v=function(I,z){return c.w(s.toDate()[I].apply(s.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(z)),s)},M=this.$W,C=this.$M,Y=this.$D,U="set"+(this.$u?"UTC":"");switch(d){case x:return l?p(1,0):p(31,11);case L:return l?p(1,C):p(0,C+1);case N:var W=this.$locale().weekStart||0,B=(M<W?M+7:M)-W;return p(l?Y-B:Y+(6-B),C);case H:case A:return v(U+"Hours",0);case V:return v(U+"Minutes",1);case R:return v(U+"Seconds",2);case k:return v(U+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,o){var s,l=c.p(t),d="set"+(this.$u?"UTC":""),p=(s={},s[H]=d+"Date",s[A]=d+"Date",s[L]=d+"Month",s[x]=d+"FullYear",s[V]=d+"Hours",s[R]=d+"Minutes",s[k]=d+"Seconds",s[S]=d+"Milliseconds",s)[l],v=l===H?this.$D+(o-this.$W):o;if(l===L||l===x){var M=this.clone().set(A,1);M.$d[p](v),M.init(),this.$d=M.set(A,Math.min(this.$D,M.daysInMonth())).$d}else p&&this.$d[p](v);return this.init(),this},r.set=function(t,o){return this.clone().$set(t,o)},r.get=function(t){return this[c.p(t)]()},r.add=function(t,o){var s,l=this;t=Number(t);var d=c.p(o),p=function(C){var Y=h(l);return c.w(Y.date(Y.date()+Math.round(C*t)),l)};if(d===L)return this.set(L,this.$M+t);if(d===x)return this.set(x,this.$y+t);if(d===H)return p(1);if(d===N)return p(7);var v=(s={},s[R]=g,s[V]=w,s[k]=b,s)[d]||1,M=this.$d.getTime()+t*v;return c.w(M,this)},r.subtract=function(t,o){return this.add(-1*t,o)},r.format=function(t){var o=this,s=this.$locale();if(!this.isValid())return s.invalidDate||J;var l=t||"YYYY-MM-DDTHH:mm:ssZ",d=c.z(this),p=this.$H,v=this.$m,M=this.$M,C=s.weekdays,Y=s.months,U=s.meridiem,W=function(z,j,K,ee){return z&&(z[j]||z(o,l))||K[j].slice(0,ee)},B=function(z){return c.s(p%12||12,z,"0")},I=U||function(z,j,K){var ee=z<12?"AM":"PM";return K?ee.toLowerCase():ee};return l.replace(E,function(z,j){return j||function(K){switch(K){case"YY":return String(o.$y).slice(-2);case"YYYY":return c.s(o.$y,4,"0");case"M":return M+1;case"MM":return c.s(M+1,2,"0");case"MMM":return W(s.monthsShort,M,Y,3);case"MMMM":return W(Y,M);case"D":return o.$D;case"DD":return c.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return W(s.weekdaysMin,o.$W,C,2);case"ddd":return W(s.weekdaysShort,o.$W,C,3);case"dddd":return C[o.$W];case"H":return String(p);case"HH":return c.s(p,2,"0");case"h":return B(1);case"hh":return B(2);case"a":return I(p,v,!0);case"A":return I(p,v,!1);case"m":return String(v);case"mm":return c.s(v,2,"0");case"s":return String(o.$s);case"ss":return c.s(o.$s,2,"0");case"SSS":return c.s(o.$ms,3,"0");case"Z":return d}return null}(z)||d.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,o,s){var l,d=this,p=c.p(o),v=h(t),M=(v.utcOffset()-this.utcOffset())*g,C=this-v,Y=function(){return c.m(d,v)};switch(p){case x:l=Y()/12;break;case L:l=Y();break;case G:l=Y()/3;break;case N:l=(C-M)/6048e5;break;case H:l=(C-M)/864e5;break;case V:l=C/w;break;case R:l=C/g;break;case k:l=C/b;break;default:l=C}return s?l:c.a(l)},r.daysInMonth=function(){return this.endOf(L).$D},r.$locale=function(){return m[this.$L]},r.locale=function(t,o){if(!t)return this.$L;var s=this.clone(),l=f(t,o,!0);return l&&(s.$L=l),s},r.clone=function(){return c.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},i}(),D=y.prototype;return h.prototype=D,[["$ms",S],["$s",k],["$m",R],["$H",V],["$W",H],["$M",L],["$y",x],["$D",A]].forEach(function(i){D[i[1]]=function(r){return this.$g(r,i[0],i[1])}}),h.extend=function(i,r){return i.$i||(i(r,y,h),i.$i=!0),h},h.locale=f,h.isDayjs=a,h.unix=function(i){return h(1e3*i)},h.en=m[_],h.Ls=m,h.p={},h})})(ye);const te=ae;var ie={},$e={get exports(){return ie},set exports(e){ie=e}};(function(e,$){(function(b,g){e.exports=g()})(he,function(){var b,g,w=1e3,S=6e4,k=36e5,R=864e5,V=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,H=31536e6,N=2628e6,L=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,G={years:H,months:N,days:R,hours:k,minutes:S,seconds:w,milliseconds:1,weeks:6048e5},x=function(m){return m instanceof Q},A=function(m,u,a){return new Q(m,a,u.$l)},J=function(m){return g.p(m)+"s"},X=function(m){return m<0},E=function(m){return X(m)?Math.ceil(m):Math.floor(m)},ne=function(m){return Math.abs(m)},T=function(m,u){return m?X(m)?{negative:!0,format:""+ne(m)+u}:{negative:!1,format:""+m+u}:{negative:!1,format:""}},Q=function(){function m(a,f,h){var c=this;if(this.$d={},this.$l=h,a===void 0&&(this.$ms=0,this.parseFromMilliseconds()),f)return A(a*G[J(f)],this);if(typeof a=="number")return this.$ms=a,this.parseFromMilliseconds(),this;if(typeof a=="object")return Object.keys(a).forEach(function(i){c.$d[J(i)]=a[i]}),this.calMilliseconds(),this;if(typeof a=="string"){var y=a.match(L);if(y){var D=y.slice(2).map(function(i){return i!=null?Number(i):0});return this.$d.years=D[0],this.$d.months=D[1],this.$d.weeks=D[2],this.$d.days=D[3],this.$d.hours=D[4],this.$d.minutes=D[5],this.$d.seconds=D[6],this.calMilliseconds(),this}}return this}var u=m.prototype;return u.calMilliseconds=function(){var a=this;this.$ms=Object.keys(this.$d).reduce(function(f,h){return f+(a.$d[h]||0)*G[h]},0)},u.parseFromMilliseconds=function(){var a=this.$ms;this.$d.years=E(a/H),a%=H,this.$d.months=E(a/N),a%=N,this.$d.days=E(a/R),a%=R,this.$d.hours=E(a/k),a%=k,this.$d.minutes=E(a/S),a%=S,this.$d.seconds=E(a/w),a%=w,this.$d.milliseconds=a},u.toISOString=function(){var a=T(this.$d.years,"Y"),f=T(this.$d.months,"M"),h=+this.$d.days||0;this.$d.weeks&&(h+=7*this.$d.weeks);var c=T(h,"D"),y=T(this.$d.hours,"H"),D=T(this.$d.minutes,"M"),i=this.$d.seconds||0;this.$d.milliseconds&&(i+=this.$d.milliseconds/1e3,i=Math.round(1e3*i)/1e3);var r=T(i,"S"),t=a.negative||f.negative||c.negative||y.negative||D.negative||r.negative,o=y.format||D.format||r.format?"T":"",s=(t?"-":"")+"P"+a.format+f.format+c.format+o+y.format+D.format+r.format;return s==="P"||s==="-P"?"P0D":s},u.toJSON=function(){return this.toISOString()},u.format=function(a){var f=a||"YYYY-MM-DDTHH:mm:ss",h={Y:this.$d.years,YY:g.s(this.$d.years,2,"0"),YYYY:g.s(this.$d.years,4,"0"),M:this.$d.months,MM:g.s(this.$d.months,2,"0"),D:this.$d.days,DD:g.s(this.$d.days,2,"0"),H:this.$d.hours,HH:g.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:g.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:g.s(this.$d.seconds,2,"0"),SSS:g.s(this.$d.milliseconds,3,"0")};return f.replace(V,function(c,y){return y||String(h[c])})},u.as=function(a){return this.$ms/G[J(a)]},u.get=function(a){var f=this.$ms,h=J(a);return h==="milliseconds"?f%=1e3:f=h==="weeks"?E(f/G[h]):this.$d[h],f||0},u.add=function(a,f,h){var c;return c=f?a*G[J(f)]:x(a)?a.$ms:A(a,this).$ms,A(this.$ms+c*(h?-1:1),this)},u.subtract=function(a,f){return this.add(a,f,!0)},u.locale=function(a){var f=this.clone();return f.$l=a,f},u.clone=function(){return A(this.$ms,this)},u.humanize=function(a){return b().add(this.$ms,"ms").locale(this.$l).fromNow(!a)},u.valueOf=function(){return this.asMilliseconds()},u.milliseconds=function(){return this.get("milliseconds")},u.asMilliseconds=function(){return this.as("milliseconds")},u.seconds=function(){return this.get("seconds")},u.asSeconds=function(){return this.as("seconds")},u.minutes=function(){return this.get("minutes")},u.asMinutes=function(){return this.as("minutes")},u.hours=function(){return this.get("hours")},u.asHours=function(){return this.as("hours")},u.days=function(){return this.get("days")},u.asDays=function(){return this.as("days")},u.weeks=function(){return this.get("weeks")},u.asWeeks=function(){return this.as("weeks")},u.months=function(){return this.get("months")},u.asMonths=function(){return this.as("months")},u.years=function(){return this.get("years")},u.asYears=function(){return this.as("years")},m}(),_=function(m,u,a){return m.add(u.years()*a,"y").add(u.months()*a,"M").add(u.days()*a,"d").add(u.hours()*a,"h").add(u.minutes()*a,"m").add(u.seconds()*a,"s").add(u.milliseconds()*a,"ms")};return function(m,u,a){b=a,g=a().$utils(),a.duration=function(c,y){var D=a.locale();return A(c,{$l:D},y)},a.isDuration=x;var f=u.prototype.add,h=u.prototype.subtract;u.prototype.add=function(c,y){return x(c)?_(this,c,1):f.bind(this)(c,y)},u.prototype.subtract=function(c,y){return x(c)?_(this,c,-1):h.bind(this)(c,y)}}})})($e);const Me=ie;te.extend(Me);const ke=(e,$=new Date)=>{let b=0,g=0,w=0;return $.getFullYear()!==e.getFullYear()?(w=$.getMonth(),g=($.getFullYear()-e.getFullYear()-1)*12,b=12-e.getMonth()):b=$.getMonth()-e.getMonth(),b+g+w+1},De=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],Ce=(e,$)=>`${e} | ${$}`;function ze(e,$=new Date(Date.now()+1e3*60*60*24)){const b=te(e),g=te($),w=te.duration(g.diff(b));let S=0,k="day";return w.as("days")<=7?(k="day",S=w.as("days")):w.as("months")<=1?(k="week",S=w.as("weeks")):w.as("years")<=1?(k="month",S=w.as("months")):(k="year",S=w.as("years")),S=Math.trunc(S),`${Math.trunc(S)} ${k}${S>1?"s":""}`}var P=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(P||{});const Le="",xe={home:"Home",personal:"Examples",career:"Experiences",resume:"Resume",skills:"Skills"},He=e=>{switch(e){case O.GitHub:return P.GitHub;case O.Linkedin:return P.LinkedIn;case O.StackOverflow:return P.StackOverflow;case O.Facebook:return P.Facebook;case O.Email:return P.Email;case O.Twitter:return P.Twitter;case O.Youtube:return P.Youtube}},Ae={title:"Home",name:"bleeod",lastName:"",description:"Hello, Im bleeod, an experienced full-stack game programmer, skilled Romanian translator, and proficient UI/UX designer. With four years of experience on the Roblox platform, I have developed a well-rounded background. As a professional, I bring tons of experience in game development, linguistic proficiency in Romanian translation, and a keen ability to design visually appealing and intuitive user interfaces and experiences. ",links:[{platform:O.GitHub,link:"https://github.com/bleeod"},{platform:O.Twitter,link:"https://twitter.com/dontsellurself"},{platform:O.Email,link:"linkodavid.bidness@gmail.com"}]},Ye={title:"Examples",items:ve},Oe={title:"Experiences",items:pe},Re={title:"Skills",items:de},Te={title:"Resumé",item:""},Ee={title:"Search"};export{Oe as E,Ae as H,P as I,de as M,xe as N,Ye as P,Te as R,Ee as S,Le as T,oe as a,He as b,ze as c,De as d,pe as e,he as f,Se as g,ke as h,ve as i,Re as j,we as o,ce as t,Ce as u};
