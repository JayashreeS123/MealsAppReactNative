import { useLayoutEffect } from "react";
import { Text, View, Image , StyleSheet, ScrollView, Button} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";


function MealDetailScreen({ route, navigation }){
    const mealId = route.params.mealId;
    
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler(){
        console.log('pressed');
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton 
                        icon='star' 
                        color='white' 
                        onPress={headerButtonPressHandler}
                    />
                );
            },
        })
    },[navigation,headerButtonPressHandler]);

    return(
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    {/* <View style={styles.subtitleContainer}>
                        <Text style={styles.subTitle}>Ingredients</Text>
                    </View> */}
                    <List data={selectedMeal.ingredients}></List>
                    {/* {selectedMeal.ingredients.map((ingredient) => (
                        <Text key={ingredient}>{ingredient}</Text>
                    ))} */}
                    <Subtitle>Steps</Subtitle>
                    {/* <View style={styles.subtitleContainer}>
                        <Text style={styles.subTitle}>Steps</Text>
                    </View> */}
                    <List data={selectedMeal.steps}></List>
                    {/* {selectedMeal.steps.map((step) => (
                        <Text key={step}>{step}</Text>
                    ))} */}
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    image:{
        width:'100%',
        height: 350
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white'
    },
    detailText: {
        color:'white'
    },
    listOuterContainer:{
        alignItems:'center'
    },
    listContainer:{
        width:'80%'
    }
    // ,
    // subTitle:{
    //     // color:'white',
    //     color:'#e2b497',
    //     fontSize:18,
    //     fontWeight:'bold',
    //     textAlign:'center'
    // },
    // subtitleContainer:{
    //     padding:6,
    //     margin:4,
    //     marginHorizontal: 24,
    //     marginVertical:4,
    //     borderBottomColor:'#e2b497',
    //     borderBottomWidth:2,
    // }
})  