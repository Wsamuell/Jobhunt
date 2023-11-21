import {createAppContainer} from 'react-navigation';
import SearchScreen from '../Components/SearchScreen';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Home: SearchScreen,
    // FindJobs: FindJobsScreen,
    // Add other screens as needed (MyJobsScreen, ProfileScreen, etc.)
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
