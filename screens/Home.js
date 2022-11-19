import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {TextInputView} from './components';

function HomeScreen() {
  const foodData = [
    {
      key: 1,
      url: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      title: 'Hamburger',
    },
    {
      key: 2,
      url: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      title: 'Pizza',
    },
    {
      key: 3,
      url: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      title: 'Noodles',
    },
    {
      key: 4,
      url: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      title: 'Meat',
    },
    {
      key: 5,
      url: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      title: 'Vegetables',
    },
    {
      key: 6,
      url: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      title: 'Dessert',
    },
    {
      key: 7,
      url: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      title: 'Drink',
    },
    {
      key: 8,
      url: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
      title: 'More',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, padding: 15}}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Image
                source={{
                  uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 15,
              }}>
              <Text style={{color: 'lightgrey'}}>Deliver to</Text>
              <Text style={{fontSize: 18}}>Time Square</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  borderRadius: 50,
                  height: 40,
                  width: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 3,
                }}>
                <Text>B</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  borderRadius: 50,
                  height: 40,
                  width: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 3,
                }}>
                <Text>B</Text>
              </View>
            </View>
          </View>
          <View style={{paddingVertical: 15}}>
            <TextInputView
              style={{
                backgroundColor: '#f9f9f9',
                borderRadius: 15,
                paddingVertical: 20,
                paddingHorizontal: 30,
              }}
              placeholder="What are you craving?"
            />
          </View>
        </View>
        <View style={{marginBottom: 15}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 20,
            }}>
            <View>
              <Text style={{fontSize: 18}}>Special Offers</Text>
            </View>
            <View>
              <Text style={{color: '#1aac4b'}}>See All</Text>
            </View>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
              }}
              style={{
                flex: 1,
                width: '100%',
                height: 170,
                borderRadius: 30,
              }}
            />
          </View>
        </View>
        <View>
          <FlatList
            data={foodData}
            renderItem={({item}) => (
              <View style={{flex: 1, alignItems: 'center', marginBottom: 15}}>
                <Image
                  source={{
                    uri: item.url,
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    marginBottom: 5,
                  }}
                />
                <Text>
                  {item?.title?.length > 8
                    ? item.title.substring(0, 9 - 3) + '...'
                    : item.title}
                </Text>
              </View>
            )}
            numColumns={4}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
