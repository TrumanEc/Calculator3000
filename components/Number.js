import { Button, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export const Number = ({ onPress = null, value = null }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: value === 0 ? "65%" : 80,
        height: 80,
        marginVertical: 10,
        borderRadius: "50%",
        backgroundColor: "#7A9EB5",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => onPress(value)}
    >
      <Text
        style={{ color: "#02182B", fontSize: 35, fontWeight: "600" }}
      >{`${value}`}</Text>
    </TouchableOpacity>
  );
};

export default Number;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginHorizontal: 8,
  },
});
