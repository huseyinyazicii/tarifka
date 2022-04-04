import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './MealDetailCard.style';

const MealDetailCard = ({meal}) => {
  const goToYoutube = () => Linking.openURL(meal.strYoutube);

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: meal.strMealThumb}}/>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.country}>{meal.strArea}</Text>
        <View style={styles.line} />
        <Text style={styles.description}>{meal.strInstructions}</Text>
        <TouchableOpacity style={styles.button} onPress={goToYoutube}>
            <Text style={styles.button_text}>Watch On Youtube</Text>
        </TouchableOpacity>
    </View>
  );
};

export default MealDetailCard;