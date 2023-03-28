import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import MutText from '../../components/MutText'

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <View>以下嵌套文本百度无法显示</View>
        <Text
          onClick={(e) => {
            // console.log('第一层点击');
          }}
        >
          第一层
          <Text
            style='background:blue'
            onClick={(e) => {
              // console.log('第二层点击')
            }}
          >
            第二层
            <Text
              style='background:red'
              onClick={(e) => {
                console.log('第三层点击')
              }}
            >
              第三层
              <Text
                onClick={(e) => {
                  console.log('第四层点击')
                }}
              >
                第四层{' '}
                <Text
                  onClick={(e) => {
                    console.log('点击')
                  }}
                >
                  第五层
                </Text>
              </Text>
            </Text>
          </Text>
        </Text>
        <MutText></MutText>
      </View>
    )
  }
}
