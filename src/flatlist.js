/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {List, ListItem} from 'react-native-elements';

export default class FlatListDemo extends Component {
  constructor(props) {
    console.disableYellowBox = true;
    super(props);

    this.state = {
      loading: false,
      data: [
        {
          name: 'Dr.Sunil Joshi',
          hospital: 'Jaya Hospital',
        },
        {
          name: 'Dr. Hanish Joshi',
          hospital: 'Jaya Hospital',
        },
        {
          name: 'Dr.sujith ',
          hospital: 'Jaya Hospital',
        },
        {
          name: 'Dr.Havya Kavi',
          hospital: 'Kavya Hospital',
        },
        {
          name: 'Dr.Sachin shavi',
          hospital: 'One Hospial',
        },
        {
          name: 'Dr.Varun Bhat',
          hospital: 'Chethan Hospital',
        },
        {
          name: 'Dr.Sunil Joshi',
          hospital: 'Jaya ospital',
        },
        {
          name: 'Dr.Sunil Shetty',
          hospital: 'Jaya Hospitl',
        },
        {
          name: 'Dr.Sujeth Rai',
          hospital: 'Ja Hospital',
        },
        {
          name: 'Dr.Sunil Joshi',
          hospital: 'Jaa Hospital',
        },
      ],
    };
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <List
          containerStyle={{
            borderTopWidth: 0,
            borderBottomWidth: 0,
            marginTop: 0,
          }}>
          <FlatList
            data={this.state.data}
            style={styles.ll}
            renderItem={({item}) => (
              <ListItem
                titleStyle={styles.kk}
                title={item.name}
                subtitle={item.hospital}
                subtitleStyle={styles.jj}
                ItemSeparatorComponent={this.renderSeparator}
                keyExtractor={item.hospital}
              />
            )}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ll: {
    // Setting up View inside content in Vertically center.
    padding: 10,
  },
  kk: {
    fontSize: 20,
  },
  jj: {
    fontSize: 12,
  },
});
