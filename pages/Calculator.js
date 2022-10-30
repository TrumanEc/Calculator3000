import { StyleSheet, View, ScrollView } from "react-native";
import Constants from "expo-constants";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { useEffect, useState } from "react";
import Number from "../components/Number";
import Actions from "../components/Actions";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Calculator = (props) => {
  const [op, setOp] = useState("");
  const [aux, setAux] = useState("");
  const [result, setResult] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    result && data && setResult("");
  }, [data]);

  const handleAction = (op1) => {
    setResult("");
    setOp(op1);
    if (aux) {
      const r = resolve(op1);
      data && setAux(r);
      setData("");
    } else {
      setAux(data);
      setData("");
    }
  };

  const actions = [
    {
      value: "+",
      action: () => {
        handleAction("+");
      },
    },
    {
      value: "-",
      action: () => {
        handleAction("-");
      },
    },
    {
      value: "x",
      action: () => {
        handleAction("x");
      },
    },
    {
      value: "/",
      action: () => {
        handleAction("/");
      },
    },
  ];
  const resolve = (op1) => {
    const n1 = parseFloat(aux);
    const n2 = parseFloat(data);
    let l = 0;
    switch (op1) {
      case "+":
        l = n1 + n2;
        break;
      case "-":
        l = n1 - n2;
        break;

      case "x":
        l = n1 * n2;
        break;

      case "/":
        l = n1 / n2;
        break;
    }
    return `${l}`;
  };

  const printResolve = () => {
    if (data) {
      if (aux) {
        setResult(resolve(op));
        setAux(resolve(op));
        setData("");
      }
    } else setResult(aux);
  };
  return (
    <Layout
      style={{
        flex: 1,
        alignContent: "center",
        flexDirection: "column",
        padding: 20,
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "#154E79",
          borderRadius: 20,
          padding: 20,
          flexDirection: "column",

          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            height: 20,
            color: "#F6AF65",
            textAlign: "right",
          }}
        >
          {aux}
        </Text>

        <ScrollView
          style={{ height: 150, marginTop: 20 }}
          contentContainerStyle={{ height: "100%", justifyContent: "flex-end" }}
        >
          <Text
            category="h2"
            style={{
              fontSize: 40,
              textAlign: "right",
              color: "#DBDEFA",
            }}
          >
            {result || data}
          </Text>
        </ScrollView>
      </View>

      <Layout
        style={{
          justifyContent: "space-between",
          alignContent: "space-between",
          flexDirection: "row",
          marginTop: 16,
          paddingTop: 16,
          borderTopColor: "#A7CCED",
          borderTopEndRadius: 2,
          borderTopStartRadius: 2,
          borderTopWidth: 1,
        }}
      >
        <Layout
          style={{
            width: "75%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {numbers.map((n) => {
            return <Number value={n} onPress={(a) => setData(`${data}${a}`)} />;
          })}
          <Number value={0} onPress={(a) => setData(`${data}${a}`)} />
          <Number value={"."} onPress={(a) => setData(`${data}${a}`)} />
        </Layout>
        <Layout
          style={{
            width: "20%",
            flexDirection: "column",
          }}
        >
          {actions.map((a, i) => {
            return (
              <Actions
                key={i}
                value={a.value}
                onPress={a.action}
                active={a.value === op ? true : false}
              />
            );
          })}
        </Layout>
      </Layout>
      <View
        style={{
          width: "102%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Actions
          value={">"}
          onPress={() => setData(data.length > 0 ? data.slice(0, -1) : "")}
          style={{
            backgroundColor: "#FF5F5C",
            borderColor: "#FF5F5C",
          }}
          textStyle={{
            color: "#dddddd",
          }}
        />
        <Actions
          value={"C"}
          onPress={() => {
            setData("");
            setAux("");
            setResult("");
          }}
          style={{
            backgroundColor: "#E00400",
            borderColor: "#E00400",
          }}
          textStyle={{
            color: "#dddddd",
          }}
        />
        <Actions
          value={"="}
          onPress={printResolve}
          style={{
            backgroundColor: "#dddddd",
            borderColor: "#dddddd",
          }}
          textStyle={{
            color: "#154E79",
          }}
        />
      </View>
    </Layout>
  );
};

export default Calculator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
