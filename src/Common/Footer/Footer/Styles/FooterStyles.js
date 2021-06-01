import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 0px;
  background: black;
  border: 0px solid wheat;
  font-family: 'Roboto', sans-serif;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 0px solid wheat;
  margin: 0 auto;
  width: 85%;

  @media screen and (min-width: 600px) and (max-width: 900px) {
    width: 100%;
  }
  @media only screen and (max-device-width: 480px) {
    width: 100%;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 0px solid wheat;
  flex: 17%;
`;
export const Row = styled.div`
  display: flex;
  border: 0px solid wheat;
  gap: 5px;
  flex-wrap: no-wrap;

  ${Column}:nth-child(5) {
    flex: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 0px;
`;
export const Title = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
export const Social = styled.p`
  font-size: 14px;
  color: #fff;
  border: 0px solid wheat;
  display: flex;
  padding-left: 180px;
`;
export const Icons = styled.div`
  color: #fff;
  font-weight: bold;
  flex: 20%;
  border: 0px solid wheat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 150px;
`;

export const Image = styled.div`
  border: 0px solid wheat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 60%;
  padding-left: 148px;
`;
export const Trademark = styled.div`
  font-size: 14px;
  color: #fff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 20%;
  padding-left: 150px;
`;
