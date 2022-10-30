import { Button, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export const Actions = ({
  value,
  onPress,
  active = false,
  style = null,
  textStyle = null,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width: value === "=" ? 160 : 80,
        height: 80,
        marginVertical: 10,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: active ? "#F6AF65" : "transparent",
        borderColor: active ? "transparent" : "#F6AF65",

        borderWidth: 3,
        ...style,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 35,
          margin: 0,
          color: active ? "#154E79" : "#F6AF65",

          fontWeight: "700",
          ...textStyle,
        }}
      >{`${value}`}</Text>
    </TouchableOpacity>
  );
};

export default Actions;
