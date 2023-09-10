import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { scaleFontSize, verticalScale } from "./scaling";

const ASPTextInput = ({
  placeholder,
  value,
  onChangeText,
  type,
  inputRef,
  onSubmitEditing,
  returnKeyType,
  BorderColor,
  BorderFocusColor,
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  fontSize = scaleFontSize(fontSize);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <TouchableWithoutFeedback>
      <View
        style={[
          styles.input,
          {
            borderColor: isFocused ? BorderFocusColor : BorderColor,
          },
        ]}
      >
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          keyboardType={type ? type : "default"}
          onChangeText={(txt) => {
            onChangeText(txt);
          }}
          style={[styles.text, style]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ASPTextInput;

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get("window").width - 50,
    height: verticalScale(40),
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    paddingLeft: 10,
  },

  text: {
    paddingTop: verticalScale(12),
  },
});
