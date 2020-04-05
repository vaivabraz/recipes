import React from "react";
import { TextInput, Button, TextButton } from "../common";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/actions/userActions";
import { useForm } from "../common/customHooks/useForm";
import styled from "styled-components";

const Page = styled.div`
  align-items: center;
  margin-botton: 2.5vh;
`;

const InputsBox = styled.div`
  padding-top: 8vh;
  padding-bottom: 5vh;
`;

export function LogInPage() {
  const dispatch = useDispatch();
  const [value, handleChange] = useForm({ username: "", password: "" });
  return (
    <Page className="pageFlexContainer flexColumn">
      <h1>Tavo asmeninė receptų knyga!</h1>
      <InputsBox>
        <TextInput
          label="Prisijungimo Vardas"
          name="username"
          value={value.username}
          onChange={handleChange}
        />
        <TextInput
          label="Slaptažodis"
          name="password"
          type="password"
          value={value.password}
          onChange={handleChange}
        />
      </InputsBox>
      <Button
        text={"Prisijungti"}
        action={() => {
          dispatch(logIn());
        }}
      />
      <TextButton text={"Registruotis"} action={() => {}} />
    </Page>
  );
}
