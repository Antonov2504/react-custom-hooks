import { useViewportSize } from '../../hooks/useViewportSize';

export const ViewportContainer = () => {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
};
