import React, { useRef } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useAuth } from './AuthContext';
import authStyles from '../../styles/AuthStyles';


interface FormValues {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
  }

const SignUpForm: React.FC = () => {

    const {signIn} = useAuth();

    const initialValues: FormValues = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
      };

  const validationSchema = Yup.object({
    userName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Password mus be at least 8 characters long').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Required'),
    agreeToTerms: Yup.boolean()
      .required('Required')
      .oneOf([true], 'You must accept the terms and conditions.'),
  });

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        signIn();
        setSubmitting(false);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched, isSubmitting }) => (
        <View style={authStyles.container}>

          <Text style={authStyles.label}>User Name</Text>
          <View style={authStyles.inputWrapper}>
            <TextInput
                onSubmitEditing={(event) => {event.preventDefault()}}
                onChangeText={handleChange('userName')}
                onBlur={handleBlur('userName')}
                value={values.userName}
                style={authStyles.input}
            />
            {touched.userName && !errors.userName && <Ionicon name="checkmark-circle" size={20} color="#000"/>}
          </View>
          {touched.userName && errors.userName && <Text style={authStyles.errorText}>{errors.userName}</Text>}


          <Text style={authStyles.label}>Email</Text>
          <View style={authStyles.inputWrapper}>
            <TextInput
                ref={emailRef}
                onSubmitEditing={(event) => {event.preventDefault();}}
                returnKeyType="next"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                style={authStyles.input}
            />
            {touched.email && !errors.email && <Ionicon name="checkmark-circle" size={20} color="#000"/>}
          </View>
          {touched.email && errors.email && <Text  style={authStyles.errorText}>{errors.email}</Text>}


          <Text style={authStyles.label}>Password</Text>
          <View style={authStyles.inputWrapper}>
            <TextInput
                ref={passwordRef}
                onSubmitEditing={(event) => {event.preventDefault();}}
                returnKeyType="next"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                style={authStyles.input}
            />
            <Ionicon name="eye-off" size={20} color="#000"/>
          </View>
          {touched.password && errors.password && <Text style={authStyles.errorText}>{errors.password}</Text>}


          <Text style={authStyles.label}>Confirm Password</Text>
          <View style={authStyles.inputWrapper}>
            <TextInput
                ref={passwordRef}
                onSubmitEditing={(event) => {event.preventDefault();}}
                returnKeyType="next"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
                style={authStyles.input}
            />
            <Ionicon name="eye-off" size={20} color="#000"/>
          </View>
          {touched.confirmPassword && errors.confirmPassword && <Text style={authStyles.errorText}>{errors.confirmPassword}</Text>}


          <Pressable
            style={authStyles.checkboxContainer}
            onPress={() => setFieldValue('agreeToTerms', !values.agreeToTerms)}
          >
            <View style={authStyles.checkbox}>
              {values.agreeToTerms && <Ionicon name="checkmark" size={15} color="#000" />}
            </View>
            <Text style={authStyles.termsText}>
              By creating an account you have to agree with our terms & conditions.
            </Text>
          </Pressable>
          {touched.agreeToTerms && errors.agreeToTerms && <Text style={authStyles.errorText}>{errors.agreeToTerms}</Text>}


          <View>
            <Pressable style={authStyles.submitButton} onPress={() => handleSubmit()} disabled={isSubmitting}>
              <Text  style={authStyles.submitButtonText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
