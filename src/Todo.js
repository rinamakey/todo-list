import { Component } from "react";
import imageTwo from'./33.png';

export class Todo extends Component{
    state={
        userInput:'',
        todolist:[]
    }
changeInput(e){
   this.setState({userInput:e})
   console.log(e)
}
clickButton(input){
    if(input===''){
        alert('пожалуйста введите текст!')
    }
    else{
    let list = this.state.todolist;
    list.push(input);
    this.setState({todolist:list,userInput:''})
}
}

deliteLi(e){
   const li= e.target;
   li.classList.toggle('cross')
}
deliteButton(){
    let list= this.state.todolist;
    list = [];
    this.setState({todolist:list})
}
formSubmit(e){
    e.preventDefault()
}
render(){
    return(
        <div>
            <form onSubmit={this.formSubmit}>
        <div className="center">
            <input onChange={(e)=>{this.changeInput(e.target.value)}} 
            value={this.state.userInput}
            type="text"
            placeholder="введите текст"></input>
        </div>
        <div className="center">
            <button className="add" onClick={()=>this.clickButton(this.state.userInput)}>Добавить</button>
        </div>
        <ul>
            {this.state.todolist.map((item,index)=>
            <li onClick={this.deliteLi} key={index}><img src={imageTwo}alt='foto'width='40px'/>{item}</li>)}
        </ul>
        <div className="center">
            <button className="delete" onClick={()=>this.deliteButton()}>Удалить</button>
        </div>
        </form>
        </div>
    )
}


}