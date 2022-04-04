import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './Categories.style';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/CategoryCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
  const {data, error, loading} = useFetch(Config.CATEGORIES);

  const renderCategory = ({item}) => <CategoryCard category={item} navigation={navigation} />
  const keyCategory = (item) => item.idCategory.toString();

  if(loading){return <Loading />}
  if(error){return <Error />}

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} keyExtractor={keyCategory} />
    </View>
  );
};

export default Categories;