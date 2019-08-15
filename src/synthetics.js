/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// This is an autogenerated file, changes will be overwritten

const assert = require('assert');

$http.get('$$$URL$$$',
  // Callback
  (err, response, body) => {
    const status = JSON.parse(body);
    for (const v in status) {
      if (['status', 'error', 'process', 'version'].indexOf(v) === -1) {
        $util.insights.set(v, parseInt(status[v]));
      }
    }
    $util.insights.set('status', status.status);
    for (const h in ['x-openwhisk-activation-id', 'x-request-id', 'x-version']) {
      $util.insights.set(h, response.headers[h]);
    }
    if (status.error) {
      $util.insights.set('errorStatus', status.error.statuscode);
      $util.insights.set('errorURL', status.error.url);
    }
    if (status.status !== 'OK') {
      console.error(body);
    }
    assert.equal(status.status, 'OK', `Expected an OK health check status, got: ${status.status}`);
    assert.equal(response.statusCode, 200, `Expected a 200 OK response, got ${response.statusCode}`);
  });
