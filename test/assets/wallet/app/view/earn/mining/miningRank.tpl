(function (_cfg, it, it1) {
	var _$temp = void 0,
	    node = void 0;_$temp = node;{
		var _$parent = _$temp;var _node = { "attrs": {}, "tagName": "div", "sid": 0 };_node.children = [];_node.attrSize = 3;_node.attrHash = 1828517035;_node.attrs["w-class"] = "historylist";_node.attrs["id"] = "historylist";_node.attrs["on-scroll"] = "getMoreList";_$temp = _node;{
			var _$parent2 = _$temp;var _node2 = { "attrs": {}, "tagName": "div", "sid": 1 };_node2.children = [];_node2.attrSize = 1;_node2.attrHash = 840313844;_node2.attrs["w-class"] = "history";_$temp = _node2;{
				var _$parent3 = _$temp;var _node3 = { "attrs": {}, "tagName": "div", "sid": 2 };_node3.children = [];_node3.attrSize = 1;_node3.attrHash = 1045235690;_node3.attrs["w-class"] = "item";_$temp = _node3;{
					var _$parent4 = _$temp;var _node4 = { "attrs": {}, "tagName": "span", "sid": 3 };_node4.children = [];_node4.attrSize = 1;_node4.attrHash = 3802403657;_node4.attrs["w-class"] = "itemRank";_$temp = _node4;{
						var _$parent5 = _$temp;_addText(it.myRank, _$parent5);
					}_chFunc(_node4);_$parent4.children.push(_node4);
				}_$temp = _node3;{
					var _$parent6 = _$temp;var _node5 = { "attrs": {}, "tagName": "img", "sid": 4 };_node5.children = [];_node5.childHash = 0;_node5.attrSize = 2;_node5.attrHash = 3675393253;_node5.attrs["src"] = "../../../res/image/addMine_create.png";_node5.attrs["w-class"] = "itemImg";_$parent6.children.push(_node5);
				}_$temp = _node3;{
					var _$parent7 = _$temp;var _node6 = { "attrs": {}, "tagName": "div", "sid": 5 };_node6.children = [];_node6.attrSize = 1;_node6.attrHash = 2863761446;_node6.attrs["style"] = "display: inline-block;flex: 1 0 0;";_$temp = _node6;{
						var _$parent8 = _$temp;var _node7 = { "attrs": {}, "tagName": "div", "sid": 6 };_node7.children = [];_node7.attrSize = 1;_node7.attrHash = 136397174;_node7.attrs["w-class"] = "itemName";_$temp = _node7;{
							var _$parent9 = _$temp;_addText(it1.cfgData.me, _$parent9);
						}_chFunc(_node7);_$parent8.children.push(_node7);
					}if (it.fg == 1) {
						_$temp = _node6;{
							var _$parent10 = _$temp;var _node8 = { "attrs": {}, "tagName": "div", "sid": 7 };_node8.children = [];_node8.attrSize = 1;_node8.attrHash = 936179753;_node8.attrs["w-class"] = "itemDescribe";_$temp = _node8;{
								var _$parent11 = _$temp;_addText(it1.cfgData.leftTitle + it1.totalNum + " ", _$parent11);
							}_$temp = _node8;{
								var _$parent12 = _$temp;var _node9 = _installText("KT", 3071125820);;
								_$parent12.children.push(_node9);
							}_chFunc(_node8);_$parent10.children.push(_node8);
						}
					} else {
						_$temp = _node6;{
							var _$parent13 = _$temp;var _node10 = { "attrs": {}, "tagName": "div", "sid": 8 };_node10.children = [];_node10.attrSize = 1;_node10.attrHash = 936179753;_node10.attrs["w-class"] = "itemDescribe";_$temp = _node10;{
								var _$parent14 = _$temp;_addText(it1.cfgData.rightTitle + it1.totalNum + " ", _$parent14);
							}_$temp = _node10;{
								var _$parent15 = _$temp;var _node11 = _installText("KT", 3071125820);;
								_$parent15.children.push(_node11);
							}_chFunc(_node10);_$parent13.children.push(_node10);
						}
					}_chFunc(_node6);_$parent7.children.push(_node6);
				}_chFunc(_node3);_$parent3.children.push(_node3);
			}{
				var _$i = 0;
				for (var _iterator = it1.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
					var _ref;

					if (_isArray) {
						if (_i >= _iterator.length) break;
						_ref = _iterator[_i++];
					} else {
						_i = _iterator.next();
						if (_i.done) break;
						_ref = _i.value;
					}

					var val = _ref;
					var ind = _$i++;var desc = it.fg == 1 ? it1.cfgData.leftTitle : it1.cfgData.rightTitle;var rank = val.index;if (rank < 10) {
						rank = "00" + rank;
					} else if (rank < 100) {
						rank = "0" + rank;
					}_$temp = _node2;{
						var _$parent16 = _$temp;var _node12 = { "attrs": {}, "tagName": "app-components-imgRankItem-imgRankItem", "sid": 9 };_node12.hasChild = false;_node12.child = null;_node12.attrHash = 0;_$temp = _node12;{
							var _$parent17 = _$temp;var _node13 = {}; //jpair pre

							_node13["name"] = val.name;
							//jpair suf
							//jpair pre

							_node13["describe"] = desc + val.num + " KT";
							//jpair suf
							//jpair pre

							_node13["img"] = val.avatar ? val.avatar : "../../res/image/addMine_create.png";
							//jpair suf
							//jpair pre

							_node13["rank"] = rank;
							//jpair suf
							_addJson(_node13, _$parent17);
						}_chFunc(_node12);_$parent16.children.push(_node12);
					}
				}
			}if (it1.data.length > 0 && !it1.more) {
				_$temp = _node2;{
					var _$parent18 = _$temp;var _node14 = { "attrs": {}, "tagName": "div", "sid": 10 };_node14.children = [];_node14.attrSize = 1;_node14.attrHash = 3992589513;_node14.attrs["w-class"] = "endMess";_$temp = _node14;{
						var _$parent19 = _$temp;_addText(it1.cfgData.tips[0], _$parent19);
					}_$temp = _node14;{
						var _$parent20 = _$temp;var _node15 = _installText("^_^", 2624223669);;
						_$parent20.children.push(_node15);
					}_chFunc(_node14);_$parent18.children.push(_node14);
				}
			}if (it1.data.length == 0) {
				_$temp = _node2;{
					var _$parent21 = _$temp;var _node16 = { "attrs": {}, "tagName": "div", "sid": 11 };_node16.children = [];_node16.attrSize = 1;_node16.attrHash = 3809030542;_node16.attrs["w-class"] = "historyNone";_$temp = _node16;{
						var _$parent22 = _$temp;var _node17 = { "attrs": {}, "tagName": "img", "sid": 12 };_node17.children = [];_node17.childHash = 0;_node17.attrSize = 2;_node17.attrHash = 1093656218;_node17.attrs["src"] = "../../../res/image/dividend_history_none.png";_node17.attrs["style"] = "width: 200px;height: 200px;";_$parent22.children.push(_node17);
					}_$temp = _node16;{
						var _$parent23 = _$temp;var _node18 = { "attrs": {}, "tagName": "div", "sid": 13 };_node18.children = [];_node18.attrHash = 0;_$temp = _node18;{
							var _$parent24 = _$temp;_addText(it1.cfgData.tips[1], _$parent24);
						}_chFunc(_node18);_$parent23.children.push(_node18);
					}_chFunc(_node16);_$parent21.children.push(_node16);
				}
			}_chFunc(_node2);_$parent2.children.push(_node2);
		}_chFunc(_node);return _node;
	}
});