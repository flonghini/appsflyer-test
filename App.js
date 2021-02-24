import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import appsFlyer from "react-native-appsflyer";
import Config from "react-native-config";

export default function App() {
  const devKey = Config.APPS_FLYER_DEV_KEY;
  const isDebug = Config.APPS_FLYER_IS_DEBUG;
  const appId = Config.APPS_FLYER_IOS_APP_ID;

  const appsFlyerParams = {
    devKey,
    isDebug,
    appId,
  };

  let sdkResponse;

  if (
    Object.values(appsFlyerParams).every(
      (paramValue) => paramValue !== undefined
    )
  ) {
    appsFlyer.initSdk(
      appsFlyerParams,
      (result) => {
        sdkResponse = result;
        console.log(`AppsFlyer initialization ${result}`);
      },
      (error) => {
        sdkResponse = error;
        console.error(`AppsFlyer initialization ${error}`);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text>{`AppsFlyer successfully connected? Pls check logs`}</Text>
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
