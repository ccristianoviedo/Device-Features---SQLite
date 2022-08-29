import React, {useEffect} from 'react';
import { FlatList } from 'react-native';
import BreadItem from '../components/breadItem'

import {useSelector, useDispatch} from 'react-redux'

import {filteredBread, selectBread} from '../store/actions/bread.action'


export default function CategoryBreadScreen({navigation}) {

    const dispatch = useDispatch();

    const categoryBreads = useSelector(store=> store.breads.filteredBread)
    
    const category= useSelector(store=>store.categories.selected);

    useEffect(() => {

      dispatch(filteredBread(category.id));

    }, []);
    
    const handlerSelected = (item) =>{
      dispatch(selectBread(item.id))
        navigation.navigate('Details',{
            bread: item
        })
    }

    const renderItemBread = ({ item }) =>(<BreadItem item={item} onSelected={handlerSelected}/>)

  return (
    <FlatList
      data={categoryBreads}
      keyExtractor={(item)=>item.id}
      renderItem={renderItemBread}  
    />
  );
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
