import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import "@ucd-lib/cork-app-utils/lib/Mixin.js"
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-media-query/iron-media-query.js';

import template from "./template.js";
import style from "./style.js";

import LightDom from './light-dom.js';

class UCDLibraryMobileNav extends Mixin(PolymerElement)
.with(LightDom) {
    static get template(){
        return html([template + style]);
      }

  static get is() { return 'ucd-library-mobile-nav'; }
  static get properties() {
    return {
      verbose: {
        type: Boolean
      },
      library_url: {
          type: String,
          value: "https://www.library.ucdavis.edu"
      },
      api_base_url: {
        type: String,
        value: "/wp-json"
      },
      api_menu_url: {
        type: String,
        value: "/menus/v1/menus"
      },
      api_pages_url: {
        type: String,
        value: "/wp/v2/pages"
      }
    };
  }

  constructor() {
      super();
  }

  ready(){
      super.ready();
      if (this.verbose) {
        console.log("Mobile nav widget loaded.");

        if (typeof WP_POST_ID !== 'undefined'){
            console.log("Page id:", WP_POST_ID);
        }
        if (typeof WP_POST_TYPE !== 'undefined'){
            console.log("Page type:", WP_POST_TYPE);
        }

      }

      this.set('menu_main', this.get_wp_menu('main-nav'));
      //this.set('menu_info', this.get_wp_menu('info'));

  }

  get_wp_menu(menu) {
      /* Queries Wordpress API for ucdlib menu including submenus */
      var output = []

      // Get parent menu
      this.$.ajax_menu.url = this.menu_url(menu);
      let request_parent = this.$.ajax_menu.generateRequest();
      var element = this;
      request_parent.completes.then(function(req){
          var response = req.response;
          for (var link of response.items) {
              let link_filtered = element._parse_menu_item(link)
              output.push(link_filtered)
          }

          // determine submenus to query based on parent menu
          let submenus = [];
          if (menu == 'main-nav') {
              submenus = ['library-locations', 'alumni-and-friends', 'about'];
          }
          else if (menu == 'info') {
              submenus = ['lang-prize'];
          }

          // Fetch and combine the various submenus of the parent menu
          // First attempt to match on page id, then the label
          for (var submenu of submenus) {
              element.$.ajax_menu.url = element.menu_url(submenu);
              let request_child = element.$.ajax_menu.generateRequest();
              request_child.completes.then(function(child_req){
                  var child_response = child_req.response;
                  let parent = child_response.items.shift();
                  var in_output = false;
                  for (var i = 0; i < output.length; i++) {
                      if ( (output[i]['id'] == parent['object_id']) && (output[i]['object'] == parent['object']) ) {
                          in_output = true;
                          break;
                      }
                      else if ( output[i]['label'] == parent['title'] ) {
                          in_output = true;
                          break;
                      }
                  }
                  if (in_output == true) {
                      for (var child_link of child_response.items) {
                          let child_link_filtered = element._parse_menu_item(child_link);
                          output[i]['children'].push(child_link_filtered)
                      }
                  }

              }, function(rejected) {}
          )
          }

        }, function(rejected) {}
      )

      if (element.verbose) {
          console.log("Retrieved menu", menu, output);
      }
  }

  menu_url(menu){
      /* Constructs menu api url */
      let output = this.library_url + this.api_base_url + this.api_menu_url;
      output += ("/" + menu);
      return output
  }

  _parse_menu_item(item){
      /* Extract relevant data from a menu item */
      let output = {}
      output['id'] = item.object_id;
      output['object'] = item.object;
      output['link'] = item.url;
      output['label'] = item.title;
      output['order'] = item.menu_order;
      output['children'] = [];

      return output
  }



}

customElements.define(UCDLibraryMobileNav.is, UCDLibraryMobileNav);
