import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import "@ucd-lib/cork-app-utils/lib/Mixin.js"
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-media-query/iron-media-query.js';

import template from "./template.js";
import style from "./style.js";

import LightDom from './styles/light-dom.js';


class LibrarySearchDB extends Mixin(PolymerElement)
.with(LightDom) {
    static get template(){
        return html([template + style]);
      }

  static get is() { return 'library-search-db'; }
  static get properties() {
    return {
      subjects: {
          type: Array,
          value: ["Any Subject"],
      },
      materials: {
          type: Array,
          value: ["Any Material"],
      },
      verbose: {
        type: Boolean
      },
      api_base_url: {
        type: String,
        value: "https://www.library.ucdavis.edu/wp-json"
      },
      api_materials_url: {
        type: String,
        value: "/wp/v2/categories"
      },
      api_subjects_url: {
        type: String,
        value: "/wp/v2/categories"
      },
    };
  }
  constructor() {
      super();
  }

  ready(){
      super.ready();
      fetch_filters();

  }

  fetch_filters(){
    /* Queries Wordpress API for materials and subject taxonomy items*/

    // Set urls
    let url_params = "?per_page=100";
    this.$.ajax_materials.url = this.api_base_url + this.api_materials_url + url_params;
    this.$.ajax_subjects.url = this.api_base_url + this.api_subjects_url + url_params;

    if ( this.verbose ){
      this.$.ajax_materials.verbose = true;
      this.$.ajax_subjects.verbose = true;
    }

    // Make requests
    let request_materials = this.$.ajax_materials.generateRequest();
    let request_subjects = this.$.ajax_subjects.generateRequest();
    var element = this;

    // Push material names to array
    request_materials.completes.then(function(req) {
      var response = req.response;
      req.response.map(material => element.push('materials',material.name));

      if (element.verbose) {
          console.log("Materials Response: ", response);
          console.log("Materials List: ", element.materials);
      }

    }, function(rejected) {}
  )

    // Push subject names to array
    request_subjects.completes.then(function(req) {
      var response = req.response;
      req.response.map(subject => element.push('subjects',subject.name));

      if (element.verbose) {
          console.log("Subjects Response: ", response);
          console.log("Subjects List: ", element.subjects);
      }

    }, function(rejected) {}
  )
  }



}

customElements.define(LibrarySearchDB.is, LibrarySearchDB);
