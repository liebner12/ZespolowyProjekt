import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import Paragraph from "./Paragraph";
const RadioButtonGroup = ({ title, fields, value, setValue }) => {
  const fieldKeys = Object.keys(fields);
  return (
    <RadioButton.Group onValueChange={setValue} value={value}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.radioContainer}>
        {fieldKeys.map((key) => {
          const field = fields[key];
          return (
            <View key={key} style={styles.radioButton}>
              <Paragraph>{field.name}</Paragraph>
              <RadioButton
                value={field.name}
                color="#32e0c4"
                uncheckedColor="#32e0c4"
              />
            </View>
          );
        })}
      </View>
    </RadioButton.Group>
  );
};
const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioButton: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontFamily: "Asap_600SemiBold",
    color: "#32e0c4",
    marginBottom: 10,
  },
});

export default RadioButtonGroup;
