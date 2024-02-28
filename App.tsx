import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/components/AppNavigator';
import { AppStateProvider } from './src/components/AppStateContext';
import { AuthProvider } from './src/components/Auth/AuthContext';


function App(): React.JSX.Element {


  return (
    <AuthProvider>
      <AppStateProvider>
          <NavigationContainer>
            <SafeAreaView style={styles.appContainer}>
              <AppNavigator/>
            </SafeAreaView>
          </NavigationContainer>
      </AppStateProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default App;
