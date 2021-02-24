import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import appsFlyer from "react-native-appsflyer";
import Config from "react-native-config";

export default function App() {
  const devKey = Config.APPS_FLYER_DEV_KEY;
  const isDebug = Config.APPS_FLYER_IS_DEBUG;
  const appId = Config.APPS_FLYER_ANDROID_APP_ID;

  const appsFlyerParams = {
    devKey,
    isDebug,
    appId,
  };
  if (
    Object.values(appsFlyerParams).every(
      (paramValue) => paramValue !== undefined
    )
  ) {
    appsFlyer.initSdk(
      appsFlyerParams,
      (result) => {
        console.log(`AppsFlyer initialization ${result}`);
      },
      (error) => {
        console.error(`AppsFlyer initialization ${error}`);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
