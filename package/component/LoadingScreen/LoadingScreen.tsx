import styled from 'styled-components';

const StyledLoadingScreen = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction:column;
  gap:20px;
`;
export function LoadingScreen() {
  return (
    <StyledLoadingScreen>
        로딩중
      <img width={40} src="/package/assets/images/common/loading.gif" alt="loading" />
    </StyledLoadingScreen>
  );
}
