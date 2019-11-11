'use strict';

define("ember-quickstart/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });
  QUnit.test('routes/home/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home/about.js should pass ESLint\n\n');
  });
  QUnit.test('routes/home/mascot.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home/mascot.js should pass ESLint\n\n');
  });
});
define("ember-quickstart/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ember-quickstart/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-quickstart/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-quickstart/templates/home.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-quickstart/templates/home.hbs should pass TemplateLint.\n\nember-quickstart/templates/home.hbs\n  4:39  error  you must use double quotes in templates  quotes\n  5:38  error  you must use double quotes in templates  quotes\n  7:13  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('ember-quickstart/templates/home/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-quickstart/templates/home/about.hbs should pass TemplateLint.\n\nember-quickstart/templates/home/about.hbs\n  2:11  error  you must use double quotes in templates  quotes\n  7:11  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('ember-quickstart/templates/home/mascot.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-quickstart/templates/home/mascot.hbs should pass TemplateLint.\n\nember-quickstart/templates/home/mascot.hbs\n  3:2  error  Incorrect indentation for `<div>` beginning at L3:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  4:2  error  Incorrect indentation for `<div>` beginning at L4:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n');
  });
  QUnit.test('ember-quickstart/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-quickstart/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("ember-quickstart/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/home/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home/about-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/home/mascot-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home/mascot-test.js should pass ESLint\n\n');
  });
});
define("ember-quickstart/tests/test-helper", ["ember-quickstart/app", "ember-quickstart/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-quickstart/tests/unit/routes/home-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define("ember-quickstart/tests/unit/routes/home/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | home/about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home/about');
      assert.ok(route);
    });
  });
});
define("ember-quickstart/tests/unit/routes/home/mascot-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | home/mascot', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home/mascot');
      assert.ok(route);
    });
  });
});
define('ember-quickstart/config/environment', [], function() {
  var prefix = 'ember-quickstart';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-quickstart/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
