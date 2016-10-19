'use strict';
import Home from './Screens/Home';
import Profile from './Screens/Profile';

class Routes {
  home() {
    return {
      name: "home",
      title: "home 입니다.",
      component: Home,
      leftButton: true,//LogoutButton,
      rightButton: true,//PostButton,
      hideNavigationBar: false,
      statusBarStyle: "light-content"
    }
  }

  profile() {
    return {
      name: "profile",
      title: "profile 입니다.",
      component: Profile,
      leftButton: true,//LogoutButton,
      rightButton: true,//PostButton,
      hideNavigationBar: false,
      statusBarStyle: "light-content"
    }
  }


}

export default new Routes()
