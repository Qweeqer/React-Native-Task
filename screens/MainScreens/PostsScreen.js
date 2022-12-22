import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BackArrowButton } from "../../components/BackArrowButton";
import { MapScreen, HomeScreen, CommentsScreen } from "screens/";
import { LogoutButton } from "../../components/LogoutButton";

const PostsStack = createStackNavigator();

const PostsScreen = () => {
  return (
    <PostsStack.Navigator
      initialRouteName="Публикации"
      backBehavior="history"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 17,
        },
        headerStyle: {
          borderBottomWidth: 0.5,
          borderBottomColor: "#b3b3b3",
        },
        headerTitleAlign: "center",
      }}
    >
      <PostsStack.Screen
        name="Публикации"
        component={HomeScreen}
        options={() => ({
          headerRight: () => <LogoutButton />,
        })}
      />
      <PostsStack.Screen
        name="Комментарии"
        component={CommentsScreen}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrowButton navigation={navigation} />,
        })}
      />
      <PostsStack.Screen
        name="Карта"
        component={MapScreen}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrowButton navigation={navigation} />,
        })}
      />
    </PostsStack.Navigator>
  );
};

export default PostsScreen;
