import React from 'react';
import { Image, Text, View } from 'react-native';
import SignUpForm from '../components/Auth/SignUpForm';
import authStyles from '../styles/AuthStyles';
import { ScrollView } from 'react-native-gesture-handler';

const AuthScreen: React.FC<{}> = () => {
  return (
    <View style={authStyles.pageContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <Image style={authStyles.img} source={require('../assets/images/logo.jpg')} />
        <Text style={authStyles.title}>Sign Up</Text>
        <Text style={authStyles.subtitle}>Create a new account</Text>
        <SignUpForm />
      </ScrollView>
    </View>
  );
};

export default AuthScreen;
