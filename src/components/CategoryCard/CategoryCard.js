import React from 'react';
import { TouchableWithoutFeedback, View, Text, Image } from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({category, navigation}) => {

    const goToMeals = () => {
        navigation.navigate('Meals', {categoryName: category.strCategory});
    }

    return (
        <TouchableWithoutFeedback onPress={goToMeals}>
            <View  style={styles.container}>
                <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
                <Text style={styles.text}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CategoryCard;