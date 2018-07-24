(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <iron-ajax\n        id$="[[search_term]]"\n        url$="[[endpoint]]"\n        params$="[[api_params]]"\n        handle-as="json"\n        on-response="handle_response"\n        debounce-duration="300">\n    </iron-ajax>\n    <span class="open-status">\n        <img  class="status-icon" src$=[[status_icon]] alt$=[[status]]>\n        <strong>[[status_str]]</strong>\n    </span>\n    <div class="open-hours">\n        <span class="keep-together">[[todays_hours.open]]</span>\n        <span class="keep-together">[[todays_hours.close]]</span>\n    </div>\n\n        '],['\n    <iron-ajax\n        id$="[[search_term]]"\n        url$="[[endpoint]]"\n        params$="[[api_params]]"\n        handle-as="json"\n        on-response="handle_response"\n        debounce-duration="300">\n    </iron-ajax>\n    <span class="open-status">\n        <img  class="status-icon" src$=[[status_icon]] alt$=[[status]]>\n        <strong>[[status_str]]</strong>\n    </span>\n    <div class="open-hours">\n        <span class="keep-together">[[todays_hours.open]]</span>\n        <span class="keep-together">[[todays_hours.close]]</span>\n    </div>\n\n        ']),s=n(6);n(16),n(19),n(47);var i=function(e){return e&&e.__esModule?e:{default:e}}(n(45));var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Mixin(s.PolymerElement).with(i.default)),r(t,null,[{key:"template",get:function(){return(0,s.html)(o)}},{key:"is",get:function(){return"library-hours-single"}},{key:"properties",get:function(){return{verbose:{type:Boolean},today:{type:Date},endpoint:{type:String},key:{type:String},search_term:{type:String},api_params:{type:Object},status:{type:String},status_str:{type:String},status_icon:{type:String},todays_hours:{type:Object},icon_dir:{type:String,value:""}}}}]),r(t,[{key:"ready",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,r)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"ready",this).call(this);try{var e=(new Date).toLocaleString("en-US",{timeZone:"America/Los_Angeles"});e=new Date(e.split(",")[0]),this.today=e}catch(t){e=this._ie_today(),this.today=e}this.verbose&&console.log("today",this.today),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)});var n={key:this.key,q:this.search_term,singleEvents:!0},r=this.today.toJSON().split("T")[0]+"T22:00:00-07:00";n.timeMax=r;var o=this.today.toJSON().split("T")[0]+"T02:00:00-07:00";n.timeMin=o,this.api_params=n,this.verbose&&console.log("api_params",n),this.querySelector("#"+this.search_term).generateRequest()}},{key:"handle_response",value:function(e){var t=e.detail.response;if(this.verbose&&console.log("raw response",t),t.items.length<1)this.set("status","lib-closed"),this.set("status_icon",this.icon_dir+"closed-lib.svg");else{t.items.length>1&&console.log("More than one event retrieved for "+this.search_term+". Displaying first item.");var n=t.items[0],r={};if("dateTime"in n.start){var o=this._split_datetime(n.start.dateTime);r.start_date=o.date,r.start_time=o.time,r.end_time=this._split_datetime(n.end.dateTime).time}else r.start_date=new Date(this.today),r.start_time="00:00",r.end_time="00:00";this._open_now(r)?(this.set("status","lib-open"),this.set("status_icon",this.icon_dir+"open-lib.svg")):(this.set("status","lib-closed"),this.set("status_icon",this.icon_dir+"closed-lib.svg"))}if("lib-closed"==this.status)this.set("status_str","Currently CLOSED"),this.set("todays_hours",{open:"",close:""});else{this.set("status_str","Currently OPEN");var s=this._hours_string(r);this.set("todays_hours",s)}}},{key:"_ie_today",value:function(){for(var e=new Date,t=e.getTime()+6e4*e.getTimezoneOffset(),n=new Date(t+-252e5),r=new Date(t+-288e5),o=[new Date(2015,2,8),new Date(2015,10,2),new Date(2016,2,13),new Date(2016,10,7),new Date(2017,2,12),new Date(2017,10,6),new Date(2018,2,11),new Date(2018,10,5),new Date(2019,2,10),new Date(2019,10,4),new Date(2020,2,8),new Date(2020,10,2),new Date(2021,2,14),new Date(2021,10,8),new Date(2022,2,13),new Date(2022,10,7),new Date(2023,2,12),new Date(2023,10,6),new Date(2024,2,10),new Date(2024,10,4)],s=0;s<o.length;s++)if(r<o[s])return n;return console.log("Unable to determine daylight savings time. See _ie_today function"),e}},{key:"_split_datetime",value:function(e){var t={},n=e.split("T");n[0].split("-");return t.date=new Date(n[0]),t.time=n[1].substr(0,5),t}},{key:"_hours_string",value:function(e){for(var t={},n=[e.start_time,e.end_time],r=0;r<2;r++){var o="",s=n[r].split(":"),i=parseInt(s[0]);if(i>12){i-=12;var a="pm"}else if(0==i){i=12;a="am"}else if(12==i){i=12;a="pm"}else a="am";o+=i.toString()+":"+s[1],o+=" "+a,0==r?t.open="Today: "+o+" -":t.close=o}return t}},{key:"_open_now",value:function(e){try{var t=(n=(new Date).toLocaleString("en-GB",{timeZone:"America/Los_Angeles"})).split(",")[1].split(":");t=parseInt(t[0]+t[1])}catch(e){var n=this._ie_today(),r=String(n.getHours());1==r.length&&(r="0"+r);var o=String(n.getMinutes());1==o.length&&(o="0"+o);t=parseInt(r+o)}var s=e.start_time.split(":");s=parseInt(s[0]+s[1]);var i=e.end_time.split(":");return i=parseInt(i[0]+i[1]),t>=s&&t<i||t>=s&&s>=i}}]),t}();customElements.define(a.is,a)},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,r)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(r):void 0};t.default=function(e){return function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e),r(n,[{key:"_attachDom",value:function(e){if(window.ShadyDOM&&window.ShadyDOM.inUse)return o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"_attachDom",this).call(this,e);for(var t=e.querySelectorAll("style"),r=0;r<t.length;r++)t[r].parentNode.removeChild(t[r]),this._stylesInserted||(t[r].setAttribute("id",this.nodeName.toLowerCase()+"-styles"),document.head.appendChild(t[r]));return this.appendChild(e),e}},{key:"querySelector",value:function(e){return this.shadowRoot?this.shadowRoot.querySelector(e):o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"querySelector",this).call(this,e)}},{key:"querySelectorAll",value:function(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"querySelectorAll",this).call(this,e)}}]),n}()}},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="\n<style>\nlibrary-hours-single .keep-together{\n    white-space: nowrap;\n}\nlibrary-hours-single .open-status{\n    display: flex;\n    align-items:center;\n}\nlibrary-hours-single .status-icon{\n    margin-right: 8px;\n    margin-left: 8px;\n    margin-bottom: inherit !important;\n    width: 25px;\n    height: 25px;\n    min-width: 25px;\n    min-height: 25px;\n}\nlibrary-hours-single .open-hours{\n    padding-left: 41px;\n}\n\n</style>"},47:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(46));var o=document.createElement("template");o.innerHTML=r.default,document.head.appendChild(o.content)}}]);