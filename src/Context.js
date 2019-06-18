import React, { Component } from "react";
// 生成一个上下文
const Context = React.createContext();

const store = {
  name: "Zzz",
};

// 为Provider封装一个高阶组件
const withProvider = Comp => props => (
  <Context.Provider value={store}>
    <Comp {...props} />
  </Context.Provider>
);

// 为Consumer封装一个高阶组件
const withConsumer = Comp => props => (
  <Context.Consumer>
    {value => <Comp {...props} value={value} />}
  </Context.Consumer>
);

//使孙子组件足有消费能力
@withConsumer
class Grandson extends Component {
  render() {
    return <div>{this.props.value.name}</div>;
  }
}
//是父组件具有提供能力
@withProvider
class Provider extends Component {
  render() {
    return <div><Container/></div>;
  }
}
// 一个容器组件
function Container(props) {
  return (
    <div> <Container2/> <Container3/> </div>
  )
}
// 一个容器组件2
function Container2(props) {
  return (
    <div> <Grandson/> </div>
  )
}
// 一个容器组件3
function Container3(props) {
  return (
    <div> Container3 </div>
  )
}
export default Provider