"use strict";
exports.__esModule = true;
exports.renderSearchResultsBlock = exports.renderEmptyOrErrorSearchBlock = exports.renderSearchStubBlock = void 0;
var lib_js_1 = require("./lib.js");
function renderSearchStubBlock() {
    (0, lib_js_1.renderBlock)("search-results-block", "\n    <div class=\"before-results-block\">\n      <img src=\"img/start-search.png\" />\n      <p>\u0427\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u043F\u043E\u0438\u0441\u043A, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u0438&nbsp;\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \"\u041D\u0430\u0439\u0442\u0438\"</p>\n    </div>\n    ");
}
exports.renderSearchStubBlock = renderSearchStubBlock;
function renderEmptyOrErrorSearchBlock(reasonMessage) {
    (0, lib_js_1.renderBlock)("search-results-block", "\n    <div class=\"no-results-block\">\n      <img src=\"img/no-results.png\" />\n      <p>".concat(reasonMessage, "</p>\n    </div>\n    "));
}
exports.renderEmptyOrErrorSearchBlock = renderEmptyOrErrorSearchBlock;
function renderSearchResultsBlock(places) {
    var itemsListPlaces = "";
    if (Array.isArray(places) && places.length > 0) {
        places.forEach(function (places) {
            itemsListPlaces += " <li class=\"result\">\n      <div class=\"result-container\">\n        <div class=\"result-img-container\">\n          <div class=\"favorites active\"></div>\n          <img class=\"result-img\" src=".concat(places.image, " alt=").concat(places.name, ">\n        </div>\t\n        <div class=\"result-info\">\n          <div class=\"result-info--header\">\n            \n            <p>").concat(places.name, "</p>\n            <p class=\"price\">").concat(places.price, "&#8381;</p>\n          </div>\n          <div class=\"result-info--map\"><i class=\"map-icon\"></i> ").concat(places.remoteness, "\u043A\u043C \u043E\u0442 \u0432\u0430\u0441</div>\n          <div class=\"result-info--descr\">").concat(places.description, "</div>\n          <div class=\"result-info--footer\">\n            <div>\n              <button ").concat(places.id, ">\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>");
        });
    }
    (0, lib_js_1.renderBlock)("search-results-block", "\n    <div class=\"search-results-header\">\n        <p>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u0430</p>\n        <div class=\"search-results-filter\">\n            <span><i class=\"icon icon-filter\"></i> \u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C:</span>\n            <select>\n                <option selected=\"\">\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0435\u0448\u0451\u0432\u044B\u0435</option>\n                <option selected=\"\">\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0440\u043E\u0433\u0438\u0435</option>\n                <option>\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0431\u043B\u0438\u0436\u0435</option>\n            </select>\n        </div>\n    </div>\n    <ul class=\"results-list results-list--js\">\n  \n    </ul>\n    ");
    var nodeListPlace = document.querySelector(".results-list--js");
    nodeListPlace.insertAdjacentHTML("afterbegin", itemsListPlaces);
}
exports.renderSearchResultsBlock = renderSearchResultsBlock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtcmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBdUM7QUFXdkMsU0FBZ0IscUJBQXFCO0lBQ25DLElBQUEsb0JBQVcsRUFDVCxzQkFBc0IsRUFDdEIsNFlBS0MsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQVZELHNEQVVDO0FBRUQsU0FBZ0IsNkJBQTZCLENBQUMsYUFBYTtJQUN6RCxJQUFBLG9CQUFXLEVBQ1Qsc0JBQXNCLEVBQ3RCLHFHQUdPLGFBQWEsMkJBRW5CLENBQ0YsQ0FBQztBQUNKLENBQUM7QUFWRCxzRUFVQztBQUVELFNBQWdCLHdCQUF3QixDQUFDLE1BQWtDO0lBQ3pFLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUV6QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDcEIsZUFBZSxJQUFJLGtOQUllLE1BQU0sQ0FBQyxLQUFLLGtCQUFRLE1BQU0sQ0FBQyxJQUFJLG1KQUt0RCxNQUFNLENBQUMsSUFBSSxrREFDRyxNQUFNLENBQUMsS0FBSyxpSEFFd0IsTUFBTSxDQUFDLFVBQVUsNkdBQ3hDLE1BQU0sQ0FBQyxXQUFXLDZHQUd0QyxNQUFNLENBQUMsRUFBRSw0S0FLdkIsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxJQUFBLG9CQUFXLEVBQ1Qsc0JBQXNCLEVBQ3RCLHUxQkFlQyxDQUNGLENBQUM7SUFFRixJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbEUsYUFBYSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBcERELDREQW9EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSBcIi4vbGliLmpzXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoRm9ybVJlc3VsdHMge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZ1tdO1xyXG4gIHJlbW90ZW5lc3M6IG51bWJlcltdO1xyXG4gIGJvb2tlZERhdGVzOiBEYXRlW107XHJcbiAgcHJpY2U6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaFN0dWJCbG9jaygpIHtcclxuICByZW5kZXJCbG9jayhcclxuICAgIFwic2VhcmNoLXJlc3VsdHMtYmxvY2tcIixcclxuICAgIGBcclxuICAgIDxkaXYgY2xhc3M9XCJiZWZvcmUtcmVzdWx0cy1ibG9ja1wiPlxyXG4gICAgICA8aW1nIHNyYz1cImltZy9zdGFydC1zZWFyY2gucG5nXCIgLz5cclxuICAgICAgPHA+0KfRgtC+0LHRiyDQvdCw0YfQsNGC0Ywg0L/QvtC40YHQuiwg0LfQsNC/0L7Qu9C90LjRgtC1INGE0L7RgNC80YMg0LgmbmJzcDvQvdCw0LbQvNC40YLQtSBcItCd0LDQudGC0LhcIjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFbXB0eU9yRXJyb3JTZWFyY2hCbG9jayhyZWFzb25NZXNzYWdlKSB7XHJcbiAgcmVuZGVyQmxvY2soXHJcbiAgICBcInNlYXJjaC1yZXN1bHRzLWJsb2NrXCIsXHJcbiAgICBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0cy1ibG9ja1wiPlxyXG4gICAgICA8aW1nIHNyYz1cImltZy9uby1yZXN1bHRzLnBuZ1wiIC8+XHJcbiAgICAgIDxwPiR7cmVhc29uTWVzc2FnZX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0c0Jsb2NrKHBsYWNlczogU2VhcmNoRm9ybVJlc3VsdHNbXSB8IG51bGwpIHtcclxuICBsZXQgaXRlbXNMaXN0UGxhY2VzID0gXCJcIjtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocGxhY2VzKSAmJiBwbGFjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgcGxhY2VzLmZvckVhY2goKHBsYWNlcykgPT4ge1xyXG4gICAgICBpdGVtc0xpc3RQbGFjZXMgKz0gYCA8bGkgY2xhc3M9XCJyZXN1bHRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYXZvcml0ZXMgYWN0aXZlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwicmVzdWx0LWltZ1wiIHNyYz0ke3BsYWNlcy5pbWFnZX0gYWx0PSR7cGxhY2VzLm5hbWV9PlxyXG4gICAgICAgIDwvZGl2Plx0XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLWhlYWRlclwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHA+JHtwbGFjZXMubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4ke3BsYWNlcy5wcmljZX0mIzgzODE7PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm8tLW1hcFwiPjxpIGNsYXNzPVwibWFwLWljb25cIj48L2k+ICR7cGxhY2VzLnJlbW90ZW5lc3N90LrQvCDQvtGCINCy0LDRgTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1kZXNjclwiPiR7cGxhY2VzLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uICR7cGxhY2VzLmlkfT7Ql9Cw0LHRgNC+0L3QuNGA0L7QstCw0YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+YDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQmxvY2soXHJcbiAgICBcInNlYXJjaC1yZXN1bHRzLWJsb2NrXCIsXHJcbiAgICBgXHJcbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdHMtaGVhZGVyXCI+XHJcbiAgICAgICAgPHA+0KDQtdC30YPQu9GM0YLQsNGC0Ysg0L/QvtC40YHQutCwPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1maWx0ZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3M9XCJpY29uIGljb24tZmlsdGVyXCI+PC9pPiDQodC+0YDRgtC40YDQvtCy0LDRgtGMOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7QodC90LDRh9Cw0LvQsCDQtNC10YjRkdCy0YvQtTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPtCh0L3QsNGH0LDQu9CwINC00L7RgNC+0LPQuNC1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPtCh0L3QsNGH0LDQu9CwINCx0LvQuNC20LU8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDx1bCBjbGFzcz1cInJlc3VsdHMtbGlzdCByZXN1bHRzLWxpc3QtLWpzXCI+XHJcbiAgXHJcbiAgICA8L3VsPlxyXG4gICAgYFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG5vZGVMaXN0UGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdHMtbGlzdC0tanNcIik7XHJcbiAgbm9kZUxpc3RQbGFjZS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGl0ZW1zTGlzdFBsYWNlcyk7XHJcbn1cclxuIl19