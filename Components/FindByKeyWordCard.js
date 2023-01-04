import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import LocationIcon from '../assets/LocationIcon.png'
import Edit from '../assets/EditIcon.png'
import ItemCard from './ItemCard'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../Redux/ItemSlider'

const FindByKeyWordCard = () => {
  const itemData=useSelector(state=>state.item);
  const dispatch=useDispatch();

  const handleDelete=(key)=>{
    dispatch(
      deleteItem({key:key})
    )
  }

  return (
    <View style={styles.card}>
        <View style={styles.header}>  
            <Text style={styles.boxText}>Box No.3</Text>
            <View style={styles.locaionView}>
            <Image source={LocationIcon} style={styles.locationImage}/>
            <Text style={styles.loactionText}>Rawalpindi, Punjab</Text>
            </View>
        </View>
        <View style={{marginLeft:-10}}>
            {/* <ItemCard LinerStart={[0,0]} LinerEnd={[1,1]} LinerLocation={[0,1]} linerColors={['#F3EEF7','#f3eef766']} backGroundImageStyle={styles.backgroundImageItem} productImage={Product} productImageStyle={styles.carImage} rightImage={Edit} rightImageStyle={styles.editImage} />                */}
            {/* <ItemCard LinerStart={[0,0]} LinerEnd={[1,1]} LinerLocation={[0,1]} linerColors={['#F3EEF7','#f3eef766']} backGroundImageStyle={styles.backgroundImageItem} productImage={Car} productImageStyle={styles.carImage} rightImage={Edit} rightImageStyle={styles.editImage} />                */}
        {itemData.map(item=>
          <Pressable onPress={()=>handleDelete(item.key)}>
           <ItemCard keyWord={item.keyWord} LinerStart={[0,0]} LinerEnd={[1,1]} LinerLocation={[0,1]} linerColors={['#F3EEF7','#f3eef766']} backGroundImageStyle={styles.backgroundImageItem} productImage={item.img} productImageStyle={styles.carImage} rightImage={Edit} rightImageStyle={styles.editImage} />     
          </Pressable>
          )}
        </View>               
    </View>
  )
}

export default FindByKeyWordCard

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        width:359,
        borderRadius:10,
        marginTop:27,
        marginBottom:10,
      },
      header:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:23,
        marginRight:23,
        marginTop:17,
      },
      boxText:{
        fontWeight:'700',
        fontSize:14,
        lineHeight:16,
        fontStyle:"normal",
      },    
      locaionView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
      },
      locationImage:{
        width:13,
        height:16,
      },   
      loactionText:{
        fontWeight:'400',
        fontSize:12,
        lineHeight:14,
        fontStyle:'normal',
        color:'rgba(0, 0, 0, 0.5)',
      },
      backgroundImageItem:{
        width:334,
        height:96, 
        borderRadius:10
      },
      carImage:{
        width:76,
        height:75,
        borderRadius:10,
      },
      editImage:{
        width:30,
        height:30,
      }

})