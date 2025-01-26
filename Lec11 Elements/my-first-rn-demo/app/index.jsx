import { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

import { Button as BtnElm, Icon } from '@rneui/themed';

export default function Index() {
  const [counter, setCounter] = useState(0);
  const [text, onChangeText] = useState('Useless Text');

  const btnAddOne = () => {
    setCounter(7);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: 'red', fontSize: 40 }}>ruppin8</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="useless placeholder"
      />
      <Text style={{ color: 'green', fontSize: 50 }}>text={text}</Text>
      <Button title="Add One" onPress={btnAddOne} />
      <Text style={{ color: 'red', fontSize: 50 }}>counter={counter}</Text>

      <BtnElm radius={"sm"} type="solid" color={"success"}>
        Save
        <Icon name="save" color="white" />
      </BtnElm>

      <View style={styles.container}>
        <Text style={styles.title}>React Native</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


