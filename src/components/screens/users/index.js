import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import axios from 'axios';

import styles from './styles';
import colors from '../../styles/colors';

const Users = (props) => {

      const [users, setUsers] = useState([]);

      useEffect(()=>{
        fetchUsers();
      },[]);
    
      const fetchUsers = async () => {
       const { data } = await axios.get("https://reqres.in/api/users?page=2");
       setUsers(data.data);
      }
    

    const Header = () => (
      <Appbar.Header style={{backgroundColor: colors.primaryDark}}>
          <Appbar.Action
        icon="menu"
        onPress={() => props.navigation.toggleDrawer()}
      />
        <Appbar.Content title="Users" />
      </Appbar.Header>
    );

    return (
      <>
          {Header()}
          <View style={styles.container}>
          <FlatList style={styles.list}
              contentContainerStyle={styles.listContainer}
              data={users}
              horizontal={false}
              numColumns={2}
              keyExtractor= {(item) => {
              return item.id;
              }}
              renderItem={({item}) => {
              return (
                  <TouchableOpacity style={styles.card}>
                  <Image style={styles.userImage} source={{ uri: item.avatar }}/>
                  <View style={styles.cardFooter}>
                      <View style={{alignItems:"center", justifyContent:"center"}}>
                      <Text style={styles.name}>{item.first_name} {item.first_name}</Text>
                     
                      </View>
                  </View>
                  </TouchableOpacity>
              )
              }}
          />
          </View>
    </>
    );
  
}
 
export default Users;
            