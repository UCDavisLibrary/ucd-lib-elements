(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{2:function(e,t,n){"use strict";n.r(t);var r=n(6);n(17),n(25),n(11),n(30);let a=document.createElement("div");a.style.display="none",a.innerHTML="\n<style>\nlibrary-hours-week {\n  display: block;\n  background-color: transparent;\n  padding: 0px;\n  min-width: 275px;\n}\n\nlibrary-hours-week .hours-table{\n    border-top: 3px solid #d8d8d8;\n    border-bottom: 3px solid #d8d8d8;\n    border-collapse: collapse;\n    margin-bottom: 0px;\n    width: 100%;\n    display: table;\n}\n\nlibrary-hours-week .hours-tr {\n    background-color: transparent;\n    border: none;\n    display:table-row;\n}\n\nlibrary-hours-week .hours-td {\n    border-bottom: none;\n    padding-left: 4px;\n    padding-right: 4px;\n    padding-bottom: 8px;\n    word-wrap: normal;\n    display: table-cell;\n    vertical-align: middle;\n}\n\nlibrary-hours-week .hours-th {\n    padding-top: 14px;\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n}\n\nlibrary-hours-week .hours-th.is-today{\n    border-top: 3px solid #DAAA00;\n    border-right: 3px solid #DAAA00;\n    border-left: 3px solid #DAAA00;\n}\n\nlibrary-hours-week .hours-td.is-today{\n    border-right: 3px solid #DAAA00;\n    border-left: 3px solid #DAAA00;\n}\n\n\nlibrary-hours-week a {\n    color: #002655;\n}\nlibrary-hours-week img {\n    width: 25px;\n}\nlibrary-hours-week .closed {\n    color:#ba0c2f;\n    text-align: center;\n    font-weight: 600;\n    width: 11%;\n}\nlibrary-hours-week .open {\n    text-align: center;\n    width: 11%;\n}\n\nlibrary-hours-week th.is-today{\n    border-top: 3px solid #DAAA00;\n}\n\nlibrary-hours-week .keep-together{\n    white-space: nowrap;\n}\nlibrary-hours-week .status-icon{\n    margin-right: 8px;\n    margin-left: 8px;\n    margin-bottom: inherit !important;\n}\nlibrary-hours-week .lib-titles{\n      display:flex;\n      align-items:center;\n      font-weight: 600;\n      text-decoration: none;\n\n  }\nlibrary-hours-week .dept-titles{\n      display:flex;\n      align-items:center;\n  }\nlibrary-hours-week #month_container {\n\n      width: 100%;\n      height: 260px;\n      text-align: center;\n\n  }\n  library-hours-week #month_0,\n  library-hours-week #month_1,\n  library-hours-week #month_2 {\n      display: inline-block;\n      width: 250px;\n      height: 250px;\n      background-color: #fff;\n  }\n  library-hours-week .month_nav_left,\n  library-hours-week .month_nav_right{\n      display: inline-block;\n      height: 100%;\n      vertical-align: top;\n      padding-top: 125px;\n\n  }\n  library-hours-week .month_nav_left {\n      padding-left: 0px;\n      padding-right: 10px;\n  }\n  library-hours-week .month_nav_right {\n      padding-left: 10px;\n      padding-right: 0px;\n  }\n  library-hours-week #month_container .title {\n      display: block;\n      margin-top: 10px;\n      margin-bottom: none;\n  }\n  library-hours-week #month_container .col-header{\n\n      font-weight: 600;\n      display: inline-block;\n      width: 30px;\n      height: 30px;\n      font-size: 12px;\n  }\n  library-hours-week .cal-row{\n      width: 100%;\n      text-align: center;\n      margin-top: 2px;\n      margin-bottom: 2px;\n  }\n  library-hours-week .cal-day {\n      display: inline-block;\n      vertical-align: middle;\n      width: 30px;\n      height: 26px;\n      font-size: 12px;\n      cursor: pointer;\n      align-items: center;\n      font-weight: 400;\n      background-repeat: no-repeat;\n      background-size: 100% 100%;\n  }\n  library-hours-week .day-text {\n      position: relative;\n      top: 50%;\n      transform: translateY(-50%);\n  }\n  library-hours-week #month_container .previous,\n  library-hours-week #month_container .next {\n      color: #808080;\n  }\n\n  library-hours-week .legend-item {\n      display:flex;\n      align-items:center;\n      margin-top: 6px;\n      margin-bottom: 6px;\n  }\n\n  library-hours-week #legend-container {\n      background-color: #fff;\n      width: 335px;\n      min-height: 35px;\n      margin: auto;\n      margin-bottom: 10px;\n      margin-top: 10px;\n  }\n  library-hours-week .legend-icon {\n      margin-right: 8px;\n      width: 18px;\n      margin-bottom: inherit !important;\n  }\n  library-hours-week .legend-item-container{\n      display: inline-block;\n      margin-left: 5px;\n      margin-right: 5px;\n\n  }\n\n@media(min-width: 1000px){\n  library-hours-week #view_tablet {\n      display:none;\n  }\n  library-hours-week #view_desktop {\n      display:block;\n  }\n  library-hours-week #view_mobile {\n      display:none;\n  }\n\n\n  library-hours-week .hours-td {\n      border-top: 1px solid #d8d8d8;\n      border-left: none;\n      border-right: none;\n      padding-top: 8px;\n  }\n\n  library-hours-week .hours-th {\n      padding-bottom: 14px;\n  }\n\n  library-hours-week .hours-td:nth-child(odd), .hours-th:nth-child(odd) {\n    background-color: #fff;\n}\nlibrary-hours-week .hours-td:nth-child(even), .hours-th:nth-child(even) {\n      background-color: #f3f3f3;\n  }\n\n  library-hours-week .hours-tr:nth-last-child(2) .hours-td.is-today {\n      border-bottom: 3px solid #DAAA00;\n  }\n  library-hours-week .hours-td {\n      padding-bottom: 14px;\n  }\n\n  library-hours-week #month_0 .next.cal-day {\n      pointer-events: none;\n      background-image: none !important;\n  }\n  library-hours-week #month_0 .next.day-text {\n      display: none;\n  }\n\n  library-hours-week #month_0 .previous.day-text {\n      display: block;\n  }\n  library-hours-week #month_0 .previous.cal-text {\n      pointer-events: all;\n  }\n\n  library-hours-week #month_1 .next.day-text,\n  library-hours-week #month_1 .previous.day-text {\n      display: none;\n\n  }\n  library-hours-week #month_1 .next.cal-day,\n  library-hours-week #month_1 .previous.cal-day {\n      pointer-events: none;\n      background-image: none !important;\n\n  }\n\n  library-hours-week #month_2 .previous.day-text {\n      display: none;\n      background-image: none !important;\n\n  }\n  library-hours-week #month_2 .previous.cal-day {\n      pointer-events: none;\n      background-image: none !important;\n\n  }\n\n\n}\n@media(max-width: 1000px){\n  library-hours-week #view_tablet {\n      display:block;\n  }\n  library-hours-week #view_desktop {\n      display:none;\n  }\n  library-hours-week #view_mobile {\n      display:none;\n  }\n\n  library-hours-week #month_2 {\n      display: none;\n  }\n\n  library-hours-week #month_0 .next.day-text {\n      display: none;\n  }\n\n  library-hours-week #month_0 .next.cal-day {\n      pointer-events: none;\n      background-image: none !important;\n  }\n  library-hours-week #month_1 .previous.day-text {\n      display: none;\n  }\n  library-hours-week #month_1 .previous.cal-day {\n      pointer-events: none;\n      background-image: none !important;\n  }\n\n\n  library-hours-week .hours-td,\n  library-hours-week .hours-th {\n      background-color: #fff;\n      border-left: 1px solid #d8d8d8;\n      border-right: 1px solid #d8d8d8;\n      border-top: none;\n      border-bottom: none;\n\n  }\n  library-hours-week .hours-th {\n      padding-bottom: none;\n  }\n  library-hours-week .hours-td {\n      padding-top: 4px;\n  }\n  library-hours-week a {\n      padding-top: 12px;\n      padding-bottom: 12px;\n  }\n  library-hours-week .hours-table {\n      border-left: none;\n      border-right: none;\n      border-top: 1px solid #d8d8d8;\n      border-bottom: 2px solid #d8d8d8;\n  }\n\n  library-hours-week .hours-table[hidden] {\n      display:none;\n  }\n  library-hours-week .hours-tr:nth-last-child(1) .hours-td.is-today {\n      border-bottom: 3px solid #DAAA00;\n  }\n}\n\n@media(max-width: 700px){\n  library-hours-week #view_tablet {\n      display:none;\n  }\n  library-hours-week #view_desktop {\n      display:none;\n  }\n  library-hours-week #view_mobile {\n      display:block;\n  }\n  library-hours-week #month_1 {\n      display: none;\n  }\n  library-hours-week #month_2 {\n      display: none;\n  }\n\n  library-hours-week #month_0 .next.day-text {\n      display: block;\n  }\n\n  library-hours-week .month_nav_left {\n      padding-left: 0px;\n      padding-right: 0px;\n      padding-top: 110px;\n  }\n  library-hours-week .month_nav_right {\n      padding-left: 0px;\n      padding-right: 0px;\n      padding-top: 110px;\n  }\n  library-hours-week .cal-day {\n      width: 25px;\n      height: 21px;\n  }\n  library-hours-week #month_container .col-header {\n      width: 25px;\n      height: 21px;\n  }\n  library-hours-week #month_0{\n      width: 225px;\n      height: 230px;\n  }\n\n  library-hours-week .hours-td {\n      background-color: #fff;\n      border-left: none;\n      border-right: none;\n  }\n  library-hours-week .hours-tr.is-today {\n      border-bottom: 3px solid #DAAA00;\n      border-top: 3px solid #DAAA00;\n      border-left: 3px solid #DAAA00;\n      border-right: 3px solid #DAAA00;\n  }\n  library-hours-week .hours-table {\n      border-top: none;\n      border-bottom: none;\n  }\n  library-hours-week hr {\n      display: block;\n      height: 1px;\n      border: 0;\n      border-top: 2px solid #d8d8d8;\n      margin: 0;\n      padding: 0;\n  }\n\n  library-hours-week #legend-container {\n      width: 225px;\n\n  }\n\n  library-hours-week .legend-item-container{\n      margin-left: 8px;\n      margin-right: 8px;\n\n  }\n\n}\n</style>",document.head.appendChild(a);var i=e=>(class extends e{_attachDom(e){if(window.ShadyDOM&&window.ShadyDOM.inUse)return super._attachDom(e);let t=e.querySelectorAll("style");for(var n=0;n<t.length;n++)t[n].parentNode.removeChild(t[n]),this._stylesInserted||(t[n].setAttribute("id",this.nodeName.toLowerCase()+"-styles"),document.head.appendChild(t[n]));return this.appendChild(e),e}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):super.querySelector(e)}querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):super.querySelectorAll(e)}});class s extends(Mixin(r.a).with(i)){static get template(){return r["b"]`
        <style>
        :host {
            --ucd-hours-exception: url();
            --ucd-hours-selected: url();
            --ucd-hours-today: url();
            --ucd-hours-today-selected: url();
            --ucd-hours-selected-exception: url();
            --ucd-hours-today-exception: url();
        }
        #month_container .is_exception {
            background-image: var(--ucd-hours-exception);
        }
        .selected_day {
            background-image: var(--ucd-hours-selected);
        }
        .cal-day-today {
            background-image: var(--ucd-hours-today);
        }
        .selected_day.cal-day-today  {
            background-image: var(--ucd-hours-today-selected) !important;
        }

        .selected_day.is_exception  {
            background-image: var(--ucd-hours-selected-exception) !important;
        }
        .cal-day-today.is_exception {
            background-image: var(--ucd-hours-today-exception) !important;
        }
        </style>
        <iron-ajax
            id="init_ajax"
            url$="[[json_path]]"
            handle-as="json"
            on-response="_make_iron_ajax"
            debounce-duration="300"></iron-ajax>

    <iron-media-query query="min-width: 1000px" query-matches="{{view_desktop}}"></iron-media-query>
    <iron-media-query query="max-width: 1000px" query-matches="{{view_tablet}}"></iron-media-query>
    <iron-media-query query="max-width: 700px" query-matches="{{view_mobile}}"></iron-media-query>

    <template id="ajax_repeater" is="dom-repeat" items={{_api_parameters}} as="api">
    <iron-ajax
        id="[[api.id]]"
        url="[[api.url]]"
        params="[[api.params]]"
        handle-as="json"
        on-response="handle_response"
        debounce-duration="300"></iron-ajax>
    </template>

        <h2>[[element_title]]</h2>
        <div id="legend-container">
            <div class="legend-item-container">
                <p class="legend-item details-text" style="text-transform:none;">
                    <img  class="legend-icon" src="[[icon_dir]]cal-today.svg">
                    Today
                </p>
            </div>
            <div class="legend-item-container">
                <p class="legend-item details-text" style="text-transform:none;">
                    <img  class="legend-icon" src="[[icon_dir]]cal-selected.svg">
                    Selected Day
                </p>
            </div>
            <div class="legend-item-container">
                <p class="legend-item details-text" style="text-transform:none;">
                    <img  class="legend-icon" src="[[icon_dir]]cal-exception.svg">
                    Special Hours
                </p>
            </div>
        </div>

        <div id="month_container">
        <div class="month_nav_left">
            <i class="cork-chevron left gold" alt="past" on-click="change_month" style="cursor:pointer;"></i>
        </div>
            <template is="dom-repeat" items="{{month_array}}" as="month">
                <div id="{{month.order}}">
                    <span class="title details-text" style="text-transform:none;">[[month.label]]</span>
                    <div class="cal-row">
                        <div class="col-header"><div class="day-text">S</div></div>
                        <div class="col-header"><div class="day-text">M</div></div>
                        <div class="col-header"><div class="day-text">T</div></div>
                        <div class="col-header"><div class="day-text">W</div></div>
                        <div class="col-header"><div class="day-text">T</div></div>
                        <div class="col-header"><div class="day-text">F</div></div>
                        <div class="col-header"><div class="day-text">S</div></div>
                    </div>
                    <template is="dom-repeat" items="{{month.data}}" as="week">
                        <div class="cal-row">
                        <template is="dom-repeat" items="{{week}}" as="day">
                            <div locweek$= "[[day.loc_week]]" locday$= "[[day.loc_day]]" class$="[[day.is_today]] cal-day [[day.is_exception]] {{day.is_selected}} [[day.month_status]]" on-click="display_new_week">
                                <div class$="[[day.month_status]] day-text" day$="[[day.date_json]]">[[day.day]]</div>
                            </div>
                        </template>
                        </div>
                    </template>
                </div>
            </template>
            <div class="month_nav_right">
                <i class="cork-chevron right gold" alt="future" on-click="change_month" style="cursor:pointer;"></i>
            </div>
        </div>

        <div id="view_desktop">
        <div class="hours-table">
            <div class="hours-tr">
            <div class="hours-th"><h4 style="margin-bottom:0px;">[[_format_header(week_array)]]</h4></div>
            <template is="dom-repeat" items="{{week_array}}">
                <div class$="[[item.is_today]] hours-th"style="line-height: 18px;"><h4>[[item.day_str]]</h4>
                <span class="details-text" style="text-transform:none;">[[item.month_str]] [[item.day]]</span></div>
            </template>
            </div>
            <template is="dom-repeat" items="{{hours_this_week}}" sort=sort_hours>
            <div class="hours-tr">
                <div class="hours-td">
                    <a class$="[[item.type]]" href$=[[item.url]]>
                    <img  class="status-icon" src$=[[item.icon_url]] alt$=[[item.status]]>
                    [[item.title]]
                    </a>
                </div>
                <template is="dom-repeat" items="{{item.hours}}" as="hours">
                    <div class$="[[hours.hours.status]] [[hours.is_today]] hours-td">
                        <span class="keep-together">[[hours.display_string.open]]</span>
                        <span class="keep-together">[[hours.display_string.close]]</span>
                    </div>
                </template>
            </div>
            </template>
        </div>
        </div>

        <div id="view_tablet">
        <template is="dom-repeat" items="{{hours_this_week}}" sort=sort_hours>
            <a class$="[[item.type]]" href$=[[item.url]]>
            <img  class="status-icon" src$=[[item.icon_url]] alt$=[[item.status]]>
            [[item.title]]
            </a>
            <div class="hours-table">
                <div class="hours-tr">
                    <template is="dom-repeat" items="{{week_array}}">
                        <div class$="[[item.is_today]] hours-th" style="line-height: 18px;"><h4>[[item.day_str]]</h4>
                        <span class="details-text" style="text-transform:none;">[[item.month_str]] [[item.day]]</span></div>
                    </template>
                </div>
                <div class="hours-tr">
                    <template is="dom-repeat" items="{{item.hours}}" as="hours">
                        <div class$="[[hours.hours.status]] [[hours.is_today]] hours-td">
                            <span class="keep-together">[[hours.display_string.open]]</span>
                            <span class="keep-together">[[hours.display_string.close]]</span>
                        </div>
                    </template>
                </div>
            </div>
        </template>
        </div>

        <div id="view_mobile">
        <hr>
        <template is="dom-repeat" items="{{hours_this_week}}" sort=sort_hours>
            <a class$="[[item.type]]" href$=[[item.url]]>
            <img  class="status-icon" src$=[[item.icon_url]] alt$=[[item.status]]>
            [[item.title]]
            </a>
            <div hidden="hidden" class="hours-table" id="[[_concat_id(item.id, 'table')]]">
            <template is="dom-repeat" items="{{item.hours}}" as="hours">
                <div class$="[[hours.is_today]] hours-tr">
                    <div style="width:40%;" class="hours-td"><strong>[[hours.date.day_str]]</strong> [[hours.date.month_str]] [[hours.date.day]]
                    </div>
                    <div style="width:60%;" class$="[[hours.hours.status]] hours-td">
                        <span class="keep-together">[[hours.display_string.open]]</span>
                        <span class="keep-together">[[hours.display_string.close]]</span>
                    </div>
                </div>
            </template>
            </div>
            <div style="text-align:right;">
                <i id$="[[_concat_id(item.id, 'toggle')]]" on-click="toggle_lib_mobile" class="fa fa-plus" action="expand" style="color:#daaa00;cursor:pointer;"></i>
            </div>
            <hr>
        </template>
        </div>

        `}static get is(){return"library-hours-week"}static get properties(){return{_calendars:{type:Object,value:{}},_api_parameters:{type:Array,value:[]},json_path:{type:String},element_title:{type:String,value:""},verbose:{type:Boolean},hours_this_week:{type:Array,value:[]},today:{type:Date},selected_day:{type:Object,value:{}},ajax_ids:{type:Array,value:[]},event_ids:{type:Array,value:[]},_lib_event_crosswalk:{type:Object,value:{}},week_array:{type:Array,value:[]},month_array:{type:Array,value:[]},icon_dir:{type:String,value:""}}}constructor(){super()}ready(){super.ready(),this.updateStyles({"--ucd-hours-exception":`url("${this.icon_dir}cal-exception.svg")`,"--ucd-hours-selected":`url("${this.icon_dir}cal-selected.svg")`,"--ucd-hours-today":`url("${this.icon_dir}cal-today.svg")`,"--ucd-hours-today-selected":`url("${this.icon_dir}cal-today.svg")`,"--ucd-hours-selected-exception":`url("${this.icon_dir}cal-selected.svg"), url("${this.icon_dir}cal-exception.svg")`,"--ucd-hours-today-exception":`url("${this.icon_dir}cal-today.svg"), url("${this.icon_dir}cal-exception.svg")`});try{var e=(new Date).toLocaleString("en-US",{timeZone:"America/Los_Angeles"});e=new Date(e.split(",")[0]),this.today=e,this.set("selected_day.date",e)}catch(t){e=this._ie_today(),this.today=e,this.set("selected_day.date",e)}String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),this.set("selected_day.location",{}),this.week_array=this.create_week_array(e),this.verbose&&console.log("week_array",this.week_array),this.construct_month(e),this.verbose&&console.log("month_array",this.month_array),this.$.init_ajax.generateRequest()}_make_iron_ajax(e){for(var t=e.detail.response,n=0;n<t.length;n++){var r={};this.push("ajax_ids",t[n].ajax_id),r.url=t[n].url,r.params=t[n].params,r.id=t[n].ajax_id,this._lib_event_crosswalk[t[n].ajax_id]=t[n].event_series;for(var a=0;a<t[n].event_series.length;a++)this.push("event_ids",t[n].event_series[a].search_term);this.push("_api_parameters",r)}this.verbose&&console.log("api_parameters",this._api_parameters),this.$.ajax_repeater.render();for(n=0;n<this.ajax_ids.length;n++)this.querySelector("#"+this.ajax_ids[n]).generateRequest()}handle_response(e){for(var t=e.detail.response,n=e.target.getAttribute("id"),r=this._lib_event_crosswalk[n],a=0;a<r.length;a++){var i=r[a].search_term,s=r[a].title,o=r[a].type,d=r[a].url,l=this.parse_calendar(t,i);if(l){var h={title:s,id:i,data:l,ajax_id:n,type:o,url:d};this._calendars[i]=h;var c=this._create_week_hours(h),p=this.event_ids.indexOf(i);-1!=p&&(c.display_order=p,this.push("hours_this_week",c),this.verbose&&console.log(i,c));for(var u=0;u<this.month_array.length;u++)for(var _=0;_<this.month_array[u].data.length;_++)for(var y=0;y<this.month_array[u].data[_].length;y++){if("not_exception"==this.month_array[u].data[_][y].is_exception)this.day_hours(this.month_array[u].data[_][y].date,h.data).exception&&this.set(`month_array.${u}.data.${_}.${y}.is_exception`,"is_exception")}}}}display_new_week(e){if(this.set(`month_array.${this.selected_day.location.month}.data.${this.selected_day.location.week}.${this.selected_day.location.day}.is_selected`,"not_selected_day"),e.target.getAttribute("day"))var t=e.target.getAttribute("day").split("-"),n=e.target.parentNode;else t=e.target.children[0].getAttribute("day").split("-"),n=e.target;var r=n.parentNode.parentNode.getAttribute("id");r=parseInt(r.split("_")[1]);var a=parseInt(n.getAttribute("locweek")),i=parseInt(n.getAttribute("locday"));this.set(`month_array.${r}.data.${a}.${i}.is_selected`,"selected_day"),this.set("selected_day.location.month",r),this.set("selected_day.location.week",a),this.set("selected_day.location.day",i),t=new Date(t[0],t[1]-1,t[2]),this.set("selected_day.date",t),this.week_array=this.create_week_array(t);for(var s=[],o=0;o<this.event_ids.length;o++){var d=this._calendars[this.event_ids[o]],l=this._create_week_hours(d);l.display_order=o;for(var h=0;h<this.hours_this_week.length;h++)l.id==this.hours_this_week[h].id&&(l.icon_url=this.hours_this_week[h].icon_url,s.push(l))}this.hours_this_week=s}change_month(e){var t,n,r=e.target.getAttribute("alt");if(this.set("selected_day.just_created",!1),"future"==r){var a=this.month_array[2].month_n+1,i=this.month_array[2].year_n;12==a&&(a=0,i+=1),t=new Date(i,a,15),n=this._make_month_range(t,1,2,!0)[0],this.month_array[0].month_n==this.selected_day.date.getMonth()?(this.set(`month_array.${this.selected_day.location.month}.data.${this.selected_day.location.week}.${this.selected_day.location.day}.is_selected`,"not_selected_day"),this.set("selected_day.in_range",!1)):this.selected_day.in_range&&!this.selected_day.just_created&&this.set("selected_day.location.month",this.selected_day.location.month-1),this.shift("month_array"),this.push("month_array",n),this.set("month_array.0.order","month_0"),this.set("month_array.1.order","month_1")}else if("past"==r){a=this.month_array[0].month_n-1,i=this.month_array[0].year_n;-1==a&&(a=11,i-=1),t=new Date(i,a,15),n=this._make_month_range(t,1,0,!0)[0],this.month_array[2].month_n==this.selected_day.date.getMonth()?(this.set(`month_array.${this.selected_day.location.month}.data.${this.selected_day.location.week}.${this.selected_day.location.day}.is_selected`,"not_selected_day"),this.set("selected_day.in_range",!1)):this.selected_day.in_range&&!this.selected_day.just_created&&this.set("selected_day.location.month",this.selected_day.location.month+1),this.pop("month_array"),this.splice("month_array",0,0,n),this.set("month_array.1.order","month_1"),this.set("month_array.2.order","month_2")}}_make_month_range(e,t,n,r){for(var a=[],i=e.getMonth(),s=this.today.toJSON().split("T")[0],o=this.selected_day.date.toJSON().split("T")[0],d=["January","February","March","April","May","June","July","August","September","October","November","December"],l=n;l<t+n;l++){var h={},c=i+l-n;h.order="month_"+String(l),h.year_n=1900+e.getYear(),c>=12&&(c-=12,h.year_n+=1),h.month_n=c,h.label=d[c]+" "+String(h.year_n);var p=new Date(h.year_n,h.month_n,1),u=new Date(h.year_n,h.month_n,1);u.setDate(p.getDate()-p.getDay()),h.data=[];for(var _=[],y=0,m=0;m<43;m++){var g={},v=new Date(u);if(m%7==0&&0!=m){h.data.push(_),y+=1;_=[]}var b=new Date(v.setDate(u.getDate()+m)),w=1900+b.getYear();g.day=b.getDate(),g.date=b,g.date_json=b.toJSON().split("T")[0];var x=b.getMonth();if(g.date_json==s?g.is_today="cal-day-today":g.is_today="cal-day-not-today",h.year_n>w?g.month_status="previous":h.year_n<w?g.month_status="next":g.month_status=x==c?"current":x>c?"next":"previous",g.is_exception="not_exception",g.date_json==o?(g.is_selected="selected_day",this.set(`month_array.${this.selected_day.location.month}.data.${this.selected_day.location.week}.${this.selected_day.location.day}.is_selected`,"not_selected_day"),this.set("selected_day.location.month",l),this.set("selected_day.location.week",y),this.set("selected_day.location.day",m-7*y),this.set("selected_day.in_range",!0),this.set("selected_day.just_created",!0)):g.is_selected="not_selected_day",g.loc_month=l,g.loc_week=y,g.loc_day=m-7*y,r)for(var k in this._calendars){if(this.day_hours(b,this._calendars[k].data).exception){g.is_exception="is_exception";break}}_.push(g)}a.push(h)}return a}construct_month(e){for(var t=this._make_month_range(e,3,0,!1),n=0;n<t.length;n++)this.push("month_array",t[n])}_create_week_hours(e){var t=e.data,n={hours:[]};if("library"==e.type.toLowerCase()){var r=!0;n.type="lib-titles"}else{r=!1;n.type="dept-titles"}for(var a=0;a<7;a++){var i=this.week_array[a],s=this.day_hours(i.date,t),o=this.hours_string(s);n.hours.push({hours:s,display_string:o,date:i}),"is-today"==this.week_array[a].is_today?(n.hours[a].is_today="is-today",r?this.open_now(s)?n.icon_url=this.icon_dir+"open-lib.svg":n.icon_url=this.icon_dir+"closed-lib.svg":this.open_now(s)?n.icon_url=this.icon_dir+"open-dept.svg":n.icon_url=this.icon_dir+"closed-dept.svg"):n.hours[a].is_today="not-today"}return n.title=e.title,n.id=e.id,n.url=e.url,n}toggle_lib_mobile(e){var t="#"+e.target.getAttribute("id").split("__")[0]+"__table";"expand"==e.target.getAttribute("action")?(e.target.setAttribute("action","less"),e.target.setAttribute("class","fa fa-minus"),this.querySelector(t).removeAttribute("hidden")):(e.target.setAttribute("action","expand"),e.target.setAttribute("class","fa fa-plus"),this.querySelector(t).setAttribute("hidden","hidden"))}_concat_id(e,t){return e+"__"+t}open_now(e){if("closed"==e.status)return!1;try{var t=(n=(new Date).toLocaleString("en-GB",{timeZone:"America/Los_Angeles"})).split(",")[1].split(":");t=parseInt(t[0]+t[1])}catch(e){var n=this._ie_today(),r=String(n.getHours());1==r.length&&(r="0"+r);var a=String(n.getMinutes());1==a.length&&(a="0"+a);t=parseInt(r+a)}var i=e.start_time.split(":");i=parseInt(i[0]+i[1]);var s=e.end_time.split(":");return s=parseInt(s[0]+s[1]),t>=i&&t<s||t>=i&&i>=s}_format_header(e){var t="";return 7==e.length&&(t+=e[0].month_str.toUpperCase()+" "+e[0].day+" - ",e[0].month_str!=e[6].month_str&&(t+=e[6].month_str.toUpperCase()+" "),t+=e[6].day+", "+e[6].year),t}create_week_array(e){for(var t=[],n=e.getDay(),r=["SUN","MON","TUE","WED","THU","FRI","SAT","SUN"],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=this.today.toDateString(),s=0;s<7;s++){var o={},d=new Date(1900+e.getYear(),e.getMonth(),e.getDate());d.setDate(e.getDate()-n+s),o.i=s-1,o.date=d,d.toDateString()==i?o.is_today="is-today":o.is_today="not-today",o.day_str=r[d.getDay()],o.month_str=a[d.getMonth()],o.day=d.getDate(),o.year=1900+d.getYear(),t.push(o)}return t}sort_hours(e,t){return e.display_order-t.display_order}hours_string(e){if("closed"==e.status)return{open:"CLOSED",close:""};for(var t={},n=[e.start_time,e.end_time],r=0;r<2;r++){var a="",i=n[r].split(":"),s=parseInt(i[0]);if(s>12){s-=12;var o="pm"}else if(0==s){s=12;o="am"}else if(12==s){s=12;o="pm"}else o="am";a+=s.toString()+":"+i[1],a+=" "+o,0==r?t.open=a+" -":t.close=a}return t}parse_rrule(e){for(var t={},n=e.split(":")[1].split(";"),r=0;r<n.length;r++){var a=n[r].split("=");if("FREQ"==a[0])t.freq=a[1],"DAILY"==a[1]&&(t.days=["MO","TU","WE","TH","FR","SA","SU"]);else if("BYDAY"==a[0])t.days=a[1].split(",");else if("UNTIL"==a[0]){var i=a[1].substr(0,4),s=a[1].substr(4,2),o=a[1].substr(6,2);t.end_date=new Date(i+"-"+s+"-"+o)}}if(!("end_date"in t)){var d=new Date;d.setDate(d.getDate()+730),t.end_date=d}return t}to_goog_day(e){return{1:"MO",2:"TU",3:"WE",4:"TH",5:"FR",6:"SA",0:"SU"}[e]}split_datetime(e){var t={},n=e.split("T");n[0].split("-");return t.date=new Date(n[0]),t.time=n[1].substr(0,5),t}day_hours(e,t){var n=e.toISOString().split("T")[0];if(n in t.exceptions)return t.exceptions[n];for(var r=0;r<t.id.length;r++){var a=t.id[r];if(e>=t.rule[a].start_date&&e<=t.rule[a].end_date){var i=!1;try{i=t.rule[a].days.includes(this.to_goog_day(e.getDay()))}catch(n){for(var s=this.to_goog_day(e.getDay()),o=0;o<t.rule[a].days.length;o++)if(t.rule[a].days[o]==s){i=!0;break}}if(i){var d={};return d.start_time=t.rule[a].start_time,d.end_time=t.rule[a].end_time,d.exception=!1,d.status="open",d}}}return{status:"closed",exception:!1}}_ie_today(){for(var e=new Date,t=e.getTime()+6e4*e.getTimezoneOffset(),n=new Date(t+-252e5),r=new Date(t+-288e5),a=[new Date(2015,2,8),new Date(2015,10,2),new Date(2016,2,13),new Date(2016,10,7),new Date(2017,2,12),new Date(2017,10,6),new Date(2018,2,11),new Date(2018,10,5),new Date(2019,2,10),new Date(2019,10,4),new Date(2020,2,8),new Date(2020,10,2),new Date(2021,2,14),new Date(2021,10,8),new Date(2022,2,13),new Date(2022,10,7),new Date(2023,2,12),new Date(2023,10,6),new Date(2024,2,10),new Date(2024,10,4)],i=0;i<a.length;i++)if(r<a[i])return n;return console.log("Unable to determine daylight savings time. See _ie_today function"),e}parse_calendar(e,t){for(var n=e.items,r={id:[],name:{},rule:{},overlap:!1,exceptions:{}},a=0;a<n.length;a++)if("recurrence"in n[a]){if("description"in n[a])var i=n[a].description.toLowerCase();else i="";if(i.includes(t.toLowerCase())){var s=n[a].id,o=n[a].organizer.displayName,d=this.parse_rrule(n[a].recurrence[0]);if("dateTime"in n[a].start){var l=this.split_datetime(n[a].start.dateTime);d.start_date=l.date,d.start_time=l.time,d.end_time=this.split_datetime(n[a].end.dateTime).time}else d.start_date=new Date(n[a].start.date),d.start_time="00:00",d.end_time="00:00";r.id.push(s),r.name[s]=o,r.rule[s]=d}}if(0==r.id.length)return console.log(t,"not found in calendar. Unable to display hours."),!1;for(a=0;a<n.length;a++){var h=!1;try{h=r.id.includes(n[a].recurringEventId)}catch(e){for(var c=0;c<r.id.length;c++)if(n[a].recurringEventId==r.id[c]){h=!0;break}}if(h)if("cancelled"==n[a].status)u=(u=n[a].originalStartTime.dateTime).split("T")[0],r.exceptions[u]={exception:!0,status:"closed"};else if("confirmed"==n[a].status){var p={},u=n[a].start.dateTime.split("T")[0];p.end_time=this.split_datetime(n[a].end.dateTime).time,p.start_time=this.split_datetime(n[a].start.dateTime).time,p.status="open",p.exception=!0;var _=r.rule[n[a].recurringEventId].start_time,y=r.rule[n[a].recurringEventId].end_time;_==p.start_time&&y==p.end_time||(r.exceptions[u]=p)}}return r}}customElements.define(s.is,s)}}]);