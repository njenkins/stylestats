'use strict';

var StyleStats = require('../lib/stylestats.js');
var stats = new StyleStats('test/fixture/test.css');
var result;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.stylestats = {
    setUp: function(done) {
        result = stats.parse();
        done();
    },
    log: function(test) {
        //console.log('\n' + JSON.stringify(result, null, 2));
        test.done();
    },
    size: function(test) {
        test.expect(1);
        test.equal(result.size, 498, 'should display file size.');
        test.done();
    },
    gzipedSize: function(test) {
        test.expect(1);
        test.done();
    },
    rules: function(test) {
        test.expect(1);
        test.equal(result.rules, 8, 'should parse stylesheet.');
        test.done();
    },
    selectors: function(test) {
        test.expect(1);
        test.done();
    },
    simplicity: function(test) {
        test.expect(1);
        test.done();
    },
    lowestCohesion: function(test) {
        test.expect(1);
        test.done();
    },
    lowestCohesionSelector: function(test) {
        test.expect(1);
        test.done();
    },
    totalUniqueFontSizes: function(test) {
        test.expect(1);
        test.done();
    },
    uniqueFontSize: function(test) {
        test.expect(1);
        test.done();
    },
    totalUniqueColors: function(test) {
        test.expect(1);
        test.done();
    },
    uniqueColor: function(test) {
        test.expect(1);
        test.done();
    },
    idSelectors: function(test) {
        test.expect(1);
        test.done();
    },
    importantKeywords: function(test) {
        test.expect(1);
        test.done();
    },
    mediaQueries: function(test) {
        test.expect(1);
        test.done();
    },
    propertiesCount: function(test) {
        test.expect(1);
        test.done();
    }
};