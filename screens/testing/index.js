import { useSelector } from "react-redux";
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
const globalVariable = "I am a global variable (in this screen file).";

const App = () => {
  const {
    entities: Users
  } = useSelector(state => state.Users);
  return <SafeAreaView style={styles.container}>
    <Text>There are {Users.length} users.</Text>
      <FlatList data={Users} renderItem={({
      item
    }) => <View style={styles.item}>
            <View style={styles.messageContainer}>
              <Text style={styles.title}>User Name</Text>
              <Text style={styles.message}>User Message</Text>
            </View>
          </View>} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: 'white',
    borderColor: '#F7F7F7',
    borderWidth: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 18
  },
  message: {
    color: '#9B9B9B',
    width: '100%',
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    fontSize: 12
  },
  messageContainer: {
    marginLeft: 10,
    width: '100%'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white'
  }
});
export default App;