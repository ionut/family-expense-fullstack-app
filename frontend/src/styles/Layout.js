import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 2rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 1.5rem 1rem;

  width: 100%;
  @media (min-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;
