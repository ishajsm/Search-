import React, { Component } from "react";
import { StatusBar, Platform, View, Dimensions } from "react-native";

import Routes from './src/Routes/Routes';

// import "./src/screens/Translations/IMLocalize";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 45 : 0;
export default class App extends Component {
  StatusBarPlaceHolder = () => {
    return (
      <View
        style={{
          height: STATUS_BAR_HEIGHT,
          backgroundColor: AppColors.colorPurple,
        }}
      >
        <StatusBar barStyle="default" backgroundColor={AppColors.colorPurple} />
      </View>
    );
  };
  render() {
    global.WIDTH = Dimensions.get("window").width;
    return (
    
          <Routes />
     
    );
  }
}
