_$define("pi_pt/rust/pi_store/db", function (require, exports, module){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var vm_1 = require("../../vm/vm");
var nobject_1 = require("../../vm/nobject");
var sinfo_1 = require("../../../pi/struct/sinfo");

var DB = function (_nobject_1$NObject) {
    _inherits(DB, _nobject_1$NObject);

    function DB() {
        _classCallCheck(this, DB);

        return _possibleConstructorReturn(this, (DB.__proto__ || Object.getPrototypeOf(DB)).apply(this, arguments));
    }

    return DB;
}(nobject_1.NObject);

DB._$info = new sinfo_1.StructInfo("pi_pt/rust/pi_store/db.DB", 625227478, new Map(), []);
//create FileDB, return OK(DB) or Err(String) if open db with IO Error
/**
 * @param name:Atom
 * @return Result<Self,String>
 */
DB.new = function (name) {
    name = name.self;
    var result = vm_1.call(1140526407, [name]);
    result = new DB(result);
    return result;
};
exports.DB = DB;
})