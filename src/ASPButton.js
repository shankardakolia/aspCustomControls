import React from "react";
import { Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ASPButton = ({ btnStyle, btnTitleSStyle, onClicked, title }) => {
  if (!btnStyle.backgroundColor) {
    btnStyle.backgroundColor = "#000000";
  }
  return (
    <TouchableOpacity style={[styles.btn, btnStyle]} onPress={onClicked}>
      <Text style={[styles.btnText, btnTitleSStyle]}>
        {title ? title : "Please Set Title"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get("window").width - 50,
    height: hp("6%"),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp("3%"),
  },
  btnText: {
    color: "#fff",
  },
});

export default ASPButton;
