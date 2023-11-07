// Libraries
import { useState } from 'react';
import {
  Button,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';

/*
 * Local Variables
 */

const { width } = Dimensions.get('window');

const textInputStyle = {
  alignSelf: 'center',
  backgroundColor: 'transparent',
  borderWidth: 1,
  marginBottom: 20,
  padding: 8,
  width: width * 0.8,
};

/*
 * Signup
 */

export default function Signup() {
  // State

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Functions

  function handleLoginPress() {
    console.log('pressed login...');
  }

  function handleSubmit() {
    console.log('pressed signup...');
  }

  // Return

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <TextInput
        onChangeText={setFirstName}
        placeholder='First Name'
        style={textInputStyle}
        textContentType='givenName'
        value={firstName}
      />

      <TextInput
        onChangeText={setLastName}
        placeholder='Last Name'
        style={textInputStyle}
        textContentType='familyName'
        value={lastName}
      />

      <TextInput
        autoCapitalize='none'
        onChangeText={setEmail}
        placeholder='Email'
        style={textInputStyle}
        textContentType='emailAddress'
        value={email}
      />

      <TextInput
        autoCapitalize='none'
        onChangeText={setPassword}
        placeholder='Password'
        style={textInputStyle}
        secureTextEntry={true}
        textContentType='password'
        value={password}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '8rem',
          marginBottom: '8rem',
        }}
      >
        <Button onPress={handleLoginPress} title='Log In' />
      </View>

      <Button onPress={handleSubmit} title='Sign Up' />
    </KeyboardAvoidingView>
  );
}
