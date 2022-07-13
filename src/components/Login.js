import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  border: 1px solid #dbdbdb;
  align-items: center;
  padding: 80px 50px;
  border-radius: 10px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  input {
    all: unset;
    border: 1px solid #dbdbdb;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 10px;
  }
  button {
    all: unset;
    width: 100%;
    height: 50px;
    padding: 10px;
    text-align: center;
    background-color: indianred;
    box-sizing: border-box;
    color: white;
    border-radius: 10px;
    opacity: 0.5;
  }
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
`;

export const Login = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Wrap>
      <LoginWrap>
        <Title>LOGIN</Title>
        <form action="" method="POST">
          <input
            // {...register()}
            type="text"
            placeholder="이메일 혹은 아이디를 입력해주세요."
          />
          <input type="password" />
          <button>로그인</button>
        </form>
      </LoginWrap>
    </Wrap>
  );
};
// action: input 내용을 담아 특정 페이지로 보낼 때
