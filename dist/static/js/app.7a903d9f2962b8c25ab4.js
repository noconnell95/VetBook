webpackJsonp([13],{"6vp+":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"400px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-btn",{attrs:{slot:"activator",fab:"",accent:""},slot:"activator"},[a("v-icon",[t._v("edit")])],1),t._v(" "),a("v-card",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",[t._v("Edit Checkup")])],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-text",[a("v-text-field",{attrs:{name:"stockName",label:"Stock Name",id:"stockName",required:""},model:{value:t.editedstockName,callback:function(e){t.editedstockName=e},expression:"editedstockName"}}),t._v(" "),a("v-text-field",{attrs:{name:"vetName",label:"Vet Name",id:"vetName",required:""},model:{value:t.editedvetName,callback:function(e){t.editedvetName=e},expression:"editedvetName"}}),t._v(" "),a("v-text-field",{attrs:{name:"date",label:"Date",id:"date",required:""},model:{value:t.editedDate,callback:function(e){t.editedDate=e},expression:"editedDate"}})],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-actions",[a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:t.onSaveChanges}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},i=[],o={render:n,staticRenderFns:i};e.a=o},"99Su":function(t,e,a){"use strict";e.a={props:["checkups"],data:function(){return{editDialog:!1,editedstockName:this.checkups.stockName.text,editedvetName:this.checkups.vetName.text,editedDate:this.checkups.date}},methods:{onSaveChanges:function(){""!==this.editedstockName.trim()&&""!==this.editedvetName.trim()&&""!==this.editedDate.trim()&&(this.editDialog=!1,this.$store.dispatch("updateCheckupData",{id:this.checkups.id,stockName:this.editedstockName,vetName:this.editedvetName,date:this.editedDate}))}}}},IcnI:function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a("/5sW"),i=a("NYxO"),o=a("lwq5"),s=a("ukYY"),r=a("mUbh"),d=a("UjVw");n.a.use(i.a);var c=new i.a.Store({state:o.a,mutations:s.a,actions:r.a,getters:d.a})},M93x:function(t,e,a){"use strict";function n(t){a("mBrL")}var i=a("xJD8"),o=a("jNto"),s=a("VU/8"),r=n,d=s(i.a,o.a,!1,r,null,null);e.a=d.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/5sW"),i=a("3EgV"),o=a.n(i),s=a("M93x"),r=a("YaEn"),d=a("IcnI"),c=a("QmSG"),u=a("WOW9"),l=a("ntu1"),v=a("tE2s"),m=a("p+RM"),p=(a.n(m),a("U4OO")),f=a.n(p),k=a("3VHS"),h=(a.n(k),a("Sazm"));a.n(h);n.a.use(f.a,{locale:"en"}),n.a.use(o.a),n.a.config.productionTip=!1,n.a.component("app-edit-livestock-details-dialog",u.default),n.a.component("app-edit-checkup-dialog",l.default),n.a.component("app-register-birth-dialog",v.default),h.initializeApp(c.a);var g=h.auth().onAuthStateChanged(function(t){new n.a({el:"#app",router:r.a,store:d.a,render:function(t){return t(s.a)},created:function(){this.$store.dispatch("loadLivestock"),this.$store.dispatch("loadCheckup"),d.a.dispatch("autoSignIn",t)}}),g()})},QmSG:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={apiKey:"AIzaSyDI0ncm_VtpmkMD-VE5dIUJlPBqwDbdEYE",authDomain:"vetbook-cf819.firebaseapp.com",databaseURL:"https://vetbook-cf819.firebaseio.com",projectId:"vetbook-cf819",storageBucket:"vetbook-cf819.appspot.com"}},UjVw:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={appTitle:function(t){return t.appTitle},getUser:function(t){return t.user},loading:function(t){return t.loading},getError:function(t){return t.error},getLoading:function(t){return t.loading},getUserType:function(t){return t.loadedUsers.find(function(t){return t.userType})},getUserVet:function(t){return t.loadedUsers.find(function(t){return t.name.text})},getUserName:function(t){return t.loadedVetName.find(function(t){return t.name})},loadedLivestock:function(t){return t.loadedLivestock.sort(function(t,e){return t.date>e.date})},loadedUsers:function(t){return t.loadedUsers.sort(function(t,e){return t.name>e.name})},loadedCheckups:function(t){return t.loadedCheckups.sort(function(t,e){return t.date>e.date})},loadOneLivestock:function(t){return function(e){return t.loadedLivestock.find(function(t){return t.id===e})}}}},WOW9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("vwd2"),i=a("bsjD"),o=a("VU/8"),s=o(n.a,i.a,!1,null,null,null);e.default=s.exports},WoGI:function(t,e,a){"use strict";e.a={}},YCy6:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"400px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-btn",{attrs:{slot:"activator",accent:""},slot:"activator"},[t._v("\n    Register Birth or Death\n  ")]),t._v(" "),a("v-card",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",[t._v("Register Birth/Death")])],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-text",[a("v-text-field",{attrs:{name:"numInStock",label:"Add to Stock",id:"numInStock",required:""},model:{value:t.editednumInStock,callback:function(e){t.editednumInStock=e},expression:"editednumInStock"}})],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-actions",[a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:t.onSaveChanges}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},i=[],o={render:n,staticRenderFns:i};e.a=o},YaEn:function(t,e,a){"use strict";var n=a("Gu7T"),i=a.n(n),o=a("/5sW"),s=a("/ocq"),r=a("Sazm"),d=a.n(r),c=a("YcJa"),u=[{path:"/",component:"Landing"},{path:"/signin",component:"Signin"},{path:"/signup",component:"SignUp"},{path:"/bookappt",component:"BookAppt"},{path:"/livestock",component:"Livestock"},{path:"/addlivestock",props:!0,component:"AddLivestock"},{path:"/livestock/:id",component:"EachLivestock"},{path:"/home",component:"Home",meta:{requiresAuth:!0}},{path:"/bookcheckup",component:"BookCheckUp"},{path:"/viewcheckups",component:"ViewCheckups"},{path:"/vet",component:"Vet"},{path:"/registerhome",component:"RegisterHome"},{path:"/usertype",component:"UserType"}],l=u.map(function(t){return{path:t.path,component:function(){return a("mUJ2")("./"+t.component+".vue")},meta:t.meta}});o.a.use(s.a);var v=new s.a({mode:"history",routes:[].concat(i()(l),[{path:"*",component:c.default}])});v.beforeEach(function(t,e,a){var n=t.matched.some(function(t){return t.meta.requiresAuth}),i=d.a.auth().currentUser;n&&!i&&a("/signin"),a()}),e.a=v},YcJa:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("WoGI"),i=a("tJnm"),o=a("VU/8"),s=o(n.a,i.a,!1,null,null,null);e.default=s.exports},bsjD:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"400px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-btn",{attrs:{slot:"activator",fab:"",accent:""},slot:"activator"},[a("v-icon",[t._v("edit")])],1),t._v(" "),a("v-card",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",[t._v("Edit Livestock")])],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-text",[a("v-text-field",{attrs:{name:"stockName",label:"Stock Name",id:"stockName",required:""},model:{value:t.editedstockName,callback:function(e){t.editedstockName=e},expression:"editedstockName"}}),t._v(" "),a("v-text-field",{attrs:{name:"breed",label:"Breed",id:"breed",required:""},model:{value:t.editedBreed,callback:function(e){t.editedBreed=e},expression:"editedBreed"}}),t._v(" "),a("v-text-field",{attrs:{name:"numInStock",label:"Number in Stock",id:"numInStock",required:""},model:{value:t.editednumInStock,callback:function(e){t.editednumInStock=e},expression:"editednumInStock"}}),t._v(" "),a("v-text-field",{attrs:{name:"addInfo",label:"Additional Information",id:"addInfo","multi-line":"",required:""},model:{value:t.editedaddInfo,callback:function(e){t.editedaddInfo=e},expression:"editedaddInfo"}})],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-actions",[a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},on:{click:t.onSaveChanges}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},i=[],o={render:n,staticRenderFns:i};e.a=o},jNto:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{temporary:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[a("v-list",[t._l(t.menuItems,function(e){return a("v-list-tile",{key:e.title,attrs:{to:e.path}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[t._v(t._s(e.title))])],1)}),t._v(" "),t.isAuthenticated?a("v-list-tile",{on:{click:t.userSignOut}},[a("v-list-tile-action",[a("v-icon",[t._v("exit_to_app")])],1),t._v(" "),a("v-list-tile-content",[t._v("Sign Out")])],1):t._e()],2)],1),t._v(" "),a("v-toolbar",{staticClass:"info",attrs:{fixed:""}},[a("span",{staticClass:"hidden-sm-and-up"},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.sidebar=!t.sidebar}}})],1),t._v(" "),a("v-toolbar-title",[a("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("\n        "+t._s(t.appTitle)+"\n      ")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e){return a("v-btn",{key:e.title,staticClass:"white--text",attrs:{flat:"",to:e.path}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._v(" "),t.isAuthenticated?a("v-btn",{staticClass:"white--text",attrs:{flat:""},on:{click:t.userSignOut}},[a("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n        Sign out\n      ")],1):t._e()],2)],1),t._v(" "),a("main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),t._v(" "),a("v-footer",{staticClass:"pa-3"},[a("v-spacer"),t._v(" "),a("div",[t._v("©Niamh O'Connell "+t._s((new Date).getFullYear()))])],1)],1)},i=[],o={render:n,staticRenderFns:i};e.a=o},lwq5:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={appTitle:"VetBook",user:null,error:null,loading:!1,loadedLivestock:[{livestockId:"abs123",stockName:"cows",breed:"jersey",numInStock:"22",date:new Date,addInfo:"blah blah"},{livestockId:"abs874",stockName:"pigs",breed:"hampshire",numInStock:"12",date:new Date,addInfo:"blahblah"}],loadedCheckups:[{creatorId:"sjsnj",date:"24/02/2017",stockName:"pigs",vetName:"Fred Murphy"}],loadedUsers:[{name:"niamh",email:"dud@dud.com",password:"password",userType:"farmer"}],loadedVetName:[{name:"Maria Kelly"}]}},mBrL:function(t,e){},mUJ2:function(t,e,a){function n(t){var e=i[t];return e?Promise.all(e.slice(1).map(a.e)).then(function(){return a(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var i={"./AddLivestock.vue":["2goE",10],"./BookAppt.vue":["qanU",9],"./DialogPopUps/EditCheckupDialog.vue":["ntu1"],"./DialogPopUps/EditLivestockDetailsDialogue.vue":["WOW9"],"./DialogPopUps/RegisterBirthDialog.vue":["tE2s"],"./EachLivestock.vue":["r9ef",8],"./Home.vue":["lO7g",7],"./Landing.vue":["X4if",6],"./Livestock.vue":["kA0o",5],"./NotFound.vue":["YcJa"],"./RegisterHome.vue":["Su+N",11],"./SignUp.vue":["ApaE",4],"./Signin.vue":["Asuo",3],"./UserType.vue":["RqeV",2],"./Vet.vue":["JPRE",1],"./ViewCheckups.vue":["Ifwp",0]};n.keys=function(){return Object.keys(i)},t.exports=n,n.id="mUJ2"},mUbh:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var n=a("Dd8w"),i=a.n(n),o=a("Sazm"),s=(a.n(o),a("YaEn")),r={loadLivestock:function(t){var e=t.commit,a=t.getters;e("setLoading",!0),o.database().ref("livestock").once("value").then(function(t){var n=[],i=t.val();for(var o in i)a.getUser.id===i[o].creatorId&&n.push({id:o,stockName:i[o].stockName,breed:i[o].breed,numInStock:i[o].numInStock,date:i[o].date,addInfo:i[o].addInfo,creatorId:i[o].creatorId});e("setLoadedLivestock",n),e("setLoading",!1)}).catch(function(t){console.log(t),e("setLoading",!1)})},loadCheckup:function(t){var e=t.commit,a=t.getters;e("setLoading",!0),o.database().ref("checkups").once("value").then(function(t){var n=[],i=t.val();for(var o in i)a.getUser.id===i[o].creatorId?n.push({id:o,stockName:i[o].stockName,date:i[o].date,vetName:i[o].vetName,creatorId:i[o].creatorId}):a.getUserName.name===i[o].vetName&&n.push({id:o,stockName:i[o].stockName,date:i[o].date,vetName:i[o].vetName,creatorId:i[o].creatorId});e("setLoadedCheckups",n),e("setLoading",!1)}).catch(function(t){console.log(t),e("setLoading",!1)})},updateLivestockData:function(t,e){var a=t.commit,n={};e.stockName&&(n.stockName=e.stockName),e.breed&&(n.breed=e.breed),e.numInStock&&(n.numInStock=e.numInStock),e.addInfo&&(n.addInfo=e.addInfo),e.date&&(n.date=e.date),o.database().ref("livestock").child(e.id).update(n).then(function(){a("setLoading",!1),a("updateLivestock",e)}).catch(function(t){console.log(t),a("setLoading",!1)})},updateBirthData:function(t,e){var a=t.commit,n={};e.numInStock&&(n.numInStock=e.numInStock),o.database().ref("livestock").child(e.id).update(n).then(function(){a("setLoading",!1),a("updateBirth",e)}).catch(function(t){console.log(t),a("setLoading",!1)})},updateCheckupData:function(t,e){var a=t.commit,n={};e.stockName&&(n.stockName=e.stockName),e.vetName&&(n.vetName=e.vetName),e.date&&(n.date=e.date),o.database().ref("checkups").child(e.id).update(n).then(function(){a("setLoading",!1),a("updateCheckup",e)}).catch(function(t){console.log(t),a("setLoading",!1)})},userSignUp:function(t,e){var a=t.commit;t.getters;a("setLoading",!0),o.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){a("setUser",t),a("setLoading",!1),s.a.push("/usertype")}).catch(function(t){a("setError",t.message),a("setLoading",!1)})},userSignIn:function(t,e){var a=t.commit;t.getters;a("setLoading",!0),o.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){a("setUser",t),a("setLoading",!1),a("setError",null)}).catch(function(t){a("setError",t.message),a("setLoading",!1)})},autoSignIn:function(t,e){var a=t.commit;t.getters;a("setUser",{id:e.uid,livestock:[]})},userSignOut:function(t){var e=t.commit;o.auth().signOut(),e("setUser",null),s.a.push("/")},addLivestock:function(t,e){var a=t.commit,n=t.getters,s={stockName:e.stockName,breed:e.breed,numInStock:e.numInStock,date:e.date,addInfo:e.addInfo,creatorId:n.getUser.id};o.database().ref("livestock").push(s).then(function(t){var e=t.key;a("addLivestock",i()({},s,{id:e}))}).catch(function(t){console.log(t)})},adduserType:function(t,e){var a=t.commit,n=t.getters,s={name:e.name,uid:n.getUser.uid||null,userType:e.userType};o.database().ref("users").push(s).then(function(t){var e=t.key;a("adduserType",i()({},s,{id:e}))}).catch(function(t){console.log(t)})},addCheckup:function(t,e){var a=t.commit,n=t.getters,s={stockName:e.stockName,date:e.date.toISOString(),vetName:e.vetName,creatorId:n.getUser.id};o.database().ref("checkups").push(s).then(function(t){var e=t.key;a("addCheckup",i()({},s,{id:e}))}).catch(function(t){console.log(t)})}}},ntu1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("99Su"),i=a("6vp+"),o=a("VU/8"),s=o(n.a,i.a,!1,null,null,null);e.default=s.exports},"p+RM":function(t,e){},tABN:function(t,e,a){"use strict";e.a={props:["livestock"],data:function(){return{editDialog:!1,editednumInStock:this.livestock.numInStock}},methods:{onSaveChanges:function(){""!==this.editednumInStock.trim()&&(this.editDialog=!1,this.$store.dispatch("updateBirthData",{id:this.livestock.id,numInStock:this.editednumInStock}))}}}},tE2s:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("tABN"),i=a("YCy6"),o=a("VU/8"),s=o(n.a,i.a,!1,null,null,null);e.default=s.exports},tJnm:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[a("h3",[t._v("Error 404")]),t._v(" "),a("h5",[t._v("Oops, looks like your link is incorrect")])])],1)},i=[],o={render:n,staticRenderFns:i};e.a=o},ukYY:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={setUser:function(t,e){t.user=e},setError:function(t,e){t.error=e},setLoading:function(t,e){t.loading=e},updateLivestock:function(t,e){var a=t.loadedLivestock.find(function(t){return t.id===e.id});e.stockName&&(a.stockName=e.stockName),e.breed&&(a.breed=e.breed),e.numInStock&&(a.numInStock=e.numInStock),e.addInfo&&(a.addInfo=e.addInfo),e.date&&(a.date=e.date)},updateBirth:function(t,e){var a=t.loadedLivestock.find(function(t){return t.id===e.id});e.numInStock&&(a.numInStock=e.numInStock)},updateCheckup:function(t,e){var a=t.loadedCheckups.find(function(t){return t.id===e.id});e.stockName&&(a.stockName.text=e.stockName),e.vetName&&(a.vetName.text=e.vetName),e.date&&(a.date=e.date)},adduserType:function(t,e){t.loadedUsers.push(e)},addUserName:function(t,e){t.loadedVetName.push(e)},setLoadedLivestock:function(t,e){t.loadedLivestock=e},addLivestock:function(t,e){t.loadedLivestock=e},setLoadedCheckups:function(t,e){t.loadedCheckups=e},addCheckup:function(t,e){t.loadedCheckups.push(e)}}},vwd2:function(t,e,a){"use strict";e.a={props:["livestock"],data:function(){return{editDialog:!1,editedstockName:this.livestock.stockName,editedBreed:this.livestock.breed,editednumInStock:this.livestock.numInStock,editedaddInfo:this.livestock.addInfo}},methods:{onSaveChanges:function(){""!==this.editedstockName.trim()&&""!==this.editedBreed.trim()&&""!==this.editednumInStock.trim()&&""!==this.editedaddInfo.trim()&&(this.editDialog=!1,this.$store.dispatch("updateLivestockData",{id:this.livestock.id,stockName:this.editedstockName,breed:this.editedBreed,numInStock:this.editednumInStock,addInfo:this.editedaddInfo,date:this.livestock.date}))}}}},xJD8:function(t,e,a){"use strict";e.a={data:function(){return{sidebar:!1}},computed:{appTitle:function(){return this.$store.getters.appTitle},isAuthenticated:function(){return null!==this.$store.getters.getUser&&void 0!==this.$store.getters.getUser},addAUser:function(){if(this.isAuthenticated){var t={email:this.email,password:this.password,userType:this.userType};this.$store.dispatch("addUser",t)}},menuItems:function(){if(!this.isAuthenticated)return[{title:"Sign Up",path:"/signup"},{title:"Sign In",path:"/signin",icon:"lock_open"}]}},methods:{userSignOut:function(){this.$store.dispatch("userSignOut")}}}}},["NHnr"]);
//# sourceMappingURL=app.7a903d9f2962b8c25ab4.js.map