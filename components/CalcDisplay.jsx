import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components/native";
import { useSelector } from "react-redux";

export function Display() {
  const result = useSelector((state) => state.result);
  return (
    <InputContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
        <InputField showSoftInputOnFocus={false} value={result} />
      </TouchableWithoutFeedback>
    </InputContainer>
  );
}

const InputContainer = styled.View`
  width: 100%;
  height: 18.5%;
  margin-top: 30px;
  background-color: black;
  justify-content: flex-start;
`;

const InputField = styled.TextInput`
  color: #fff;
  text-align: right;
  height: 100%;
  font-size: 50px;
`;
