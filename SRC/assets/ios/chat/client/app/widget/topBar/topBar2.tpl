(function (_cfg, it, it1) {
  var _$temp = void 0,
      node = void 0;var opca = it.scrollHeight / 200 || 0;_$temp = node;{
    var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 2;_node.attrHash = 2883479551;{
      var attrvalue = "";attrvalue += opca > 0 ? 'background:rgba(255, 255, 255, ' + opca + ');border-bottom: 1px solid #cccccc;' : 'background:transparent;';attrvalue += "";_node.attrs["style"] = attrvalue;
    }_node.attrHash = _hash.nextHash(_node.attrHash, _calTextHash(_node.attrs["style"]));_node.attrs["w-class"] = "outter";_$temp = _node;{
      var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "app-components1-blankDiv-topDiv", "sid": 1 };_node2.hasChild = false;_node2.child = null;_node2.childHash = 2946814719;_node2.attrHash = 0;_$parent2.children.push(_node2);
    }_$temp = _node;{
      var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 3880895855;_node3.attrs["w-class"] = "ga-top-banner";_$temp = _node3;{
        var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "div", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 1631622133;_node4.attrs["w-class"] = "left-container";_$temp = _node4;{
          var _$parent5 = _$temp;var _node5 = { "attrs": {}, "tagName": "img", "sid": 4 };_node5.children = [];_node5.attrSize = 3;_node5.attrHash = 1008907883;_node5.attrs["on-tap"] = "backPrePage";{
            var _attrvalue = "";_attrvalue += "../../res/images/";_attrvalue += opca > 0 ? 'left_arrow_blue.png' : 'left_arrow_white.png';_attrvalue += "";_node5.attrs["src"] = _attrvalue;
          }_node5.attrHash = _hash.nextHash(_node5.attrHash, _calTextHash(_node5.attrs["src"]));_node5.attrs["w-class"] = "ga-back";_chFunc(_node5);_$parent5.children.push(_node5);
        }_$temp = _node4;{
          var _$parent6 = _$temp;var _node6 = { "attrs": {}, "tagName": "span", "sid": 5 };_node6.children = [];_node6.attrSize = 2;_node6.attrHash = 2855747751;_node6.attrs["on-tap"] = "backPrePage";{
            var _attrvalue2 = "";_attrvalue2 += "color: ";_attrvalue2 += opca > 0 ? '#222' : '#fff';_attrvalue2 += "";_node6.attrs["style"] = _attrvalue2;
          }_node6.attrHash = _hash.nextHash(_node6.attrHash, _calTextHash(_node6.attrs["style"]));_$temp = _node6;{
            var _$parent7 = _$temp;_addText(it.text, _$parent7);
          }_chFunc(_node6);_$parent6.children.push(_node6);
        }_chFunc(_node4);_$parent4.children.push(_node4);
      }if (it.nextImg) {
        _$temp = _node3;{
          var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "img", "sid": 6 };_node7.children = [];_node7.attrSize = 3;_node7.attrHash = 4030096878;_node7.attrs["on-tap"] = "goNext";{
            var _attrvalue3 = "";_attrvalue3 += "../../res/images/";_attrvalue3 += it.nextImg;_attrvalue3 += "";_node7.attrs["src"] = _attrvalue3;
          }_node7.attrHash = _hash.nextHash(_node7.attrHash, _calTextHash(_node7.attrs["src"]));_node7.attrs["w-class"] = "ga-next";_chFunc(_node7);_$parent8.children.push(_node7);
        }
      }if (it.refreshImg) {
        _$temp = _node3;{
          var _$parent9 = _$temp;var _node8 = { "attrs": {}, "tagName": "img", "sid": 7 };_node8.children = [];_node8.attrSize = 4;_node8.attrHash = 4015742466;_node8.attrs["on-tap"] = "refreshPage";{
            var _attrvalue4 = "";_attrvalue4 += "../../res/images/";_attrvalue4 += opca > 0 ? 'refresh_blue.png' : 'refresh_white.png';_attrvalue4 += "";_node8.attrs["src"] = _attrvalue4;
          }_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["src"]));_node8.attrs["w-class"] = "refreshBtn";{
            var _attrvalue5 = "";_attrvalue5 += it1.refresh ? 'refreshing' : '';_attrvalue5 += "";_node8.attrs["class"] = _attrvalue5;
          }_node8.attrHash = _hash.nextHash(_node8.attrHash, _calTextHash(_node8.attrs["class"]));_chFunc(_node8);_$parent9.children.push(_node8);
        }
      }_chFunc(_node3);_$parent3.children.push(_node3);
    }_chFunc(_node);return _node;
  }
});