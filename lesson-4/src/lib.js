"use strict";
exports.__esModule = true;
exports.renderToast = exports.renderBlock = void 0;
function renderBlock(elementId, html) {
    var element = document.getElementById(elementId);
    element.innerHTML = html;
}
exports.renderBlock = renderBlock;
function renderToast(message, action) {
    var messageText = '';
    if (message != null) {
        messageText = "\n      <div id=\"info-block\" class=\"info-block ".concat(message.type, "\">\n        <p>").concat(message.text, "</p>\n        <button id=\"toast-main-action\">").concat((action === null || action === void 0 ? void 0 : action.name) || 'Закрыть', "</button>\n      </div>\n    ");
    }
    renderBlock('toast-block', messageText);
    var button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(null, null);
        };
    }
}
exports.renderToast = renderToast;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGliLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLFNBQWdCLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSTtJQUN6QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2xELE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO0FBQzFCLENBQUM7QUFIRCxrQ0FHQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUN6QyxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUE7SUFFcEIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1FBQ25CLFdBQVcsR0FBRyw0REFDNkIsT0FBTyxDQUFDLElBQUksNkJBQzlDLE9BQU8sQ0FBQyxJQUFJLDREQUNnQixDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLEtBQUksU0FBUyxrQ0FFN0QsQ0FBQTtLQUNGO0lBRUQsV0FBVyxDQUNULGFBQWEsRUFDYixXQUFXLENBQ1osQ0FBQTtJQUVELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUMzRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDbEIsTUFBTSxDQUFDLE9BQU8sR0FBRztZQUNmLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDNUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQ2pCO1lBQ0QsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUE7S0FDRjtBQUNILENBQUM7QUExQkQsa0NBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJsb2NrKGVsZW1lbnRJZCwgaHRtbCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpXHJcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2FzdChtZXNzYWdlLCBhY3Rpb24pIHtcclxuICBsZXQgbWVzc2FnZVRleHQgPSAnJ1xyXG5cclxuICBpZiAobWVzc2FnZSAhPSBudWxsKSB7XHJcbiAgICBtZXNzYWdlVGV4dCA9IGBcclxuICAgICAgPGRpdiBpZD1cImluZm8tYmxvY2tcIiBjbGFzcz1cImluZm8tYmxvY2sgJHttZXNzYWdlLnR5cGV9XCI+XHJcbiAgICAgICAgPHA+JHttZXNzYWdlLnRleHR9PC9wPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2FzdC1tYWluLWFjdGlvblwiPiR7YWN0aW9uPy5uYW1lIHx8ICfQl9Cw0LrRgNGL0YLRjCd9PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQmxvY2soXHJcbiAgICAndG9hc3QtYmxvY2snLFxyXG4gICAgbWVzc2FnZVRleHRcclxuICApXHJcblxyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdC1tYWluLWFjdGlvbicpXHJcbiAgaWYgKGJ1dHRvbiAhPSBudWxsKSB7XHJcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGFjdGlvbiAhPSBudWxsICYmIGFjdGlvbi5oYW5kbGVyICE9IG51bGwpIHtcclxuICAgICAgICBhY3Rpb24uaGFuZGxlcigpXHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyVG9hc3QobnVsbCwgbnVsbClcclxuICAgIH1cclxuICB9XHJcbn0iXX0=