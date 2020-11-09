import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MainButton from "../../components/common/MainButton";
import { FontAwesome } from "@expo/vector-icons";
import Title from "../../components/common/Title";
import SubTitle from "../../components/common/SubTitle";
import Container from "../../components/common/Container";
const StartPage = ({ navigation, onSignIn }) => {
  return (
    <Container>
      <View style={styles.main}>
        <View style={styles.container}>
          <Title>PollWorld!</Title>
          <SubTitle>Cześć mordeczko miłego dnia :D</SubTitle>
        </View>
        <View>
          <MainButton name="Zarejestruj się" />
          <MainButton
            name="Zaloguj przez Google"
            transparent={true}
            icon={<FontAwesome name="google" size={24} color="white" />}
          />
          <MainButton
            name="Zaloguj przez Facebooka"
            transparent={true}
            icon={<FontAwesome name="facebook" size={24} color="white" />}
            onPress={() => onSignIn()}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.login}>Zaloguj się</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  header: {
    height: "50%",
  },
  main: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  login: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Quicksand_700Bold",
    color: "#32e0c4",
  },
});

export default StartPage;