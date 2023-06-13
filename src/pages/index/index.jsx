import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import MutText from '../../components/MutText'

let RichText = `<p style="text-align: justify;"><strong>学员背景</strong></p>↵<p style="text-align: justify;">张大暖</p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;"><strong>本科背景</strong><br />浙江传媒学院 法汉双语播音<br />GPA:86 雅思:6.5</p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;"><strong>录取学校（2021年秋季入学）</strong><br /><a href="http://www.compassedu.hk/majr_1843" target="_blank" rel="noopener"><span style="text-decoration: underline; color: #1890ff;">香港浸会大学 传媒管理</span></a><br />申请时间：2021.04.21<br />录取时间：2021.04.30</p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;"><strong><span class="h1">一、一波三折的申请</span></strong></p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;">开头简单概括一下：我的申请跨了2年，<strong>第一年英港联申</strong>的时候出于某些原因我中途放弃了香港，紧接着Gap一年成为了打工人，<strong>第二年</strong>申请调整了专业方向而且<strong>只选择了香港</strong>，最终拿到了心仪项目的录取。如今写这篇文章的时候，我还坐在公司的工位上，度过入学港校前的最后一段时光。<br /><br />回顾我这个颇为漫长的申请季，可以用几个&ldquo;坎&rdquo;来形容。</p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;"><strong><span style="background-color: #8bc7ff;">01 时事政治坎&mdash;&mdash;放弃选择香港</span></strong></p>↵<p style="text-align: justify;"><br />其实早在大二的时候，我就确定了自己会选择留学，但是还没考虑好去哪里。<br /><br />受雅思考试和过往旅居经历的影响，一开始我选择了英国。随着实习经历的不断积累，我慢慢认识到自己未来不会在国外工作和生活，那也可以选一个离家近点儿的地方，恰好身边有在香港读书的前辈，听他描述的留学经历让我心生向往。所以，第一年留学我选择的是【港英联申】。<br /><br />当时从传媒本科走出来的我，一心想尝试更多职业发展的可能，除了本专业外，还选择了对跨申友好的教育学类专业。然而，2019年的香港经历了一次震惊大陆的暴动，那时候香港社会的安定程度，让人很难放心地去留学。无奈放弃了香港的申请后，我也拿到了不错的英国院校的offer，专业是【国际教育】。</p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;"><strong><span style="background-color: #8bc7ff;">02 疫情担忧坎&mdash;&mdash;我GAP了一年</span></strong></p>↵<p style="text-align: justify;"><br />2020年，当时的中国，后来的世界，迎来一场新冠疫情的重大挑战。整个1月和2月，我们都待在家里不能出门。<br /><br />在家感到太无聊的时候，我投递了很多家公司想找份实习，让自己充实起来。直到2月25号的下午，我收到了喜马拉雅的offer，3月中旬，我带着全套防护装备飞去了上海，这一去就是一年多。<br /><br />入职以后，<strong>我是公司内容付费的实习生，什么都做</strong>。从频道运营、专辑制作人到主播经济，把部门里所有前辈的工作都跟了一遍后，主管向我抛出了橄榄枝：如果你想转正，做出点业绩来。说来也是好运垂怜，我出色地完成了一个项目，<strong>最终得以转岗到公司里唯一的内容工作室做制作人</strong>。<br /><br />记得那个下午，HR发消息给我说：&ldquo;你可以转正了，记得准备答辩&rdquo;，我在公司楼下和家人打了一通电话。考虑到英国疫情持续失控和工作机会的难得，我决定先Gap一年，入职工作。<br /><br />虽然留学最终未能成行，但我也不后悔。事实证明这份工作后来的确让我改变很多，也思考了很多。</p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;"><strong><span style="background-color: #8bc7ff;">03 工作调整坎&mdash;&mdash;重新确定职业方向</span></strong></p>↵<p style="text-align: justify;"><br />和实习不同，工作会真正影响一个人对于专业选择和职业发展的理解。在工作中，我需要承担更多责任，面对更多复杂事务，同时也和一群善良、前瞻、耐心、包容的同事们，不断地学习和交流。<br /><br />工作之初，我还是一个制作人，钻研着如何打造某些内容品类的爆款，如何做c端更喜欢的东西，以用户和效果为目标。直到20年的12月，由于公司架构调整，我们工作室要被迫转岗做内容营销，说白了就是从c端买单到b端买单。面对这种比较大的变动，如果让我重新面试，我估计过不了面试关。但是本着多尝试多学习的心态，我硬着头皮和同事一起恶补营销知识。<br /><br />在这个忙碌的月份里，妈妈敦促我继续筹备留学，并且根据疫情防控的情况可以考虑继续申请香港。但是工作之后想要停下来读书，真的很难。我甚至抽不出时间来研究申请什么学校什么专业，怎么准备文书和个人介绍&hellip;&hellip;感谢我的妈妈，她帮我在众多的机构中选择了<a href="http://www.compassedu.hk/" target="_blank" rel="noopener"><span style="text-decoration: underline; color: #1890ff;">指南者留学</span></a>。<br /><br />先是蔡老师提供了留学咨询，然后Carol老师接下了我的案子，期间两位老师都给了我很多香港学校的项目分析，帮我整理各个专业的授课内容，梳理我的实习和工作经历，让正在职场埋头打工的我节省了很多时间。</p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;"><strong><span class="h1">二、选校&amp;选专业的调整</span></strong></p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;"><strong><span style="background-color: #8bc7ff;">01 香港成为&rsquo;one pick&rsquo;</span></strong></p>↵<p style="text-align: justify;"><br />首先，我一直更倾向于回到大陆就业，不管我的留学选择是英国、美国还是香港，还是要回来找工作的，那为什么不选择更靠近内地市场的香港呢？不会有文化的GAP，经济政治局势相对稳定，（后来发现）甚至疫情控制得也更好一些。<br /><br />如果学弟学妹们未来想回来发展的话，我非常推荐亚洲的学校给大家（没有不认可其他地区的意思）。香港的教育非常接轨国际，除了英语教学之外，学生的创意、讨论、汇报的习惯也被从小养成。鉴于香港的教育方式、培养的职业能力具有比较高的水准，<strong>大陆HR对香港各所大学的认可度还是很高的</strong>。当然，不远处的新加坡也有着亚洲前列的教育水准，也值得大家去了解。</p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;"><strong><span style="background-color: #8bc7ff;">02 放弃教育学，专申传媒类</span></strong></p>↵<p style="text-align: justify;"><br />经过Gap这一年的工作经历和感受到的市场变化，我渐渐明确了专业方向，完全放弃曾经冒然选择的教育类专业，转而申请传媒类。<br /><br />在做音频互联网的to c和to b工作中，我发现了很多传播相关的、媒介相关的有趣现象，并希望未来能够通过这些媒介让某些案子和好的内容被更多人发现。<br /><br />比如我们都知道西西弗、方所这种大型的连锁书店，可是很多像旧书屋、乡村书店之类的有着自己思想调性的&ldquo;活&rdquo;的独立书店却生存困难。能不能通过什么形式让大家知道独立书店呢？能不能设计方案让品牌买单来推动这种富有调性的事情呢？这需要学习很多市场的广告营销案例，需要看很多4A公司的co-branding策划，这促使我想要了解和学习。<br /><br />我想说，<strong>工作会让你重新反思自己选择的路</strong>。脑海里的规划都是虚幻的，迈入真实的市场去实践才会让你踏实下来，做妥当的选择。<br /><br />也是基于案例不够、资源不够、人脉不够的现状，我需要通过学习进修补充和摄入一些东西。在认认真真地看了每个专业的简介和培养目标，我选择了<strong>浸会的媒体管理专业</strong>：<br /><br />该项目由<strong>传理学院和商学院</strong>联合举办，旨在培养自信和有能力的媒体管理专业人才。该课程充分利用了这两所学校的教师的专业知识，<strong>将媒体和管理方面的艺术知识纳入其课程设计中</strong>，以培养媒体行业领导人才。该课程的毕业生将在<strong>中华地区及其他地区</strong>，全面了解<strong>大众传播过程及其管理和工商管理</strong>的各个方面。毕业生应该具备在媒体行业的关键管理岗位工作的能力，并在全球信息时代在媒体领域领先地位的职业发展做好准备。那些对媒体研究和管理感兴趣的人，再学完本项目之后会发现本学位为期将来的发展提供了坚实的基础。本项目的课程设计阐述了理论和研究是如何应用于<strong>真实世界的媒体和管理问题解决</strong>的。</p>↵<p style="text-align: right;"><span class="h6">（翻译来自网络，加粗部分是我认为的关键词）</span></p>↵<p style="text-align: justify;">&nbsp;</p>↵<p style="text-align: justify;">可以看到这个专业涵盖了商业管理，相对比较务实，并且由经历丰富的授课老师结合实际进行案例分析，这对于目前职业阶段的我来说能够学到很多专业领域的知识。在此感谢我的班主任Carol，在申请过程中不厌其烦地陪我改cv更新系统。</p>↵<p style="text-align: justify;"><img style="width: 673px; height: 217px; margin-left: auto; margin-right: auto; float: none;" src="https://info.compassedu.hk/info_imgUrl_php4UTIKf" width="673" height="217" /></p>↵<p style="text-align: justify;">说来和香港浸会大学有缘，我的申请时间线是：4月19号提交申请&mdash;20号收到排序信&mdash;21号要求补材料&mdash;30号收到推研信&mdash;确认后5月8号收到媒体管理专业offer，可以说是非常迅速了。</p>↵<p style="text-align: justify;"><img style="width: 728px; height: 1618px; margin-left: auto; margin-right: auto; float: none;" src="https://info.compassedu.hk/info_imgUrl_phpp0IU9A" width="728" height="1618" /></p>↵<p style="text-align: justify;">现在的我，已经做好了离职去读书的准备。也祝每位正在犹豫担心的学生和家长，能在充分地对专业方向、具体项目做好调研和判断以后，积极行动，并得偿所愿~</p>
`
RichText = RichText.replace(/\>&nbsp;\</gi, '><br/><')
  .replace(/&amp;/gi, '&')
  .replace(/&mdash;/gi, '—')
  .replace(/&ldquo;/gi, '“')
  .replace(/&rdquo;/gi, '”')
  .replace(/&rsquo;/gi, '’')
  .replace(/&rsquo;/gi, '’')

  .replace(/&nbsp;/gi, ' ')
  .replace(/&hellip;/gi, '…')
  .replace(/\<img style=/gi, '<img default-style=')
  .replace(
    /\<img/gi,
    '<img style="width:100%; max-width:100% !important;height:auto" '
  )

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
        <View style='height:200px;margin-top:20px'> 富文本测试</View>
        <View
          className='taro_html'
          dangerouslySetInnerHTML={{ __html: RichText }}
        ></View>
      </View>
    )
  }
}
