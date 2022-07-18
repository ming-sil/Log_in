import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const userDb = {
  dbUsername: "test",
  dbPassword: "qwer1234",
};

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
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  padding: 10px;
  text-align: center;
  background-color: indianred;
  box-sizing: border-box;
  color: white;
  border-radius: 10px;
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => props.cursor};
  transition: 0.3s;
`;

const ErrorMessage = styled.span`
  font-weight: 900;
  color: crimson;
  margin-bottom: 15px;
`;

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    // console.log(getValues());
    const { username, password } = getValues();
    const { dbUsername, dbPassword } = userDb;

    if (username !== dbUsername) {
      setError("usernameResult", { message: "아이디가 틀렸습니다" });
    }

    if (password !== dbPassword) {
      setError("passwordResult", { message: "비밀번호가 틀렸습니다" });
    }

    if (username === dbUsername && password === dbPassword) {
      navigate("/");
    }
  };

  console.log(errors);

  return (
    <Wrap>
      <LoginWrap>
        <Title>LOGIN</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: "이메일 혹은 아이디를 입력해주세요.",
              minLength: {
                value: 3,
                message: "아이디는 3자이상 작성해주세요.",
              },
            })}
            // register: 이름적용, 유호성검사 가능 (required: true =>내용 필수 | required: "" =>에러시 보일 메세지)
            type="text"
            placeholder="이메일 또는 아이디"
          />
          {errors?.username?.message && (
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          )}
          {errors?.usernameResult?.message && (
            <ErrorMessage>{errors?.usernameResult?.message}</ErrorMessage>
          )}

          <input
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "비밀번호는 8자이상 작성해주세요.",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/,
                message: "비밀번호는 문자, 숫자 조합으로 작성해 주세요.",
              },
            })}
            type="password"
            placeholder="비밀번호"
          />
          {errors?.password?.message && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}
          {errors?.passwordResult?.message && (
            <ErrorMessage>{errors?.passwordResult?.message}</ErrorMessage>
          )}
          <Button
            opacity={isValid ? 1 : 0.5}
            cursor={isValid ? "pointer" : "auto"}
          >
            로그인
          </Button>
        </form>
      </LoginWrap>
    </Wrap>
  );
};

// action: input 내용을 담아 특정 페이지로 보낼 때

// *로그인 유효성 검사
// -아이디가 틀렸습니다
// -비번이 틀렸습니다
// -없는 계정입니다
// -특수문자
// -이메일만 입력하세요
// -비밀번호 변경
// -잘못된 행동입니다
// -아이디를 입력해주세요
// -비밀번호를 입력해주세요
// -비밀번호 n회 오류
// -로그인되었습니다

// *정규식 표현(regex)
// 비밀번호 정규식 패턴 https://www.wrapuppro.com/programing/view/MIw5kPB3ao2YJVx

// // *react-hook-form

// const {
//   register,
//   handleSubmit,
//   formState:{errors,isValid},
//   getValues,
//   setError,
// } = useForm({
//   mode:"onChange"
// })

// 1. register
// =>인풋태그에 유효성, name 등을 부여
// <input
// {...register("username", {
//   required: "이메일 혹은 아이디를 입력해주세요.",
// *******************=>Boolean값으로 처리할 수도 있고, 메세지도 전달할 수 있음***********************
//   minLength: {
//     value: 3,
//     message: "아이디는 3자이상 작성해주세요.",
//   },
// *******************=>최소길이, value값으로 길이 정하며, message를 이용해 내용 작성 가능***********************
//   pattern: {
//     value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/,
//     message: "비밀번호는 문자, 숫자 조합으로 작성해 주세요.",
//   },
// *******************=>정규식 표현법으로 특수문자, 숫자, 대문자 등 특정 패턴을 넣을 수 있음***********************
// })}
// type="text"
// placeholder="이메일 또는 아이디"
// />

// 2. handleSubmit
// =>form태그에 SubmitEvent처리

// 3. formState:{errors, isValid}
// =>form태그 상태
// =>errors: form태그 에러확인
// =>isValid: form태그 유효성 검사(Boolean값으로 반환)

// 4. getValues
// =>인풋태그 value값을 가져옴(유저가 인풋에 입력한 값)
// =>getValues() 로 함수 호출할 것

// 5. setError
// =>에러를 세팅할 수 있음
// =>setError("에러명",{
//   "message" : "메세지명"
// })

// 6. clearError
// =>에러를 지울 수 있음
// =>clearError("에러명")

// 7. mode=>폼태그 모드를 이야기하며
// onchange(실시간),
// onblur(활성화시),
// onfocus(클릭시),
// ontouchcancel(터치시)

// *useNavigate()
// =>react-router-dom 에서 지원함
// =>페이지 경로를 바꿀 수 있음
// =>navigate("경로")
