"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _connection = _interopRequireDefault(require("../config/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var models = _connection["default"].sequelize.models;

var createSurvey = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _ref2, userId, surveyName, userExist, surveyCreated, surveySection;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _ref2 = req.body ? req.body : '', userId = _ref2.userId, surveyName = _ref2.surveyName;

            if (!(!userId || !surveyName)) {
              _context.next = 4;
              break;
            }

            throw new Error('Please enter valid data');

          case 4:
            _context.next = 6;
            return models.users.findOne({
              where: {
                id: userId
              }
            });

          case 6:
            userExist = _context.sent;

            if (userExist) {
              _context.next = 9;
              break;
            }

            throw new Error('Please enter valid userId');

          case 9:
            _context.next = 11;
            return models.survey.create({
              userId: userId,
              surveyName: surveyName,
              uniqueNumber: Date.now()
            });

          case 11:
            surveyCreated = _context.sent;

            if (surveyCreated) {
              _context.next = 14;
              break;
            }

            throw new Error('Survey not created ');

          case 14:
            _context.next = 16;
            return models.surveySection.create({
              type: 'question',
              questionType: 'meeting_dates',
              title: 'email',
              surveyId: surveyCreated.id
            });

          case 16:
            surveySection = _context.sent;
            res.status(200).send({
              success: true,
              data: surveyCreated
            });
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(400).send({
              success: false,
              message: _context.t0.message
            });

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));

  return function createSurvey(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var createSurveySection = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var surveyId, _ref4, REGISTRATOION_PAGE_CONTENT, surveyExist, _createSurveySection, sectionUpdated;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            surveyId = req.query.surveyId;
            console.log('surveyId:::', surveyId);
            _ref4 = req.body ? req.body : '', REGISTRATOION_PAGE_CONTENT = _ref4.REGISTRATOION_PAGE_CONTENT;

            if (surveyId) {
              _context2.next = 6;
              break;
            }

            throw new Error('Please enter valid REGISTRATOION_PAGE_CONTENT');

          case 6:
            _context2.next = 8;
            return models.survey.findOne({
              where: {
                id: surveyId
              }
            });

          case 8:
            surveyExist = _context2.sent;

            if (surveyExist) {
              _context2.next = 11;
              break;
            }

            throw new Error('Please enter valid surveyId');

          case 11:
            if (REGISTRATOION_PAGE_CONTENT.id) {
              _context2.next = 19;
              break;
            }

            _context2.next = 14;
            return models.surveySection.create(_objectSpread(_objectSpread({}, REGISTRATOION_PAGE_CONTENT), {}, {
              surveyId: surveyId
            }));

          case 14:
            _createSurveySection = _context2.sent;

            if (_createSurveySection) {
              _context2.next = 17;
              break;
            }

            throw new Error('something went wrong');

          case 17:
            _context2.next = 24;
            break;

          case 19:
            _context2.next = 21;
            return models.surveySection.update({
              surveyId: surveyId,
              type: REGISTRATOION_PAGE_CONTENT.type,
              options: REGISTRATOION_PAGE_CONTENT.options ? JSON.stringify(REGISTRATOION_PAGE_CONTENT.options) : '',
              rank: REGISTRATOION_PAGE_CONTENT.rank,
              title: REGISTRATOION_PAGE_CONTENT.title,
              isRequired: REGISTRATOION_PAGE_CONTENT.isRequired
            }, {
              where: {
                id: REGISTRATOION_PAGE_CONTENT.id
              }
            });

          case 21:
            sectionUpdated = _context2.sent;

            if (sectionUpdated) {
              _context2.next = 24;
              break;
            }

            throw new Error('something went wrong');

          case 24:
            res.status(200).send({
              success: true,
              message: 'survey saved',
              data: _createSurveySection
            });
            _context2.next = 31;
            break;

          case 27:
            _context2.prev = 27;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(400).send({
              success: false,
              message: _context2.t0.message
            });

          case 31:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 27]]);
  }));

  return function createSurveySection(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var getSurvey = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _ref6, surveyId, _url, filter, surveyData;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _ref6 = req.query ? req.query : '', surveyId = _ref6.surveyId, _url = _ref6.url;

            if (!(!surveyId && !_url)) {
              _context3.next = 4;
              break;
            }

            throw new Error('Please enter surveyId or url');

          case 4:
            filter = {};

            if (_url) {
              filter = {
                Url: _url
              };
            } else if (surveyId) {
              filter = {
                id: surveyId
              };
            }

            _context3.next = 8;
            return models.survey.findOne({
              where: filter,
              include: [{
                model: models.surveySection,
                as: 'surveySection',
                attributes: {
                  include: [['options', 'optionsValue'], ['title', 'label']]
                }
              }],
              order: [['surveySection', 'rank', 'ASC']]
            });

          case 8:
            surveyData = _context3.sent;

            if (surveyData) {
              _context3.next = 11;
              break;
            }

            throw new Error('survey not found');

          case 11:
            surveyData = JSON.parse(JSON.stringify(surveyData));

            if (surveyData.surveySection.length > 0) {
              surveyData.surveySection = surveyData.surveySection.map(function (obj) {
                console.log('obj:::', obj);
                obj.optionsValue = obj.optionsValue ? JSON.parse(obj.optionsValue) : [];
                return obj;
              });
            }

            res.status(200).send({
              success: true,
              data: surveyData.surveySection,
              surveyName: surveyData ? surveyData.surveyName : '',
              surveyId: surveyData ? surveyData.id : ''
            });
            _context3.next = 20;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(400).send({
              success: false,
              message: _context3.t0.message
            });

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 16]]);
  }));

  return function getSurvey(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();

var deletSurveySection = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _ref8, id, deleteSurveySection;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _ref8 = req.query ? req.query : '', id = _ref8.id;

            if (id) {
              _context4.next = 4;
              break;
            }

            throw new Error('Please enter surveySectionId ');

          case 4:
            _context4.next = 6;
            return models.surveySection.destroy({
              where: {
                id: id
              }
            });

          case 6:
            deleteSurveySection = _context4.sent;

            if (deleteSurveySection) {
              _context4.next = 9;
              break;
            }

            throw new Error('Section not found');

          case 9:
            res.status(200).send({
              success: true,
              message: 'Section removed'
            });
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(400).send({
              success: false,
              message: _context4.t0.message
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function deletSurveySection(_x7, _x8) {
    return _ref7.apply(this, arguments);
  };
}();

var deletSurvey = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _ref10, surveyId, deleteSurveySection, deleteSurvey;

    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _ref10 = req.query ? req.query : '', surveyId = _ref10.surveyId;

            if (surveyId) {
              _context5.next = 4;
              break;
            }

            throw new Error('Please enter surveyId ');

          case 4:
            _context5.next = 6;
            return models.surveySection.destroy({
              where: {
                surveyId: surveyId
              }
            });

          case 6:
            deleteSurveySection = _context5.sent;
            _context5.next = 9;
            return models.survey.destroy({
              where: {
                id: surveyId
              }
            });

          case 9:
            deleteSurvey = _context5.sent;

            if (deleteSurvey) {
              _context5.next = 12;
              break;
            }

            throw new Error('Survey not found');

          case 12:
            res.status(200).send({
              success: true,
              message: 'Survey deleted'
            });
            _context5.next = 19;
            break;

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(400).send({
              success: false,
              message: _context5.t0.message
            });

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 15]]);
  }));

  return function deletSurvey(_x9, _x10) {
    return _ref9.apply(this, arguments);
  };
}();

