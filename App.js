import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ImageBackground, Button } from "react-native";
import useRoute from "./router";

import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";

// SplashScreen.preventAutoHideAsync();


export default function App() {
  const routing = useRoute();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      {routing}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
