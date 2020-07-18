import React from "react";
import styled from "styled-components/native";

export function CalcButton(props) {
  if (!props.zero) {
    return (
      <Button bg={props.bg} onPress={props.onPress}>
        <ButtonText>{props.title}</ButtonText>
      </Button>
    );
  } else {
    return (
      <ButtonZero onPress={props.onPress}>
        <ButtonText>0</ButtonText>
      </ButtonZero>
    );
  }
}

const Button = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin-top: 5px;
  background-color: ${(props) => (props.bg ? props.bg : "#212121")};
  border-radius: 50px;
`;

const ButtonText = styled.Text`
  font-size: ${(props) => (props.size ? props.size : "25px")};
  color: #fff;
  ${(props) => (props.rotate ? "transform: rotateY(140deg)" : null)};
`;

const ButtonZero = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  width: 155px;
  height: 70px;
  margin-top: 5px;
  background-color: #212121;
  border-radius: 50px;
`;
