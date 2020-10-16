import styled from "styled-components";

export const Wrapper = styled.div`
  width: 600px;
  background: #fff;
  border-radius: 3px;
  margin: 25px;
  padding: 20px 50px 40px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
    margin: 20px 0 25px;

    &.number {
      margin-bottom: 33px;
    }
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all .3s ease;

    :hover  {
        opacity: .8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: .9rem;
        width: 100%;
        margin: 5px 0;
        padding: 10px;
        color: #444;
        background: ${({ correct, userClicked }) =>
          correct
            ? "linear-gradient(90deg, #28A745, #05B304); color: #FFF;"
            : !correct && userClicked
            ? "linear-gradient(90deg, #DC3545, #CE0206); color: #FFF;"
            : "#EFEFEF"};
        border: 0px solid transparent;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, .1);
        border-radius: 3px;
        }
    }
`;
