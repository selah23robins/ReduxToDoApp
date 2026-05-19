import React, { useState } from "react";

import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    addTodo(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a todo"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      <Button title="Add Todo" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default connect(null, { addTodo })(AddTodo);
