/**
 * An autogenerated component that renders the EXP_2 iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');
const Iconography = require('../iconography');

//普通按钮是按键效果，特殊按钮是切换效果
class WordButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ClassName: 'word-button',
            ClassName2:'word-button word-button-on-touch',
            active: this.isactive(this.props.value),
            flag:false
        }
    }
    //功能键不仅仅有点击动画，还需要表示某些状态，从board里传过来的
    isactive = (value) => {
        let flag = !1;
        switch (value){
            case 'shift':
                flag = this.props.capslock;
                break;
            case 'calc':
                flag = this.props.area === 1;
                break;
            case 'math':
                flag = this.props.area === 2;
                break;
            case 'sign':
                flag = this.props.area === 3;
                break;
            default :
                break;
        }
        return flag;
    };
    onTouchStart = () => {
        if(this.props.value!=='shift'&&
            this.props.value!=='calc'&&
            this.props.value!=='math'&&
            this.props.value!=='sign'
        ){
            this.setState({flag:!0});
        }

    };
    onTouchEnd = (e) => {
        this.props.handleExtraClick(this.props.value);
        if(this.props.value==='shift'||
            this.props.value==='calc'||
            this.props.value==='math'||
            this.props.value==='sign'
        ){
            //设定延迟，怀疑是异步处理状态没有及时更新。尝试规避该问题
            let _self = this;
            setTimeout(function(){
                _self.setState({active:_self.isactive(_self.props.value)});
            },100)
        }else{

            this.setState({flag:!1});
        }
        e.preventDefault();
    };

    render() {

        let a =  this.props.value;
        const SvgForName = Iconography[a.toUpperCase()];
        if(SvgForName){
            a =  <SvgForName />
        }

        let flag = this.state.flag;
        if(this.props.value==='shift'||
            this.props.value==='calc'||
            this.props.value==='math'||
            this.props.value==='sign'
        ){
            flag = this.isactive(this.props.value);
        }
        return (
            <div className={(flag?this.state.ClassName2:this.state.ClassName) + ' mathboard_'+this.props.value} onTouchStart={() => this.onTouchStart()} onTouchEnd={(e) => this.onTouchEnd(e)}>
                {a}
            </div>
        )
    }
}

module.exports =  WordButton;