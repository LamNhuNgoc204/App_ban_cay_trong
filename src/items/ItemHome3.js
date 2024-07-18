import { View, Text, Image } from 'react-native'
import React from 'react'
import AppStyles from '../styles/AppStyles'
import HomeStyles from '../styles/HomeStyles'

const ItemHome3 = () => {
  return (
    <View style={[HomeStyles.viewitem3]}>
      <Text style={HomeStyles.text1}>Combo cham soc (moi)</Text>
      <View style={[AppStyles.row, AppStyles.aligncenter, HomeStyles.viewbgItem]}>
        <View style={HomeStyles.viewTextImtem}>
          <Text style={HomeStyles.text2}>Lemon Balm Grow Kit</Text>
          <Text style={HomeStyles.text3} numberOfLines={3}>Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh đấu,...</Text>
        </View>
        <Image style={HomeStyles.img1} source={require('../assets/images/grow-kit.png')} />
      </View>
    </View>
  )
}

export default ItemHome3