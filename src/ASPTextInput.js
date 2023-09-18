import React, { useState } from "react";
import Icon from "react-native-vector-icons/dist/AntDesign";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ASPTextInput = ({
  placeholder,
  value,
  secureTextEntry,
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
  const [secureEntry, setSecureEntry] = useState(secureTextEntry);

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
          secureTextEntry={secureEntry}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              setSecureEntry(!secureEntry);
            }}
          >
            <Icon name="eye" size={hp("3%")} color={"#5D6D7E"} />
          </TouchableOpacity>
        )}
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
    flexDirection: "row",
  },

  text: {
    paddingTop: hp("1.2%"),
  },
  icon: {
    marginLeft: "auto",
    justifyContent: "center",
    marginRight: 10,
  },
});
