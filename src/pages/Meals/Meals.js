import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './Meals.style';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import MealCard from '../../components/MealCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Meals = ({route, navigation}) => {
  const {data, error, loading} = useFetch(`${Config.CATEGORY_FILTER}${route.params.categoryName}`);

  const renderMeals = ({item}) => <MealCard meal={item} navigation={navigation} />
  const keyMeals = (item) => item.idMeal.toString();

  if(loading){return <Loading />}
  if(error){return <Error />}

  return (
    <View style={styles.container}>
        <FlatList data={data.meals} renderItem={renderMeals} keyExtractor={keyMeals} />
    </View>
  );
};

export default Meals;