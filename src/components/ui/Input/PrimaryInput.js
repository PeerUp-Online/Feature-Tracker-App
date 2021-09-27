import React from "react";
import { TextInput } from "react-native-paper";

const PrimaryInput = (props) => {
  const [text, setText] = React.useState("");
  return (
    <TextInput
      mode="outlined"
      label={props.label}
      value={text}
      onChangeText={(char) => setText(char)}
    />
  );
};

export default PrimaryInput;
