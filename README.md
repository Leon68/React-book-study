http://huziketang.com/books/react/lesson14
React.js小书学习笔记


# React环境配置最简单方法： 使用create-react-app（最新版本默认不处理sass和less需要自己添加配置）
安装：npm install -g create-react-ap
构建项目： create-react-app project-name
npm config set registry https://registry.npm.taobao.org更换为淘宝源
cd project-name
npm start

# JSX原理：
HTMl标签包括三部分：tag，attributes,children
js可以用对象来表示HTML标签。
编译的过程会把类似 HTML 的 JSX 结构转换成 JavaScript 的对象结构。

总结
1)JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。
2)React.js 可以用 JSX 来描述你的组件长什么样的。
3)JSX 在编译的时候会变成相应的 JavaScript 对象描述。
4)react-dom 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上。


# render方法：
一个组件类必须要实现一个 render 方法，这个 render 方法必须要返回一个 JSX 元素。但这里要注意的是，必须要用一个外层的 JSX 元素把所有内容包裹起来。返回并列多个 JSX 元素是不合法的
```
render () {
  return (
    <div>
      <div>第一个</div>
      <div>第二个</div>
    </div>
  )
}
```


JSX中可以有Javascript,表达式用{}包裹，{}中可以有JSX

class和for为JavaScript保留字，因此JSX中class用className代替，for用htmlFor代替，其他HTML属性不变。

组件嵌套组合构成组件树


# 事件
为 React 的组件添加事件监听是很简单的事情，你只需要使用 React.js 提供了一系列的 on* 方法即可。

React.js 会给每个事件监听传入一个 event 对象，这个对象提供的功能和浏览器提供的功能一致，而且它是兼容所有浏览器的。

React.js 的事件监听方法需要手动 bind 到当前实例，这种模式在 React.js 中非常常用。

绑定多个事件方法：

```
class Dog extends Component {
  bark () {
    console.log('bark')
  }

  run () {
    console.log('run')
  }

  render () {
    return (<div onClick={(event) => {this.bark(); this.run()}}>DOG</div>)
  }
}
```
# setState
组件状态必须由setState方法改变。
setState 方法由父类Component所提供。当我们调用这个函数的时候，React.js 会更新组件的状态 state ，并且重新调用 render 方法，然后再把 render 方法所渲染的最新的内容显示到页面上。它接受一个对象或者函数作为参数。


setState两种用法，一种接收对象为参数，一种接收函数为参数
setState后React不会立刻更新而是放入缓存统一更新，因此多次执行setState不会影响性能，但是也造成不能使用上一个setState的运算结果，所以要接收函数为参数将运算结果保存在函数中，下次运算使用函数的结果不是state的结果

state存储数据props传递参数

# props
props是一个对象，组件的所有属性都是props对象中键值对
static defaultProps = {
}
props传入后为只读，不可变

1.为了使得组件的可定制性更强，在使用组件的时候，可以在标签上加属性来传入配置参数。
2.组件可以在内部通过 this.props 获取到配置参数，组件可以根据 props 的不同来确定自己的显示形态，达到可配置的效果。
3.可以通过给组件添加类属性 defaultProps 来配置默认参数。
4.props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果。

# 列表渲染
如果你往 {} 放一个数组，React.js 会帮你把数组里面一个个元素罗列并且渲染出来
对于用表达式套数组罗列到页面上的元素，都要为每个元素加上 key 属性，这个 key 必须是每个元素唯一的标识。一般来说，key 的值可以直接后台数据返回的 id，因为后台的 id 都是唯一的。
