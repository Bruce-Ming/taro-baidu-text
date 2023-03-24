import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <View>
        以下嵌套文本百度无法显示
        </View>
        <Text>
          第一层
          <Text>
          第二层
            <Text>
            第三层
            <Text>
                第四层 <Text>第五层</Text>
              </Text>
            </Text>
          </Text>
        </Text>
      </View>
    )
  }
}
