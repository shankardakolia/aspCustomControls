# aspCustomControls

ASP Custom Controls for React Native

# Installing Package

```
npm i asp-react-native-custom-controls
```

# Installing Dependencies

```
npm i react-native-responsive-screen
Then do pod install cd ios then pod install
```

# Controls

1. Custom TextInput ASPTextInput

# Usage

How to use ASPTextInput

# Import

```
import {ASPTextInput} from 'asp-react-native-custom-controls';
```

# Usage

```
<ASPTextInput />
```

# Props

```
placeholder => provide placeholder
value => map the value from your state
onChangeText => pass your function for onChangeText
type => provide keyboard type if no values provided it will use 'default'
inputRef => provide your reference if using useRef hook
onSubmitEditing => provide your function for handling submit editing
returnKeyType => provide return key type example 'next' or 'done'
BorderColor => provide BorderColor for the text input
BorderFocusColor => provide BorderFocusColor for the text input when it receives focus
style => styles object(optional) example {fontFamily:'Ubuntu',fontSize:18,fontWeight:'500'}

```

# Example

```
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';

import {
  THEME_BORDER_COLOR,
  THEME_BORDER_ONFOCUS_COLOR,
  THEME_COLOR,
  THEME_TITTLE_COLOR,
} from '../utils/Colors';

import {ASPTextInput} from 'asp-react-native-custom-controls';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const handleSubmitEditing = ref => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/banner.jpg')}
        style={styles.banner}
      />

      <View style={styles.card}>
        <ScrollView>
          <Text style={styles.title}>Register</Text>
          <ASPTextInput
            inputRef={nameRef}
            placeholder={'Enter Name'}
            value={name}
            onChangeText={val => {
              setName(val);
            }}
            style={textStyle}
            BorderColor={THEME_BORDER_COLOR}
            BorderFocusColor={THEME_BORDER_ONFOCUS_COLOR}
            onSubmitEditing={() => handleSubmitEditing(emailRef)}
          />
          <ASPTextInput
            inputRef={emailRef}
            placeholder={'Enter Email'}
            value={email}
            onChangeText={val => {
              setEmail(val);
            }}
            type={'email-address'}
            style={textStyle}
            BorderColor={THEME_BORDER_COLOR}
            BorderFocusColor={THEME_BORDER_ONFOCUS_COLOR}
            onSubmitEditing={() => handleSubmitEditing(mobileRef)}
          />
          <ASPTextInput
            inputRef={mobileRef}
            placeholder={'Enter Mobile'}
            value={mobile}
            onChangeText={val => {
              setMobile(val);
            }}
            type={'number-pad'}
            style={textStyle}
            returnKeyType={'next'}
            BorderColor={THEME_BORDER_COLOR}
            BorderFocusColor={THEME_BORDER_ONFOCUS_COLOR}
            onSubmitEditing={() => handleSubmitEditing(passwordRef)}
          />
          <ASPTextInput
            inputRef={passwordRef}
            placeholder={'Enter Password'}
            value={password}
            onChangeText={val => {
              setPassword(val);
            }}
            style={textStyle}
            BorderColor={THEME_BORDER_COLOR}
            BorderFocusColor={THEME_BORDER_ONFOCUS_COLOR}
            onSubmitEditing={() => handleSubmitEditing(confirmPasswordRef)}
          />
          <ASPTextInput
            inputRef={confirmPasswordRef}
            placeholder={'Enter Confirm Password'}
            value={confirmPassword}
            onChangeText={val => {
              setConfirmPassword(val);
            }}
            style={textStyle}
            BorderColor={THEME_BORDER_COLOR}
            BorderFocusColor={THEME_BORDER_ONFOCUS_COLOR}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const textStyle = {
  fontFamily: 'Poppins',
  fontSize: hp('1.8%'),
  fontWeight: '500',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: Platform.OS === 'ios' ? hp('35%') : hp('38%'),
    // height: verticalScale(195),
    resizeMode: 'cover',
  },
  card: {
    width: '100%',
    alignSelf: 'center',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    elevation: 5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    top: Platform.OS === 'ios' ? hp('33.5%') : hp('32%'),
  },
  title: {
    alignSelf: 'center',
    fontFamily: 'Ubuntu',
    fontSize: hp('2.5%'),
    // fontSize: scaleFontSize(25),
    fontWeight: Platform.OS === 'ios' ? '600' : '700',
    color: THEME_TITTLE_COLOR,
    marginTop: 20,
  },
});

export default Signup;

```

# Note

scaling.js utility located inside node_modules/asp-react-native-custom-controls/src/
is optional. It is a scaling utility for different screen sizes of ios and android phones.
You can use it for better responsive designs
