import { Text, SafeAreaView, View, StyleSheet, FlatList, Alert } from 'react-native';
import Button from './components/Button';
import React, { useState, useEffect } from 'react';

export default function Basic1() {
  const [data, setData] = useState([
    { id: '1', title: 'Mục 1' },
    { id: '2', title: 'Mục 2' },
    { id: '3', title: 'Mục 3' },
    { id: '4', title: 'Mục 4' },
    { id: '5', title: 'Mục 5' },
    { id: '6', title: 'Mục 6' },
    { id: '7', title: 'Mục 7' },
    { id: '8', title: 'Mục 8' },
    { id: '9', title: 'Mục 9' },
    { id: '10', title: 'Mục 10' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const handlePress = (item) => {
    Alert.alert('Thông báo', `Bạn đã chọn: ${item.title}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Ghi chú nek</Text>
      <Button
        title="Thêm"
        backgroundColor="#CDC1FF"
        color="#FFFFFF"
        width={250}
        height={50}
      />
      <Button
        title="Sửa"
        backgroundColor="#CDC1FF"
        color="#FFFFFF"
        width={250}
        height={50}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Button
              title="Xóa"
              onPress={() => handleDelete(id)}
              backgroundColor="#FF6F61"
              color="#FFFFFF"
              width={80}
              height={50}
            />
          </View>
        )}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flatList: {
    width: 240, // Đặt chiều rộng giống với 3 nút
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    width: '100%', 
  },
  title: {
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
});
