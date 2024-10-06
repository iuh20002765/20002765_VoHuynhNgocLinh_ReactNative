import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    image: require('./assets/ca_nau_lau.png'), 
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Shop LTD Food',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    image: require('./assets/xa_can_cau.png'),
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: require('./assets/lanh_dao_gian_don.png'),
  },
  {
    id: '6',
    title: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: require('./assets/hieu_long_con_tre.png'),
  },
];


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};
const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Menu Screen</Text>
    </View>
  );
};

function ChatStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Chat"
        component={ChatScreen} 
        options={{
          title: 'Chat',
          headerStyle: {
            backgroundColor: '#1BA9FF',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
              <Icon name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('Cart pressed!')} style={styles.headerButton}>
              <Icon name="cart-outline" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Menu') {
              iconName = 'menu-outline'; 
            } else if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Chat') {
              iconName = 'chatbox-ellipses-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1BA9FF',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const ChatScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.shop}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  headerText: {
    fontSize: 16,
    marginVertical: 10,
    color: 'black',
    textAlign: 'left',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  shop: {
    fontSize: 12,
    color: '#666',
  },
  chatButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});