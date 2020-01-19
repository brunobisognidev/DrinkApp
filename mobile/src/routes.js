import { createAppContainer } from 'react-native';
import { creatStackNavigator } from 'react-navigator-stack';

import Main from './src/pages/Main';
import Profile from './src/pages/Profile';

const Routes = createAppContainer(
   createStackNavigation({
      Main:{

      },
      Profile: {

      },{
         defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
               backgroundColor: '#7D40E7',
            },
         },
   })
);

export default Routes; 