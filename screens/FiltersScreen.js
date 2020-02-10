/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Switch, StyleSheet, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useDispatch, useSelector} from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import {setFilters} from '../store/actions/meals';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onValueChangeHandler}
        thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
        trackColor={{true: Colors.primary}}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const {
    navigation: {setParams},
  } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const dispatch = useDispatch();
  const filteredMeals = useSelector(state => state.meals.filteredMeals);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree, dispatch]);

  useEffect(() => {
    setParams({save: saveFilters});
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onValueChangeHandler={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onValueChangeHandler={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onValueChangeHandler={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onValueChangeHandler={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Filters Meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navigation.getParam('save')}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
});

export default FiltersScreen;
