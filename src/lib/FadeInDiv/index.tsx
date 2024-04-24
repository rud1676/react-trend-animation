import React, { useEffect, useRef } from "react";
import styled from "styled-components";

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

const Layout = styled.div<{ speed: number; ypos: number }>`
  opacity: 0;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(${(props) => props.ypos}px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  &.fadeInUpAnimation {
    animation: fadeInUp ${(props) => props.speed}s ease-out forwards;
  }
`;

const FadeInDiv = ({
  children,
  threshold = 0.2,
  speed = 1,
  ypos = 50,
}: FadeInDivProp) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const divEl = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (divEl) divEl.classList.add("fadeInUpAnimation");
        }
      },
      {
        threshold: threshold <= 1 ? threshold : 1, // 10% 이상 보이면 콜백을 실행합니다.
      },
    );
    if (divEl) {
      observer.observe(divEl);
    }
    return () => {
      if (divEl) {
        observer.unobserve(divEl);
      }
    };
  }, []);

  return (
    <Layout ref={ref} speed={speed} ypos={ypos}>
      {children}
    </Layout>
  );
};

export default FadeInDiv;
