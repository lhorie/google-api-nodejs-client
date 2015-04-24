/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google Cloud Search API
 *
 * @classdesc The Google Cloud Search API defines an application interface to index documents that contain structured data and to search those indexes. It supports full text search.
 * @namespace cloudsearch
 * @version  v1
 * @variation v1
 * @this Cloudsearch
 * @param {object=} options Options for Cloudsearch
 */
function Cloudsearch(options) {

  var self = this;
  this._options = options || {};

}

/**
 * Exports Cloudsearch object
 * @type Cloudsearch
 */
module.exports = Cloudsearch;