import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

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
          placeholderTextColor={"#5D6D7E"}
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
    height: hp("6%"),
    borderWidth: 1,
    borderRadius: wp("3%"),
    alignSelf: "center",
    marginTop: hp("2.5%"),
    paddingLeft: wp("2.5%"),
  },

  text: {
    paddingTop: hp("1.2%"),
  },
});
