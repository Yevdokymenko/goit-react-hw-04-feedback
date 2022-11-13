import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 5px;
  width: 500px;
  margin: 6px auto;
`;
