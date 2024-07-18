import { Pressable, Text } from 'react-native'
import React, { useState } from 'react'
import dms from '../styles/DanhMucStyles'

const ItemDanhmuc = ({ data, index }) => {
  const [selected, setSelected] = useState(0);
  console.log(selected);

  return (
    <Pressable style={dms.press} onPress={() => { setSelected(index) }}>
      <Text style={dms.text}>{data.name}</Text>
    </Pressable>
  )
}

export default ItemDanhmuc
