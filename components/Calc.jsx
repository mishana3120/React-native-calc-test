import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Display } from "./CalcDisplay";
import { CalcButton } from "./Button";
import "../lib/swisscalc.calc.calculator";
import "../lib/swisscalc.display.memoryDisplay";
import "../lib/swisscalc.display.numericDisplay";
import "../lib/swisscalc.lib.format";
import "../lib/swisscalc.lib.operator";
import "../lib/swisscalc.lib.operatorCache";
import "../lib/swisscalc.lib.shuntingYard";
import { useDispatch } from "react-redux";
import { changeResult } from "../store/action";

export function Calc() {
  var oc = global.swisscalc.lib.operatorCache;
  var calc = new global.swisscalc.calc.calculator();
  const dispatch = useDispatch();

  function onPressDigit(digit) {
    calc.addDigit(digit);
    updateResult();
  }

  function onPressOperation(operation) {
    calc.addBinaryOperator(operation);
    updateResult();
  }

  function onPressPlusMinus() {
    calc.negate();
    updateResult();
  }

  function onPressClear() {
    calc.clear();
    updateResult();
  }

  function onPressEquals() {
    calc.equalsPressed();
    updateResult();
  }

  function onPressMemoryPlus() {
    calc.memoryPlus();
  }

  function onPressMemoryMinus() {
    calc.memoryMinus();
  }

  function onPressMemoryClear() {
    calc.memoryClear();
  }

  function onPressMemoryRead() {
    calc.memoryRecall();
    updateResult();
  }

  function onPressUnaryOperator(operator) {
    calc.addUnaryOperator(operator);
  }

  function onPressBackSpace() {
    calc.backspace();
    updateResult();
  }

  function updateResult() {
    dispatch(changeResult(calc.getMainDisplay()));
  }

  return (
    <Container>
      <Display />

      <ButtonRemoveContainer>
        <ButtonRemove onPress={onPressBackSpace}>
          <ButtonText size="25px" rotate>
            &#10141;
          </ButtonText>
        </ButtonRemove>
      </ButtonRemoveContainer>

      <ButtonContainer>
        <ButtonRow>
          <CalcButton onPress={onPressClear} bg="#8e8e8e" title="AC" />
          <CalcButton onPress={onPressPlusMinus} bg="#8e8e8e" title="+/-" />
          <CalcButton
            onPress={() => onPressUnaryOperator(oc.PercentOperator)}
            bg="#8e8e8e"
            title="%"
          />
          <CalcButton
            onPress={() => onPressOperation(oc.DivisionOperator)}
            bg="#c7cc00"
            title="/"
          />
        </ButtonRow>

        <ButtonRow>
          <CalcButton onPress={onPressMemoryClear} title="mc" />
          <CalcButton onPress={onPressMemoryRead} title="mr" />
          <CalcButton onPress={onPressMemoryMinus} title="m-" />
          <CalcButton onPress={onPressMemoryPlus} bg="#c7cc00" title="m+" />
        </ButtonRow>

        <ButtonRow>
          <CalcButton onPress={() => onPressDigit("7")} title="7" />
          <CalcButton onPress={() => onPressDigit("8")} title="8" />
          <CalcButton onPress={() => onPressDigit("9")} title="9" />
          <CalcButton
            onPress={() => onPressOperation(oc.MultiplicationOperator)}
            bg="#c7cc00"
            title="*"
          />
        </ButtonRow>

        <ButtonRow>
          <CalcButton onPress={() => onPressDigit("4")} title="4" />
          <CalcButton onPress={() => onPressDigit("5")} title="5" />
          <CalcButton onPress={() => onPressDigit("6")} title="6" />
          <CalcButton
            onPress={() => onPressOperation(oc.SubtractionOperator)}
            bg="#c7cc00"
            title="-"
          />
        </ButtonRow>

        <ButtonRow>
          <CalcButton onPress={() => onPressDigit("1")} title="1" />
          <CalcButton onPress={() => onPressDigit("2")} title="2" />
          <CalcButton onPress={() => onPressDigit("3")} title="3" />
          <CalcButton
            onPress={() => onPressOperation(oc.AdditionOperator)}
            bg="#c7cc00"
            title="+"
          />
        </ButtonRow>

        <ButtonRow>
          <CalcButton onPress={() => onPressDigit("0")} title="0" zero />
          <CalcButton onPress={() => onPressDigit(".")} title="." />
          <CalcButton onPress={onPressEquals} bg="#c7cc00" title="=" />
        </ButtonRow>
      </ButtonContainer>

      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const ButtonRemoveContainer = styled.View`
  flex-direction: row;
  background-color: black;
  justify-content: flex-end;
`;

const ButtonRemove = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 40px;
  margin-right: 10px;
  background-color: #212121;
  border-radius: 50px;
`;

const ButtonText = styled.Text`
  font-size: ${(props) => (props.size ? props.size : "25px")};
  color: #fff;
  ${(props) => (props.rotate ? "transform: rotateY(140deg)" : null)};
`;

const ButtonContainer = styled.View`
  background-color: black;
  flex: 1;
  flex-direction: column;
  margin-left: 12.5px;
  margin-right: 12.5px;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  background-color: black;
  justify-content: space-between;
`;
