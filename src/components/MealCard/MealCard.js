import React from 'react';
import { TouchableWithoutFeedback, ImageBackground, Text } from 'react-native';
import styles from './MealCard.style';

const MealCard = ({meal, navigation}) => {

    const goToMealDetail = () => {
        navigation.navigate('MealDetail', {id: meal.idMeal});
    }

    return (
        <TouchableWithoutFeedback onPress={goToMealDetail}>
            <ImageBackground style={styles.background} resizeMode="cover" source={{uri:meal.strMealThumb}}>
                <Text style={styles.text}>{meal.strMeal}</Text>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
};

export default MealCard;