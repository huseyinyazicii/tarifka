import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './MealDetail.style';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import MealDetailCard from '../../components/MealDetailCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const MealDetail = ({route}) => {
  const {loading, error, data} = useFetch(`${Config.MEAL_DETAIL}${route.params.id}`);

  const renderDetail = ({item}) => <MealDetailCard meal={item} />
  const renderKey = (item) => item.idMeal.toString();

  if(loading){return <Loading />}
  if(error){return <Error />}

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} keyExtractor={renderKey} renderItem={renderDetail} />
    </View>
  );
};

export default MealDetail;