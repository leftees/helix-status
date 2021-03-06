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

/* eslint-env mocha */

'use strict';

const assert = require('assert');
const express = require('express');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
const {
  probotStatus,
} = require('../src/index.js');

chai.use(chaiHttp);

describe('Probot Tests', () => {
  it('probotStatus returns a function', () => {
    assert.equal(typeof probotStatus(), 'function');
  });

  it('probotStatus does not interfere with regular app code', () => {
    const app = express();

    app.get('/foo', (req, res) => {
      res.send('bar');
    });

    probotStatus({})({
      route: () => app,
    });

    chai.request(app).get('/foo').then((res) => {
      expect(res).to.have.status(200);
      expect(res.text).to.equal('bar');
    });
  });

  it('probotStatus serves XML status', () => {
    const app = express();

    app.get('/foo', (req, res) => {
      res.send('bar');
    });

    probotStatus()({
      route: () => app,
    });

    chai.request(app).get('/foo').then((res) => {
      expect(res).to.have.status(200);
      expect(res.text).to.equal('bar');
    });

    chai.request(app).get('/pingdom.xml').then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.have.header('content-type', 'application/xml; charset=utf-8');
    });

    chai.request(app).get('/healthcheck.json').then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
    });
  });

  it('probotStatus serves JSON status', () => {
    const app = express();

    app.get('/foo', (req, res) => {
      res.send('bar');
    });

    probotStatus()({
      route: () => app,
    });

    chai.request(app).get('/foo').then((res) => {
      expect(res).to.have.status(200);
      expect(res.text).to.equal('bar');
    });

    chai.request(app).get('/healthcheck.json').then((res) => {
      expect(res).to.have.status(200);
      expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
    });
  });
});
