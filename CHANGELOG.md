## [7.1.1](https://github.com/adobe/helix-status/compare/v7.1.0...v7.1.1) (2020-01-23)


### Bug Fixes

* **deps:** update dependency @adobe/helix-log to v4.5.0 ([#115](https://github.com/adobe/helix-status/issues/115)) ([2489484](https://github.com/adobe/helix-status/commit/248948485c344482dcffca6565ba0f6c7abd60ae))

# [7.1.0](https://github.com/adobe/helix-status/compare/v7.0.3...v7.1.0) (2020-01-22)


### Features

* **checks:** report error 500 when generic status check function cannot be executed ([c8923ef](https://github.com/adobe/helix-status/commit/c8923ef96189352696039a9c078ded9e62efae03)), closes [#48](https://github.com/adobe/helix-status/issues/48)
* **status:** enable function checks, option checks and parametrized option checks ([cbc190c](https://github.com/adobe/helix-status/commit/cbc190c2f486d4d72b46a01437f6b8fbb26bbb3c)), closes [#48](https://github.com/adobe/helix-status/issues/48)

## [7.0.3](https://github.com/adobe/helix-status/compare/v7.0.2...v7.0.3) (2020-01-09)


### Bug Fixes

* **deps:** update [@adobe](https://github.com/adobe) ([#106](https://github.com/adobe/helix-status/issues/106)) ([ec5a8db](https://github.com/adobe/helix-status/commit/ec5a8db2b508af7193abf425003d08f94deca8bf))

## [7.0.2](https://github.com/adobe/helix-status/compare/v7.0.1...v7.0.2) (2019-11-20)


### Bug Fixes

* **deps:** don't pin request-promise-native and update renovate config ([#104](https://github.com/adobe/helix-status/issues/104)) ([423cfdd](https://github.com/adobe/helix-status/commit/423cfdd9029d21a83ea0208ec3687c6da2ba61c2))

## [7.0.1](https://github.com/adobe/helix-status/compare/v7.0.0...v7.0.1) (2019-11-20)


### Bug Fixes

* **deps:** update request-promise-native@1.0.8 ([#105](https://github.com/adobe/helix-status/issues/105)) ([b98dc9e](https://github.com/adobe/helix-status/commit/b98dc9e008611fab5c01219704d05384e8d405dd))

# [7.0.0](https://github.com/adobe/helix-status/compare/v6.0.2...v7.0.0) (2019-11-19)


### Features

* **monitoring:** move scripts to own repository ([#97](https://github.com/adobe/helix-status/issues/97)) ([c39a624](https://github.com/adobe/helix-status/commit/c39a62444dd15bc0c46e1c1c8a253b0dd2c26da6))


### BREAKING CHANGES

* **monitoring:** For monitoring automation, you now have to include @adobe/helix-ops as dev dependency in your package.json

## [6.0.2](https://github.com/adobe/helix-status/compare/v6.0.1...v6.0.2) (2019-11-15)


### Bug Fixes

* **monitoring:** fixed type error ([c433ddc](https://github.com/adobe/helix-status/commit/c433ddce90ab72b8e6a079925940e073bbad3b9a))

## [6.0.1](https://github.com/adobe/helix-status/compare/v6.0.0...v6.0.1) (2019-11-15)


### Bug Fixes

* **release:** trigger release ([d4cbce2](https://github.com/adobe/helix-status/commit/d4cbce2ae9e7ff9d35c8d2231913c47592ac290d))
* **release:** trigger release [skip ci] ([306f986](https://github.com/adobe/helix-status/commit/306f986c8a936b1e967736a822658fa951e9d9c1))

# [6.0.0](https://github.com/adobe/helix-status/compare/v5.4.0...v6.0.0) (2019-11-15)


### Code Refactoring

* **monitoring:** remove config loading from package.json ([#93](https://github.com/adobe/helix-status/issues/93)) ([2d5a245](https://github.com/adobe/helix-status/commit/2d5a24546fafca87e7b82f49679fbeb18729a5c1))


### BREAKING CHANGES

* **monitoring:** Monitoring config in package.json no longer supported. Use command parameters in .circleci/config.yml instead. See https://circleci.com/orbs/registry/orb/adobe/helix-post-deploy for more information.

# [5.4.0](https://github.com/adobe/helix-status/compare/v5.3.2...v5.4.0) (2019-11-14)


### Features

* **monitoring:** use namespace specific wsk auth ([#89](https://github.com/adobe/helix-status/issues/89)) ([f5b522c](https://github.com/adobe/helix-status/commit/f5b522c748ee05266e70612f2650cb7ac55e6e79))

## [5.3.2](https://github.com/adobe/helix-status/compare/v5.3.1...v5.3.2) (2019-11-08)


### Bug Fixes

* **deps:** update dependency @adobe/helix-log to v4 ([#85](https://github.com/adobe/helix-status/issues/85)) ([6d2aca3](https://github.com/adobe/helix-status/commit/6d2aca3ec2f0ab96a4b5c2cc0e0498ca898c58c0))

## [5.3.1](https://github.com/adobe/helix-status/compare/v5.3.0...v5.3.1) (2019-11-06)


### Bug Fixes

* **ci:** correct tool path ([#84](https://github.com/adobe/helix-status/issues/84)) ([566f627](https://github.com/adobe/helix-status/commit/566f62702fe3f1c18af6cad3bedc6e65e3510ddb))

# [5.3.0](https://github.com/adobe/helix-status/compare/v5.2.0...v5.3.0) (2019-10-23)


### Features

* **monitoring:** Add more timing data ([#75](https://github.com/adobe/helix-status/issues/75)) ([1316554](https://github.com/adobe/helix-status/commit/1316554))

# [5.2.0](https://github.com/adobe/helix-status/compare/v5.1.1...v5.2.0) (2019-10-22)


### Features

* **monitoring:** Extract and store Activation Metadata ([#76](https://github.com/adobe/helix-status/issues/76)) ([ebe9de0](https://github.com/adobe/helix-status/commit/ebe9de0))

## [5.1.1](https://github.com/adobe/helix-status/compare/v5.1.0...v5.1.1) (2019-10-17)


### Bug Fixes

* **deps:** update dependency @adobe/helix-log to v3 ([#73](https://github.com/adobe/helix-status/issues/73)) ([a1a40b7](https://github.com/adobe/helix-status/commit/a1a40b7))

# [5.1.0](https://github.com/adobe/helix-status/compare/v5.0.2...v5.1.0) (2019-10-07)


### Features

* **monitotring:** update statuspage component group and description ([3803301](https://github.com/adobe/helix-status/commit/3803301))

## [5.0.2](https://github.com/adobe/helix-status/compare/v5.0.1...v5.0.2) (2019-10-05)


### Bug Fixes

* **deploy:** use helix-services-private ([#66](https://github.com/adobe/helix-status/issues/66)) ([33a3b9c](https://github.com/adobe/helix-status/commit/33a3b9c))

## [5.0.1](https://github.com/adobe/helix-status/compare/v5.0.0...v5.0.1) (2019-09-30)


### Bug Fixes

* **monitoring:** missing alias for --page_id ([#54](https://github.com/adobe/helix-status/issues/54)) ([#55](https://github.com/adobe/helix-status/issues/55)) ([0e9af5e](https://github.com/adobe/helix-status/commit/0e9af5e))

# [5.0.0](https://github.com/adobe/helix-status/compare/v4.3.6...v5.0.0) (2019-09-28)


### Features

* **monitoring:** automate statuspage and new relic integration ([#46](https://github.com/adobe/helix-status/issues/46)) ([f87ae51](https://github.com/adobe/helix-status/commit/f87ae51))


### BREAKING CHANGES

* **monitoring:** removed `synthetics-check`, added `newrelic` and `statuspage`

## [4.3.6](https://github.com/adobe/helix-status/compare/v4.3.5...v4.3.6) (2019-09-27)


### Bug Fixes

* **monitoring:** readd all AWS locations ([65cde25](https://github.com/adobe/helix-status/commit/65cde25))

## [4.3.5](https://github.com/adobe/helix-status/compare/v4.3.4...v4.3.5) (2019-09-27)


### Bug Fixes

* update package.json to fix vulns ([e54827c](https://github.com/adobe/helix-status/commit/e54827c))
* Upgrade all to fix vulns ([e25c252](https://github.com/adobe/helix-status/commit/e25c252))
* Would crash in the action because of outdated helix log ([47e7cf9](https://github.com/adobe/helix-status/commit/47e7cf9))

## [4.3.4](https://github.com/adobe/helix-status/compare/v4.3.3...v4.3.4) (2019-09-27)


### Bug Fixes

* **monitoring:** remove deprecated locations, reduce overall number ([a2b619f](https://github.com/adobe/helix-status/commit/a2b619f)), closes [#50](https://github.com/adobe/helix-status/issues/50)

## [4.3.3](https://github.com/adobe/helix-status/compare/v4.3.2...v4.3.3) (2019-09-04)


### Bug Fixes

* **bin:** guard against having more than 20 monitors ([71189fb](https://github.com/adobe/helix-status/commit/71189fb))

## [4.3.2](https://github.com/adobe/helix-status/compare/v4.3.1...v4.3.2) (2019-09-04)


### Bug Fixes

* **bin:** do not print complete error message on failure ([33db323](https://github.com/adobe/helix-status/commit/33db323))

## [4.3.1](https://github.com/adobe/helix-status/compare/v4.3.0...v4.3.1) (2019-09-03)


### Bug Fixes

* **user-agent:** fix user agent version strings ([994a6c6](https://github.com/adobe/helix-status/commit/994a6c6))

# [4.3.0](https://github.com/adobe/helix-status/compare/v4.2.1...v4.3.0) (2019-09-03)


### Bug Fixes

* **check:** use standard format for user agent string ([f4ebfb4](https://github.com/adobe/helix-status/commit/f4ebfb4)), closes [/github.com/adobe/helix-status/pull/43#discussion_r320057819](https://github.com//github.com/adobe/helix-status/pull/43/issues/discussion_r320057819)


### Features

* **http:** include a user agent for all requests ([75049cf](https://github.com/adobe/helix-status/commit/75049cf))
* **index:** add support for probot applications ([9002686](https://github.com/adobe/helix-status/commit/9002686))

## [4.2.1](https://github.com/adobe/helix-status/compare/v4.2.0...v4.2.1) (2019-09-02)


### Bug Fixes

* **dependencies:** npm audit fix ([64540f2](https://github.com/adobe/helix-status/commit/64540f2))

# [4.2.0](https://github.com/adobe/helix-status/compare/v4.1.0...v4.2.0) (2019-08-19)


### Bug Fixes

* **status:** report timeouts with 504, all other backend errors with 502 ([a9b99c3](https://github.com/adobe/helix-status/commit/a9b99c3)), closes [#38](https://github.com/adobe/helix-status/issues/38)


### Features

* **status:** separate backend status from reported status ([5f6058e](https://github.com/adobe/helix-status/commit/5f6058e))

# [4.1.0](https://github.com/adobe/helix-status/compare/v4.0.0...v4.1.0) (2019-08-15)


### Bug Fixes

* **synthetics:** fix the environment variable name ([b903386](https://github.com/adobe/helix-status/commit/b903386))


### Features

* **newrelics:** provide installer script that creates a new monitor ([df9145a](https://github.com/adobe/helix-status/commit/df9145a)), closes [#36](https://github.com/adobe/helix-status/issues/36)

# [4.0.0](https://github.com/adobe/helix-status/compare/v3.1.1...v4.0.0) (2019-08-15)


### Styles

* **package:** rename to helix-status ([5f741a2](https://github.com/adobe/helix-status/commit/5f741a2)), closes [#29](https://github.com/adobe/helix-status/issues/29)


### BREAKING CHANGES

* **package:** Adjusts the package name to `helix-status`, as the library and service is no longer exclusive to Pingdom. The service will be available under a new name and the old package will be marked as deprecated on NPM with instructions to update to the new status library.

## [3.1.1](https://github.com/adobe/helix-pingdom-status/compare/v3.1.0...v3.1.1) (2019-08-14)


### Bug Fixes

* **action:** check for JSON path in pure runtime function, too ([2865c38](https://github.com/adobe/helix-pingdom-status/commit/2865c38)), closes [#34](https://github.com/adobe/helix-pingdom-status/issues/34)

# [3.1.0](https://github.com/adobe/helix-pingdom-status/compare/v3.0.0...v3.1.0) (2019-08-07)


### Bug Fixes

* **xml:** don't use CDATA, but escape XML strings ([fe432b4](https://github.com/adobe/helix-pingdom-status/commit/fe432b4))


### Features

* **status:** support getting status in JSON format ([9818461](https://github.com/adobe/helix-pingdom-status/commit/9818461))

# [3.0.0](https://github.com/adobe/helix-pingdom-status/compare/v2.0.2...v3.0.0) (2019-07-26)


### Features

* **index:** Return error status code on error (standard Http check) ([1468c04](https://github.com/adobe/helix-pingdom-status/commit/1468c04)), closes [#21](https://github.com/adobe/helix-pingdom-status/issues/21)


### BREAKING CHANGES

* **index:** Returns error Http status on error (Standard Http check) instead of always 200
(Custom Http check)

## [2.0.2](https://github.com/adobe/helix-pingdom-status/compare/v2.0.1...v2.0.2) (2019-07-25)


### Bug Fixes

* **package:** downgrade snyk to 1.199.0 ([622814c](https://github.com/adobe/helix-pingdom-status/commit/622814c)), closes [#26](https://github.com/adobe/helix-pingdom-status/issues/26)

## [2.0.1](https://github.com/adobe/helix-pingdom-status/compare/v2.0.0...v2.0.1) (2019-07-24)


### Bug Fixes

* **package:** update snyk to version 2.0.0 ([afe472b](https://github.com/adobe/helix-pingdom-status/commit/afe472b))

# [2.0.0](https://github.com/adobe/helix-pingdom-status/compare/v1.4.4...v2.0.0) (2019-07-23)


### Features

* **index:** base Pingdom check detection on user agent ([67d6aaa](https://github.com/adobe/helix-pingdom-status/commit/67d6aaa)), closes [#17](https://github.com/adobe/helix-pingdom-status/issues/17)
* **index:** determine if it's a pingdom check based on dedicated path rather than user agent ([f7e35c3](https://github.com/adobe/helix-pingdom-status/commit/f7e35c3)), closes [#17](https://github.com/adobe/helix-pingdom-status/issues/17)


### BREAKING CHANGES

* **index:** The behaviour of the wrapper changed. Pingdom status response generation depends on
a dedicated path instead of Http method and absence of parameters
* **index:** The behaviour of the wrapper changed. Pingdom status response generation depends on
user agent instead of Http method and absence of parameters.

## [1.4.4](https://github.com/adobe/helix-pingdom-status/compare/v1.4.3...v1.4.4) (2019-07-12)


### Bug Fixes

* **status:** add timeout for backend checks ([d90e6ff](https://github.com/adobe/helix-pingdom-status/commit/d90e6ff)), closes [#11](https://github.com/adobe/helix-pingdom-status/issues/11)

## [1.4.3](https://github.com/adobe/helix-pingdom-status/compare/v1.4.2...v1.4.3) (2019-07-11)


### Bug Fixes

* **status:** include x-version header ([#14](https://github.com/adobe/helix-pingdom-status/issues/14)) ([7d71fa2](https://github.com/adobe/helix-pingdom-status/commit/7d71fa2)), closes [#7](https://github.com/adobe/helix-pingdom-status/issues/7)

## [1.4.2](https://github.com/adobe/helix-pingdom-status/compare/v1.4.1...v1.4.2) (2019-07-11)


### Bug Fixes

* **status:** always send 200 ([9a5400a](https://github.com/adobe/helix-pingdom-status/commit/9a5400a)), closes [#12](https://github.com/adobe/helix-pingdom-status/issues/12)

## [1.4.1](https://github.com/adobe/helix-pingdom-status/compare/v1.4.0...v1.4.1) (2019-07-05)


### Bug Fixes

* **error:** add missing ] in CDATA section ([9ac26a5](https://github.com/adobe/helix-pingdom-status/commit/9ac26a5)), closes [#9](https://github.com/adobe/helix-pingdom-status/issues/9)
* **report:** use version from correct package.json ([0b467df](https://github.com/adobe/helix-pingdom-status/commit/0b467df)), closes [#7](https://github.com/adobe/helix-pingdom-status/issues/7)

# [1.4.0](https://github.com/adobe/helix-pingdom-status/compare/v1.3.2...v1.4.0) (2019-06-27)


### Features

* **index:** only report status when __ow_path is undefined or empty ([c13f273](https://github.com/adobe/helix-pingdom-status/commit/c13f273))

## [1.3.2](https://github.com/adobe/helix-pingdom-status/compare/v1.3.1...v1.3.2) (2019-06-26)


### Bug Fixes

* **wrap:** exclude parameters in ALL_CAPS from qualifying for pass-through ([c418dad](https://github.com/adobe/helix-pingdom-status/commit/c418dad))

## [1.3.1](https://github.com/adobe/helix-pingdom-status/compare/v1.3.0...v1.3.1) (2019-06-26)


### Bug Fixes

* **index:** do not report status for get requests with URL parameters when wrapping ([207cb3a](https://github.com/adobe/helix-pingdom-status/commit/207cb3a))

# [1.3.0](https://github.com/adobe/helix-pingdom-status/compare/v1.2.0...v1.3.0) (2019-06-16)


### Features

* **index:** include version in pingdom response ([84fee5b](https://github.com/adobe/helix-pingdom-status/commit/84fee5b)), closes [#1](https://github.com/adobe/helix-pingdom-status/issues/1)

# [1.2.0](https://github.com/adobe/helix-pingdom-status/compare/v1.1.0...v1.2.0) (2019-06-16)


### Features

* **index:** respond with a useful error message when one of the checks fails ([70fae6d](https://github.com/adobe/helix-pingdom-status/commit/70fae6d))

# [1.1.0](https://github.com/adobe/helix-pingdom-status/compare/v1.0.0...v1.1.0) (2019-06-16)


### Features

* **index:** allow passing a series of checks to the function ([4aadefe](https://github.com/adobe/helix-pingdom-status/commit/4aadefe))

# 1.0.0 (2019-06-16)


### Bug Fixes

* **index:** fix OW Method name and handling of empty parameters ([79f1c00](https://github.com/adobe/helix-pingdom-status/commit/79f1c00))


### Features

* **index:** support returning a pingdom status report on GET requests ([559d373](https://github.com/adobe/helix-pingdom-status/commit/559d373))

# [1.1.0](https://github.com/adobe/helix-service/compare/v1.0.1...v1.1.0) (2019-06-12)


### Features

* **action:** turn action into a web action ([f41f212](https://github.com/adobe/helix-service/commit/f41f212))

## [1.0.1](https://github.com/adobe/helix-service/compare/v1.0.0...v1.0.1) (2019-06-12)


### Bug Fixes

* **build:** add missing dependency ([aa163d7](https://github.com/adobe/helix-service/commit/aa163d7))

# 1.0.0 (2019-06-12)


### Bug Fixes

* **build:** add wsk property for release tracking ([9e36a10](https://github.com/adobe/helix-service/commit/9e36a10))
* **build:** increase version number to get a release ([f04ab95](https://github.com/adobe/helix-service/commit/f04ab95))
