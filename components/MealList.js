import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import MealItem from './MealItem';

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.find(meal => meal.id === itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() =>
          props.onNavigationHandler.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite,
            },
          })
        }
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  listContainer: {
    width: '100%',
  },
});

export default MealList;
