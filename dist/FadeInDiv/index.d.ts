import React from "react";
interface FadeInDivProp {
    /**
     * 하위 컴포넌트가 무조건 있어야합니다.
     */
    children: React.ReactNode;
    /**
     * 해당 지점이 몇% 이상 보여야지 opacity가 1로 변할지 지점입니다. 기본값은 0.2 지점입니다. 반드시 0~1사이 값이여야합니다. 넘어가면 1로 조정됩니다.
     */
    threshold?: number;
    /**
     * opacity와 ypos가 원래 컴포넌트로 돌아오는 속도입니다. 기본값은 1입니다.
     */
    speed?: number;
    /**
     * y몇지점에서 원래 포지션으로 돌아올지 정하는 값입니다. 기본값은 50입니다.
     */
    ypos?: number;
}
declare const FadeInDiv: ({ children, threshold, speed, ypos, }: FadeInDivProp) => import("react/jsx-runtime").JSX.Element;
export default FadeInDiv;
