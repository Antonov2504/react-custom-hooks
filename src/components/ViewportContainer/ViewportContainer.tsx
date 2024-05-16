import { useViewportSize } from '../../hooks/useViewportSize';
import * as Styled from './ViewportContainer.styled';

export const ViewportContainer = () => {
  const { height, width } = useViewportSize();

  return (
    <Styled.Container>
      <Styled.Info>
        Width: {width}, Height: {height}
      </Styled.Info>
    </Styled.Container>
  );
};
