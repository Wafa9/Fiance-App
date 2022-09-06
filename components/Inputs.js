import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import globalText from '../styles/globalText';

const Inputs = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }

    if (focused) {
      return colors.green;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={globalText.h2}>
      {label && <Text style={globalText.h3}>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 42,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 5,
    
        marginTop: 5,
      },
    
      inputContainer: {
        paddingVertical: 12,
      },
    
      textInput: {
        flex: 1,
        width: '100%',
        fontFamily: "LightItalic",

      },
    
      error: {
        color: colors.danger,
        paddingTop: 4,
        fontSize: 12,
      },
})

export default Inputs;