# aspCustomControls

ASP Custom Controls for React Native

# Installing Package

```
npm i asp-react-native-custom-controls
```

# Installing Dependencies

```
npm i react-native-device-info
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

```

# Example

```
import React, {useEffect, useRef, useState} from 'react';
import {View,Text,StyleSheet,SafeAreaView,Image} from 'react-native';
import {scaleFontSize,scaleHeight,verticalScale} from './node_modules/asp-react-native-custom-controls/src/scaling'
import {THEME_BORDER_COLOR,THEME_BORDER_ONFOCUS_COLOR,THEME_COLOR} from '../utils/Colors';
import {ASPTextInput} from 'asp-react-native-custom-controls';

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
        <Text style={styles.title}>Signup</Text>
        <ASPTextInput
            inputRef={nameRef}
            placeholder={'Enter Name'}
            value={name}
            onChangeText={val => {
            setName(val);
            }}
            BorderColor={THEME_BORDER_COLOR}
            BorderFocusColor={THEME_BORDER_ONFOCUS_COLOR}
            onSubmitEditing={() => handleSubmitEditing(emailRef)}
        />
    </View>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
},
banner: {
    width: '100%',
    height: verticalScale(200),
    resizeMode: 'stretch',
},
card: {
    width: '97%',
    alignSelf: 'center',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    elevation: 5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    top: scaleHeight(),
},
title: {
    alignSelf: 'center',
    fontSize: scaleFontSize(25),
    fontWeight: '500',
    color: THEME_COLOR,
    marginTop: 20,
},
});

export default Signup;
```

# Note

scaling.js utility located inside node_modules/asp-react-native-custom-controls/src/
is optional. It is a scaling utility for different screen sizes of ios and android phones.
You can use it for better responsive designs
