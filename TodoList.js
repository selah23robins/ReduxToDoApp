import React from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => deleteTodo(item.id)}
        >
          <View style={styles.item}>
            <Text>{item.text}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderWidth: 1,
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(
  mapStateToProps,
  { deleteTodo }
)(TodoList);
