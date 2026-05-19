import React from "react";
import { Provider } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import store from "./redux/store";

import AddTodo from "./screens/AddTodo";
import TodoList from "./screens/TodoList";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Redux To-Do App
        </Text>

        <AddTodo />
        <TodoList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 50,
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
  },
});