import styled from 'styled-components';

export const Container = styled.div<{ color: string; isBoolean: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-bottom: ${({ isBoolean }) => isBoolean ? '70px' : 0};
  background-color: ${({ color }) => color};
  box-sizing: border-box;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: center;
  gap: 20px;
  width: 320px;
`;

export const Button = styled.button`
  width: 100%;
  width: 320px;
  padding: 15px;
  border-radius: 20px;
  border: 1px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  font-weight: bold;
  font-size: 32px;
  line-height: 1.1;
  text-transform: uppercase;
  box-shadow: 1px 8px 15px rgba(255, 255, 255, 0.1);
  cursor: pointer;
  pointer-events: initial;

  &:disabled {
    cursor: default;
    pointer-events: none;
  }
`;

export const ButtonSet = styled(Button)`
  width: 150px;
  padding: 10px 15px;
  border: 1px solid #000000;
  background-color: #000000;
  box-shadow: 1px 8px 15px rgba(0, 0, 0, 0.1);
  color: #cccccc;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.1;

  &:disabled {
    border: 1px solid #eee90b;
    background-color: #eee90b;
    box-shadow: 1px 8px 15px rgba(255, 255, 0, 0.8);
    color: #111111;
  }
`;

export const ButtonsColors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const ButtonColor = styled(Button) <{ color: string }>`
  width: 50px;
  height: 50px;
  padding: 10px 15px;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.1;
  transition: transform 0.3s ease-in-out;

  &:disabled {
    transform: translateY(-5px);
    border: 1px solid #cccccc;
    background-color: transparent;
    color: #cccccc;
  }
`;
