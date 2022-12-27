import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect, useCallback } from 'react';
import { View, Alert, BackHandler } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useRoute } from './src/Router/router';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { Main } from './src/components/Main';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
  });
  const routing = useRoute(false);

  useEffect(() => {
    console.log(store);
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();

    // const backAction = () => {
    //   Alert.alert('Hold on!', 'Are you sure you want to go out?', [
    //     {
    //       text: 'Cancel',
    //       onPress: () => null,
    //       style: 'cancel',
    //     },
    //     { text: 'YES', onPress: () => BackHandler.exitApp() },
    //   ]);
    // };

    // const backHandler = BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   backAction
    // );

    // return () => backHandler.remove();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View onLayout={onLayoutRootView}></View>
      <Main />
    </Provider>
  );
}
