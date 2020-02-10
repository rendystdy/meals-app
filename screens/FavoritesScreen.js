import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';

import MealList from '../components/MealList';
import {HeaderButtons, Item, HiddenItem} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No Favorite Meals found. Start adding some !</DefaultText>
      </View>
    );
  }

  return (
    <MealList listData={favMeals} onNavigationHandler={props.navigation} />
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

FavoritesScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Your Favorite',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
        <HiddenItem
          title="hidden in overflow menu"
          // eslint-disable-next-line no-alert
          onPress={() => alert('hidden in overflow')}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
