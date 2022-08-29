import React from 'react';
import {FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import GridItem from '../components/gridItem'; 
import {selectCategory} from '../store/actions/category.action'


export default function CategoryScreen({ navigation }) {

    const categories = useSelector(store=>store.categories.categories)

    const dispatch = useDispatch();

    const handleSelectedCategory = (item) =>{
      dispatch(selectCategory(item.id))    
      navigation.navigate('Products', {
        name: item.title,
      }); 

        
    }
    const renderGridItem=({ item })=>(
      <GridItem item={item} onSelected={handleSelectedCategory}/>
    )
    
 return (    
    <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderGridItem}
        numColumns={2}
    />
 ) 
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
