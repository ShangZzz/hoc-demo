import React from 'react';

const HOC = (Comp) => {
  class NewDumb extends React.Component {
    componentDidMount() {
      console.log('NewDumb')
    }
    render() {
      const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        height: '300px',
        border: `2px solid ${this.props.color}`,
      }
      return <Comp style={style} {...this.props} newName="高阶组件" />
    }
  }
  return NewDumb
}

@HOC
class Dumb extends React.Component{
  render(){
    const { style, newName, name } = this.props
    return (
      <div style={style}>
        我是{newName || name} || 本体是{name}
      </div>
    )
  }
}

export default Dumb;