import styled from "styled-components";

export const WorksIcon = styled.img`
  width: 80px;
  height: 80px;
  animation: skew-x-shakeng 0.5s linear 1s normal none;
  @media (max-width: 650px) {
    width: 60px;
    height: 60px;
  }
`;
export const EducationIcon = styled.img`
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  transition: 0.3s ease;
  /* background: rgb(8, 8, 39); */
`;

export const WorksDescription = styled.p`
  font-weight: ${(props) => (props.var === "work-title" ? "bold" : "normal")};
  font-style: ${(props) =>
    props.var === "work-description" || props.var === "italic"
      ? "italic"
      : "normal"};
  font-size: ${(props) =>
    props.var === "work-title"
      ? "24px"
      : props.var === "work-description"
      ? "16px"
      : "18px"};
  border-bottom: ${(props) =>
    props.var === "work-title" ? "2px solid rgb(230, 18, 18)" : "none"};
  width: ${(props) => (props.var === "work-description" ? "100%" : "auto")};
  animation: text-show 0.2s linear 0s normal none;
  @media (max-width: 650px) {
    text-align: ${(props) =>
      props.var === "work-description" ? "center" : "left"};
  }
  color: ${(props) => (props.var === "date" ? "grey" : "")};
  font-size: ${(props) => (props.var === "date" ? "16px" : "")};
  word-spacing: ${(props) => (props.var === "work-description" ? "3px" : "")};
`;
