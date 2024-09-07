import {View, Text} from 'react-native';
import React from 'react';
import {ShowMovie} from '../components/MovieComponent';

const MostViewedScreens = props => {
  const {route} = props;
  const sortedMostViewed = route.params.allMostViewed;
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.mainDataContainer}
        data={sortedMostViewed}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ShowMovie />;
        }}
      />
    </View>
  );
};

export default MostViewedScreens;
