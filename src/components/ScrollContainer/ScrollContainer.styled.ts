import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 3000px;
  height: 3000px;
  background-color: pink;
  position: relative;
`;

export const Info = styled.p`
  margin: 0;
  padding: 15px;
  background-color: #4a90e7;
  border-radius: 10px;
  color: #ffffff;
  font-size: 32px; 
  line-height: 1.1;
  position: fixed;
  top: 0;
  right: 0;
`;