var saveSurveyResult = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _ref12, surveyId, user_email, answers, surveyExist, answerSubmited, saveAnswer;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _ref12 = req.body ? req.body : '', surveyId = _ref12.surveyId, user_email = _ref12.user_email, answers = _ref12.answers;

            if (url) {
              _context6.next = 4;
              break;
            }

            throw new Error('Please enter surveyId ');

          case 4:
            if (email) {
              _context6.next = 6;
              break;
            }

            throw new Error('Please enter email ');

          case 6:
            if (data) {
              _context6.next = 8;
              break;
            }

            throw new Error('Please enter valid answer ');

          case 8:
            _context6.next = 10;
            return models.survey.findOne({
              where: {
                Url: url
              }
            });

          case 10:
            surveyExist = _context6.sent;

            if (surveyExist) {
              _context6.next = 13;
              break;
            }

            throw new Error('Survey not found');

          case 13:
            _context6.next = 15;
            return models.surveyResult.findAll({
              where: {
                email: email,
                surveyId: surveyExist.id
              }
            });

          case 15:
            answerSubmited = _context6.sent;

            if (!(answerSubmited.length > 0)) {
              _context6.next = 18;
              break;
            }

            throw new Error('Survey already submited');

          case 18:
            answers = answers.map(function (obj) {
              return {
                surveyId: surveyExist.id,
                surveySectionId: obj.id ? obj.id : null,
                email: email,
                type: obj.type ? obj.type : '',
                options: obj.options ? JSON.stringify(obj.options) : '',
                answer: obj.answers ? JSON.stringify(obj.answers) : '',
                rank: obj.rank ? obj.rank : null,
                title: obj.title ? obj.title : ''
              };
            });
            _context6.next = 21;
            return models.surveyResult.bulkCreate(data);

          case 21:
            saveAnswer = _context6.sent;

            if (saveAnswer) {
              _context6.next = 24;
              break;
            }

            throw new Error('Suvrey not saved');

          case 24:
            res.status(200).send({
              success: true,
              message: 'Survey submited'
            });
            _context6.next = 31;
            break;

          case 27:
            _context6.prev = 27;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.status(400).send({
              success: false,
              message: _context6.t0.message
            });

          case 31:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 27]]);
  }));

  return function saveSurveyResult(_x11, _x12) {
    return _ref11.apply(this, arguments);
  };
}();

var getSurveyResult = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _ref14, surveyId, _data, emailMatch, newData;

    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _ref14 = req.query ? req.query : '', surveyId = _ref14.surveyId;

            if (surveyId) {
              _context7.next = 4;
              break;
            }

            throw new Error('Please enter surveyId ');

          case 4:
            _context7.next = 6;
            return models.surveyResult.findAll({
              where: {
                surveyId: surveyId
              }
            });

          case 6:
            _data = _context7.sent;
            emailMatch = [];
            newData = [];

            _data.map(function (obj) {
              obj.options = JSON.parse(obj.options);

              if (emailMatch.includes(obj.email)) {
                newData.map(function (obj1) {
                  if (obj1.email == obj.email) {
                    obj1.data.push(obj);
                  }
                });
              } else {
                newData.push({
                  email: obj.email,
                  data: [obj]
                });
                emailMatch.push(obj.email);
              }
            });

            res.status(200).send({
              success: true,
              newData: newData
            });
            _context7.next = 17;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.status(400).send({
              success: false,
              message: _context7.t0.message
            });

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 13]]);
  }));

  return function getSurveyResult(_x13, _x14) {
    return _ref13.apply(this, arguments);
  };
}();

var _default = {
  createSurvey: createSurvey,
  getSurvey: getSurvey,
  createSurveySection: createSurveySection,
  deletSurveySection: deletSurveySection,
  deletSurvey: deletSurvey,
  saveSurveyResult: saveSurveyResult,
  getSurveyResult: getSurveyResult
};
exports["default"] = _default;