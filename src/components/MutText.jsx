import { View, Text } from '@tarojs/components'
import { Component } from 'react'
import Taro from '@tarojs/taro'

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {
    console.log('测试createSelectorQuery.in方法')
    setTimeout(() => {
      const query = Taro.createSelectorQuery().in(this)
      console.log('componentDidMount', query)

      query
        .selectAll('.text')
        .boundingClientRect(function (res) {
          console.log('text', res)
        })
        .exec()
    }, 500)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <View>测试createSelectorQuery.in方法</View>
        <View className='text'>
          <Text className='text'>
            哈哈哈哈哈哈哈哈哈哈
            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
          </Text>
        </View>
      </View>
    )
  }
}
