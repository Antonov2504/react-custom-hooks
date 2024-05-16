import { useWindowScroll } from '../../hooks/useWindowScroll';
import * as Styled from './ScrollContainer.styled';

export const ScrollContainer = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Styled.Container>
      <Styled.Info>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Styled.Info>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
      <button onClick={() => scrollTo({ x: 0 })}>Scroll to left</button>
    </Styled.Container>
  );
};
