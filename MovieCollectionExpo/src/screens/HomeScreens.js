import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {movieData} from '../../data/MovieData';
import {ShowMovie} from '../components/MovieComponent';
import {ButtonComponent} from '../components/ButtonComponent';

const HomeScreen = props => {
  const {navigation} = props;

  const [recommended, setRecommended] = useState([]);
  const [allRecommended, setAllRRecommended] = useState([]);

  const [mostViewed, setMostViewed] = useState([]);
  const [allMostViewed, setAllMostViewed] = useState([]);

  const compareRating = (a, b) => {
    const ratingA = a.rating;
    const ratingB = b.rating;
    if (ratingA > ratingB) {
      return -1;
    } else if (ratingA < ratingB) {
      return 1;
    } else {
      return 0;
    }
  };
  const compareViewers = (a, b) => {
    const ratingA = a.viewers;
    const ratingB = b.viewers;
    if (ratingA > ratingB) {
      return -1;
    } else if (ratingA < ratingB) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const sortedRecommended = [...movieData].sort(compareRating);
    setAllRRecommended(sortedRecommended);

    const threeRecommended = [];
    for (let i = 0; i < 3; i++) {
      threeRecommended.push(sortedRecommended[i]);
    }
    setRecommended(threeRecommended);

    const sortedViewers = [...movieData].sort(compareViewers);
    setAllMostViewed(sortedViewers);

    const threeMostViewed = [];
    for (let i = 0; i < 3; i++) {
      threeMostViewed.push(sortedViewers[i]);
    }
    setMostViewed(threeMostViewed);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={recommended}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
        ListEmptyComponent={
          <View style={{alignItems: 'center'}}>
            <Text>No Items In This Category</Text>
          </View>
        }
        ListHeaderComponent={
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text>Most Viewed</Text>
              <View style={styles.seeAllContainer}>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
              horizontal
              contentContainerStyle={{flex: mostViewed.length == 0 ? 1 : null}}
              data={mostViewed}
              keyExtractor={item => item.id}
              ListEmptyComponent={
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <Text>No Items In This Category</Text>
                </View>
              }
              renderItem={({item}) => {
                return (
                  <ShowMovie
                    image={{uri: item.imageLink}}
                    title={item.title}
                    viewers={item.viewers}
                  />
                );
              }}
            />
            <Text>Most Ratings</Text>
          </View>
        }
        renderItem={({item}) => {
          return (
            <View style={styles.dataContainer}>
              <Image style={styles.movieImage} source={{uri: item.imageLink}} />

              <View style={styles.movieDescriptionContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.yearContainer}>
                  <ButtonComponent
                    onPress={() => navigation.navigate('DetailMovie')}
                  />
                </View>
              </View>
              {item.rating == 5 ? (
                <Image
                  style={styles.imageRating}
                  source={require('../../assets/images/five-stars.png')}
                />
              ) : item.rating == 4 ? (
                <Image
                  style={styles.imageRating}
                  source={require('../../assets/images/four-stars.png')}
                />
              ) : item.rating == 3 ? (
                <Image
                  style={styles.imageRating}
                  source={require('../../assets/images/three-stars.png')}
                />
              ) : item.rating == 2 ? (
                <Image
                  style={styles.imageRating}
                  source={require('../../assets/images/two-stars.png')}
                />
              ) : (
                <Image
                  style={styles.imageRating}
                  source={require('../../assets/images/star.png')}
                />
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  seeAllContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  seeAllText: {
    color: '#009688',
    textDecorationLine: 'underline',
  },
  imageRating: {width: 100, height: 20},
  flatListContainer: {padding: 8},
  movieImage: {width: 130, height: 200, borderRadius: 10},
  dataContainer: {
    margin: 8,
    borderColor: '#96ceb4',
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  movieDescriptionContainer: {flex: 1, justifyContent: 'center', marginLeft: 8},
  yearContainer: {marginTop: 9, marginBottom: 8},
});

export default HomeScreen;
