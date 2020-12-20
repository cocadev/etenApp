import React, { PureComponent } from 'react'
import { default as SignIn } from './screens/Login/signIn'
import SignUp from './screens/Login/signup'

import { KeyboardAvoidingView, Platform, Dimensions } from 'react-native'
import { Scene, Router, Drawer } from 'react-native-router-flux'
import * as Font from 'expo-font';

import SideMenu from './SideMenu';
import Wall from './screens/Dashboard/wall';

import WallDetail from './screens/Dashboard/wallDetail';
import Profile from './screens/Dashboard/Profile';
import {StoreProfile} from './screens/Dashboard/storeProfile'
import { WorkingHours } from './screens/Dashboard/workingHours'
import { StoreManagers } from './screens/Dashboard/storeManagers'
// import { Default } from './screens/Dashboard/default'
import { BankDetails } from './screens/Dashboard/bankDetails'
import { AddStripeAccount } from './screens/Dashboard/addStripeAccount'
import { ChangeLanguage } from './screens/Dashboard/changeLanguage'
import { History } from './screens/Dashboard/history'
import { SelectTwoDates } from './screens/Dashboard/selectTwoDates'
import { Home } from './screens/Dashboard/home'

const width = Dimensions.get('window').width

export default class App extends PureComponent {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await this._loadAssets();
  }

  async _loadAssets() {
    await Font.loadAsync({
      'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
      'Montserrat-BlackItalic': require('../assets/fonts/Montserrat-BlackItalic.ttf'),
      'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-BoldItalic': require('../assets/fonts/Montserrat-BoldItalic.ttf'),
      'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
      'Montserrat-ExtraBoldItalic': require('../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
      'Montserrat-ExtraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
      'Montserrat-ExtraLightItalic': require('../assets/fonts/Montserrat-ExtraLightItalic.ttf'),
      'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic.ttf'),
      'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-LightItalic': require('../assets/fonts/Montserrat-LightItalic.ttf'),
      'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-MediumItalic': require('../assets/fonts/Montserrat-MediumItalic.ttf'),
      'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
      'Montserrat-SemiBoldItalic': require('../assets/fonts/Montserrat-SemiBoldItalic.ttf'),
      'Montserrat-Thin': require('../assets/fonts/Montserrat-Thin.ttf'),
      'Montserrat-ThinItalic': require('../assets/fonts/Montserrat-ThinItalic.ttf'),

      // 'ionicons': require('../assets/fonts/Montserrat-ThinItalic.ttf'),
      // 'material-community': require('../assets/fonts/Montserrat-ThinItalic.ttf'),

    });
    console.log('fonts loaded!');
    this.setState({ fontLoaded: true });
  }
  render() {

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}>
        {this.state.fontLoaded == true ?

          <Router>
            
            <Scene>

              <Scene key="signin" component={SignIn} hideNavBar initial={false}/>
              <Scene key="signup" component={SignUp} hideNavBar initial={false}/>

              <Drawer
                hideNavBar
                initial={true}
                key="drawerMenu"
                contentComponent={SideMenu}
                drawerWidth={width/1.2}
                drawerPosition="left"
              >
                {/* <Scene key="bb" component={Default} hideNavBar/> */}
                <Scene key="home" component={Home} hideNavBar/>
                <Scene key="selectTwoDates" component={SelectTwoDates} hideNavBar/>
                <Scene key="history" component={History} hideNavBar/>
                <Scene key="language" component={ChangeLanguage} hideNavBar/>
                <Scene key="addstripe" component={AddStripeAccount} hideNavBar/>
                <Scene key="bank" component={BankDetails} hideNavBar/>

                <Scene key="workingHours" component={WorkingHours} hideNavBar/>
                <Scene key="storeProfile" component={StoreProfile} hideNavBar/>
                <Scene key="storeManagers" component={StoreManagers} hideNavBar/>
                <Scene key="offers" component={StoreManagers} hideNavBar/>
                <Scene key="profile" component={Profile} initial={false} hideNavBar/>

                <Scene key="wall" component={Wall} hideNavBar/>
                <Scene key="walldetail" component={WallDetail} initial={false} hideNavBar/>

              </Drawer>
            </Scene>
          </Router>
          : null}
      </KeyboardAvoidingView>
    );
  }
}
