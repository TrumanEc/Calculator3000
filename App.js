import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import Calculator from "./pages/Calculator";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Calculator />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
