(this["webpackJsonpstarter-cra-and-react"]=this["webpackJsonpstarter-cra-and-react"]||[]).push([[0],{10:function(e,t,a){e.exports={photo:"NewPost_photo__3ADwB",dropArea:"NewPost_dropArea__16uub",dragging:"NewPost_dragging__1jFb0",message:"NewPost_message__1mugQ",image:"NewPost_image__2rlaG",desc:"NewPost_desc__2ptNI",actions:"NewPost_actions__2IyL0",error:"NewPost_error__3uhGc"}},11:function(e,t,a){e.exports={user:"Profile_user__2-9NF",bio:"Profile_bio__CpSPI",statsNum:"Profile_statsNum__1rJQS",statsTitles:"Profile_statsTitles__36ivN",posts:"Profile_posts__-FmA9",followBtn:"Profile_followBtn__1DYsw",unfollowBtn:"Profile_unfollowBtn__d09ZT"}},14:function(e,t,a){e.exports={navbar:"Navbar_navbar__2qib_",navItem:"Navbar_navItem__3tI0x"}},16:function(e,t,a){e.exports={square:"PostThumbnail_square__-IdW1",content:"PostThumbnail_content__yt2pG",image:"PostThumbnail_image__48NS4"}},18:function(e,t,a){e.exports={container:"App_container__1h5gR",content:"App_content__2Xkxn"}},22:function(e,t,a){e.exports={header:"Header_header__3vt5U"}},29:function(e,t,a){e.exports=a(46)},36:function(e,t,a){},37:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),s=a.n(o),l=(a(36),a(37),a(18)),c=a.n(l),i=a(22),m=a.n(i);var u=function(){return r.a.createElement("header",{className:m.a.header},r.a.createElement("div",null,r.a.createElement("button",null,r.a.createElement("img",{src:"https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fcamera.svg?v=1614382899995",alt:"camera"}))),r.a.createElement("div",null,r.a.createElement("img",{src:"https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Flogo.png?v=1614382900226",alt:"logo"})),r.a.createElement("div",null,r.a.createElement("button",null,r.a.createElement("img",{src:"https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Fmessage.svg?v=1614382900322",alt:"message"}))))},d=a(9),p=a(5),f=a.n(p);function h(e){return e.startsWith("/")?"/social-media-2"+e:e}var g=a(3);var v=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)(!1),c=Object(d.a)(l,2),i=c[0],m=c[1];return r.a.createElement("article",{className:f.a.post},r.a.createElement("header",{className:f.a.header},r.a.createElement(g.b,{className:f.a.user,to:"/profile/".concat(e.user.id)},r.a.createElement("img",{src:h(e.user.photo),alt:"User Profile"}),r.a.createElement("span",null,e.user.id," "))),r.a.createElement("section",{className:f.a.content},r.a.createElement("div",{className:f.a.imgContainer},r.a.createElement("img",{src:h(e.post.photo),alt:"Post"}))),r.a.createElement("section",{className:f.a.actions},r.a.createElement("button",null,e.likes.self?r.a.createElement("img",{onClick:function(){e.onUnlike(e.post.id)},src:"https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Funlike.svg?v=1614382900439",alt:"Unlike Action"}):r.a.createElement("img",{onClick:function(){e.onLike(e.post.id)},src:"https://cdn.glitch.com/f70d577d-f905-45ee-bb92-042bfa767970%2Flike.svg?v=1614382900207",alt:"Like Action"})),r.a.createElement("button",{onClick:function(e){return m(!i)}},r.a.createElement("img",{src:h("/assets/comment.svg"),alt:"Comment Action"}))),r.a.createElement("section",{className:f.a.activity},r.a.createElement("div",{className:f.a.likes},e.likes.count," likes"),r.a.createElement("div",{className:f.a.comments},r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement(g.b,{className:f.a.user,to:"/profile/".concat(e.post.userId)},e.post.userId)),r.a.createElement("span",null,e.post.desc)),e.comments.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("span",null,r.a.createElement(g.b,{className:f.a.user,to:"/profile/".concat(e.userId)},e.userId)),r.a.createElement("span",null,e.text))}))),r.a.createElement("time",{className:f.a.time},function(e){var t=Math.floor((new Date-new Date(e))/1e3),a=Math.floor(t/31556926);return a>=1?a+" years":(a=Math.floor(t/2592e3))>=1?a+" months":(a=Math.floor(t/86400))>=1?a+" days":(a=Math.floor(t/3600))>=1?a+" hours":(a=Math.floor(t/60))>=1?a+" minutes":Math.floor(t)+" seconds"}(e.post.datetime).toUpperCase()," AGO")),i&&r.a.createElement("form",{className:f.a.addComment,onSubmit:function(t){e.onComment(e.post.id,o),s(""),m(!1),t.preventDefault()}},r.a.createElement("input",{type:"text",placeholder:"Add a comment\u2026",value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Post")))},E=a(4),b={currentUserId:"judy",users:[{id:"judy",email:"judy@bc.edu",photo:"/assets/user1.png",name:"Judy Hopps",bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species."},{id:"nick",email:"nick@bc.edu",photo:"/assets/user2.png",name:"Nick Wilde",bio:"Nick is a charming, small-time, con artist fox with a big mouth and a lot of opinions. But when a rabbit cop outsmarts him, he finds himself actually helping her solve a mystery."},{id:"flash",email:"flash@bc.edu",photo:"/assets/user3.png",name:"Flash Slothmore",bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles."}],followers:[{userId:"nick",followerId:"judy"},{userId:"judy",followerId:"nick"},{userId:"judy",followerId:"flash"}],posts:[{id:"post-1",userId:"judy",photo:"/assets/post1.png",desc:"#zootopia #excited",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"nick",photo:"/assets/post2.png",desc:"#happy #selfie with Judy",datetime:"2020-02-06T22:45:28Z"},{id:"post-3",userId:"flash",photo:"/assets/post3.png",desc:"Don't worry I got this",datetime:"2020-02-03T22:45:28Z"},{id:"post-4",userId:"judy",photo:"/assets/post4.png",desc:"Just trying to make a #friend",datetime:"2020-02-06T22:45:28Z"},{id:"post-5",userId:"judy",photo:"/assets/post5.png",desc:"I am now the first rabbit officer!",datetime:"2020-02-06T22:45:28Z"},{id:"post-6",userId:"judy",photo:"/assets/post6.png",desc:"Having #goodtimes with folks here",datetime:"2020-02-06T22:45:28Z"}],comments:[{userId:"nick",postId:"post-1",text:"Welcome to Zootopia!",datetime:"2020-02-09T22:51:40Z"},{userId:"judy",postId:"post-1",text:"Thanks!\ud83d\ude01Looking forward to meeting you!",datetime:"2020-02-09T22:52:01Z"},{userId:"flash",postId:"post-2",text:"Looking good you two! \ud83d\udc30\ud83e\udd8a",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"judy",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"nick",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"flash",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"judy",postId:"post-3",datetime:"2020-02-09T22:53:40Z"}]};var _=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),a=0;a<1e7&&!((new Date).getTime()-t>e);a++);}(1),e?e+t:t},I=Object(n.createContext)();var w=function(e){var t=Object(n.useState)((function(){return JSON.parse(window.localStorage.getItem("store"))||b})),a=Object(d.a)(t,2),o=a[0],s=a[1];return Object(n.useEffect)((function(){window.localStorage.setItem("store",JSON.stringify(o))}),[o]),r.a.createElement(I.Provider,{value:Object(E.a)(Object(E.a)({},o),{},{addComment:function(e,t){var a={userId:o.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};s(Object(E.a)(Object(E.a)({},o),{},{comments:o.comments.concat(a)}))},addLike:function(e){var t={userId:o.currentUserId,postId:e,datetime:(new Date).toISOString()};s(Object(E.a)(Object(E.a)({},o),{},{likes:o.likes.concat(t)}))},removeLike:function(e){s(Object(E.a)(Object(E.a)({},o),{},{likes:o.likes.filter((function(t){return!(t.userId===o.currentUserId&&t.postId===e)}))}))},addPost:function(e,t){var a={id:_("post"),userId:o.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};console.log(e),s(Object(E.a)(Object(E.a)({},o),{},{posts:o.posts.concat(a)}))},addFollower:function(e){var t={userId:e,followerId:o.currentUserId};s(Object(E.a)(Object(E.a)({},o),{},{followers:o.followers.concat(t)}))},removeFollower:function(e){s(Object(E.a)(Object(E.a)({},o),{},{followers:o.followers.filter((function(t){return!(t.userId===e&&t.followerId===o.currentUserId)}))}))}})},e.children)},k=a(1);var N=function(e){var t=Object(k.g)().postId,a=Object(n.useContext)(I),o=a.posts,s=a.users,l=a.comments,c=a.likes,i=a.currentUserId,m=a.addComment,u=a.addLike,d=a.removeLike;function p(e){return l.filter((function(t){return t.postId===e.id}))}function f(e){var t=c.filter((function(t){return t.postId===e.id}));return{self:t.some((function(e){return e.userId===i})),count:t.length}}function h(e){return s.find((function(t){return t.id===e.userId}))}return r.a.createElement("div",null,o.filter((function(e){return!t||e.id===t})).sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(e){return r.a.createElement(v,{key:e.id,user:h(e),post:e,comments:p(e),likes:f(e),onLike:u,onUnlike:d,onComment:m})})))};var j=function(){return r.a.createElement("h2",null,"Explore")},O=a(10),y=a.n(O),D=a(25),P=a(26),C=a(12),T=a(28),x=a(27),S=function(e){Object(T.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(D.a)(this,a),(n=t.call(this,e)).handleDragEnter=n.handleDragEnter.bind(Object(C.a)(n)),n.handleDrop=n.handleDrop.bind(Object(C.a)(n)),n.handleDragOver=n.handleDragOver.bind(Object(C.a)(n)),n.handleDragLeave=n.handleDragLeave.bind(Object(C.a)(n)),n}return Object(P.a)(a,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=r.a.Children.only(this.props.children);return r.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),a}(n.PureComponent);var L=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)(""),c=Object(d.a)(l,2),i=c[0],m=c[1],u=Object(n.useState)(null),p=Object(d.a)(u,2),f=p[0],h=p[1],g=Object(n.useState)(""),v=Object(d.a)(g,2),E=v[0],b=v[1],_=Object(k.f)(),w=Object(n.useContext)(I).addPost;return r.a.createElement("div",null,r.a.createElement("div",{className:y.a.photo},f?r.a.createElement("img",{src:f,alt:"New Post"}):r.a.createElement("div",{className:y.a.message},"Drop your image"),r.a.createElement(S,{onDragEnter:function(e){s(!0)},onDragLeave:function(e){s(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var a=new FileReader;a.onloadend=function(e){h(e.target.result)},a.readAsDataURL(t)}}s(!1)}}},r.a.createElement("div",{className:[y.a.dropArea,o?y.a.dragging:null].join(" ")}))),r.a.createElement("div",{className:y.a.desc},r.a.createElement("textarea",{placeholder:"Describe your post!",rows:"1",value:i,onChange:function(e){m(e.target.value)}})),r.a.createElement("div",{className:y.a.error},E),r.a.createElement("div",{className:y.a.actions},r.a.createElement("button",{onClick:function(){_.goBack()}},"Cancel"),r.a.createElement("button",{onClick:function(e){f?(w(f,i),_.push("/"),b("")):b("No photo")}},"Share")))};var F=function(){return r.a.createElement("h2",null,"Activity")},Z=a(11),U=a.n(Z),A=a(16),B=a.n(A);var J=function(e){return r.a.createElement("div",{className:B.a.square},r.a.createElement("div",{className:B.a.content},r.a.createElement("img",{className:B.a.image,src:h(e.post.photo),alt:"Post Thumbnail"})))};var M=function(e){var t=Object(k.g)().userId,a=Object(n.useContext)(I),o=a.users,s=a.posts,l=a.followers,c=a.currentUserId,i=a.addFollower,m=a.removeFollower;t||(t=c);var u=o.filter((function(e){return e.id===t}))[0],d=s.filter((function(e){return e.userId===t})),p=l.filter((function(e){return e.userId===t})),f=p.filter((function(e){return e.followerId===t})),v=!1,E=p.map((function(e){return e.followerId}));return E.filter((function(e){return e===c})).length>0&&(console.log(E.filter((function(e){return e===c}))),v=!0),r.a.createElement("div",null,r.a.createElement("header",{className:U.a.user},r.a.createElement("img",{src:h(u.photo),alt:"Propic"}),r.a.createElement("span",null,u.id," "),v&&r.a.createElement("div",null,r.a.createElement("button",{className:U.a.unfollowBtn,onClick:function(){m(t)}},"Unfollow")),!v&&t!==c&&r.a.createElement("div",null,r.a.createElement("button",{className:U.a.followBtn,onClick:function(){i(t)}},"Follow"))),r.a.createElement("section",{className:U.a.bio},r.a.createElement("b",null,u.name),r.a.createElement("p",null,u.bio)),r.a.createElement("section",{className:U.a.statsNum},r.a.createElement("b",null,d.length),r.a.createElement("b",null,p.length),r.a.createElement("b",null,f.length)),r.a.createElement("section",{className:U.a.statsTitles},r.a.createElement("p",null,"posts"),r.a.createElement("p",null,"followers"),r.a.createElement("p",null,"following")),r.a.createElement("section",{className:U.a.posts},d.map((function(e){return r.a.createElement(g.b,{key:e.id,to:"/".concat(e.id)},r.a.createElement(J,{post:e}))}))))},W=a(14),H=a.n(W);var q=function(e){return r.a.createElement("nav",{className:H.a.navbar},r.a.createElement("div",{className:H.a.navItem},r.a.createElement(g.b,{to:"/"},r.a.createElement("img",{src:h("/assets/home.svg"),alt:"Home"}))),r.a.createElement("div",{className:H.a.navItem},r.a.createElement(g.b,{to:"/explore"},r.a.createElement("img",{src:h("/assets/explore.svg"),alt:"Explore"}))),r.a.createElement("div",{className:H.a.navItem},r.a.createElement(g.b,{to:"/newpost"},r.a.createElement("img",{src:h("/assets/newpost.svg"),alt:"New Post"}))),r.a.createElement("div",{className:H.a.navItem},r.a.createElement(g.b,{to:"/activity"},r.a.createElement("img",{src:h("/assets/activity.svg"),alt:"Activity"}))),r.a.createElement("div",{className:H.a.navItem},r.a.createElement(g.b,{to:"/profile"},r.a.createElement("img",{src:h("/assets/profile.svg"),alt:"Profile"}))))};var G=function(){return r.a.createElement(g.a,{basename:"/social-media-2"},r.a.createElement(w,null,r.a.createElement("div",{className:c.a.container},r.a.createElement(u,null),r.a.createElement("main",{className:c.a.content},r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/explore"},r.a.createElement(j,null)),r.a.createElement(k.a,{path:"/activity"},r.a.createElement(F,null)),r.a.createElement(k.a,{path:"/newpost"},r.a.createElement(L,null)),r.a.createElement(k.a,{path:"/profile/:userId?"},r.a.createElement(M,null)),r.a.createElement(k.a,{path:"/:postId?"},r.a.createElement(N,null)))),r.a.createElement(q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports={post:"Post_post__3-C8n",header:"Post_header__3rPny",user:"Post_user__30w6L",content:"Post_content__1Sr3E",imgContainer:"Post_imgContainer__27z5E",actions:"Post_actions__3Qy3R",activity:"Post_activity__2717Z",likes:"Post_likes__28M09",time:"Post_time__iC6DS",comments:"Post_comments__2LQKC",addComment:"Post_addComment__m7TDd"}}},[[29,1,2]]]);
//# sourceMappingURL=main.28fe60f3.chunk.js.map