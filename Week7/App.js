import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Alert } from 'react-native';
import Button from './components/Button';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleAdd = () => {
    if (!inputValue) return;
    setData([...data, { id: data.length + 1, title: inputValue }]);
    setInputValue('');
  };

  const handleEdit = (index) => {
    setInputValue(data[index].title);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    if (editIndex === null) return;
    const updatedData = data.map((item, index) =>
      index === editIndex ? { ...item, title: inputValue } : item
    );
    setData(updatedData);
    setInputValue('');
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Input title..."
        value={inputValue}
        onChangeText={setInputValue}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10, borderColor: '#CDC1FF', borderRadius: 8}}
      />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button
          title="Add"
          onPress={handleAdd}
          backgroundColor="#CDC1FF"
          color="#FFFFFF"
          width={140}
          height={40}
        />
        <Button
          title="Update"
          onPress={handleUpdate}
          backgroundColor="#CDC1FF"
          color="#FFFFFF"
          width={140}
          height={40}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
            <Text>{item.title}</Text>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Button
                title="Edit"
                onPress={() => handleEdit(index)} 
                backgroundColor="#CDC1FF"
                color="#FFFFFF"
                width={40}
                height={40}
              />
              <Button
                title="Delete"
                onPress={() => handleDelete(index)} 
                backgroundColor="#CDC1FF"
                color="#FFFFFF"
                width={50}
                height={40}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default App;
