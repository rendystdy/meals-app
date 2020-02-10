import React from 'react';
import {FlatList} from 'react-native';
import {HeaderButtons, Item, HiddenItem} from 'react-navigation-header-buttons';

import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        id={itemData.item.id}
        onSelect={() =>
          props.navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          })
        }
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meals Categories',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
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

export default CategoriesScreen;
