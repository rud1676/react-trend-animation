var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import styled from "styled-components";
var Layout = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  opacity: 0;\n  @keyframes fadeInUp {\n    from {\n      opacity: 0;\n      transform: translateY(", "px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  &.fadeInUpAnimation {\n    animation: fadeInUp ", "s ease-out forwards;\n  }\n"], ["\n  opacity: 0;\n  @keyframes fadeInUp {\n    from {\n      opacity: 0;\n      transform: translateY(", "px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  &.fadeInUpAnimation {\n    animation: fadeInUp ", "s ease-out forwards;\n  }\n"])), function (props) { return props.ypos; }, function (props) { return props.speed; });
var FadeInDiv = function (_a) {
    var children = _a.children, _b = _a.threshold, threshold = _b === void 0 ? 0.2 : _b, _c = _a.speed, speed = _c === void 0 ? 1 : _c, _d = _a.ypos, ypos = _d === void 0 ? 50 : _d;
    var ref = useRef(null);
    useEffect(function () {
        var divEl = ref.current;
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                if (divEl)
                    divEl.classList.add("fadeInUpAnimation");
            }
        }, {
            threshold: threshold <= 1 ? threshold : 1, // 10% 이상 보이면 콜백을 실행합니다.
        });
        if (divEl) {
            observer.observe(divEl);
        }
        return function () {
            if (divEl) {
                observer.unobserve(divEl);
            }
        };
    }, []);
    return (_jsx(Layout, __assign({ ref: ref, speed: speed, ypos: ypos }, { children: children })));
};
export default FadeInDiv;
var templateObject_1;
