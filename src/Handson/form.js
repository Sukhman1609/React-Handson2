import React from "react";
import { Component } from "react";

class Form extends Component{
    state={
        Name : ' ',
        Department :' ',
        Rating:' ',
        EmpData:[]
    }
    changeHandler = (event) =>{
        this.setState({[event.target.name]:event.target.value})
        

    }

    clickHandler=()=>{
        let newobj={
            name : this.state.Name,
            department : this.state.Department,
            rating: this.state.Rating
        }
        this.state.EmpData.push(newobj);
        this.setState({
            EmpData:this.state.EmpData,
            Name:' ',
            Department:' ',
            Rating:' ',
        })
        console.log(this.state.EmpData)
    }

    componentDidMount() {
        this.checkScroll();
      }
    
      componentDidUpdate() {
        this.checkScroll();
      }
    
      checkScroll() {
        const { EmpData } = this.state;
        const hasEmployeeData = EmpData.length > 0;
    
        if (!hasEmployeeData) {
          document.body.classList.add("no-scroll"); // Prevent scrolling
        } else {
          document.body.classList.remove("no-scroll"); // Allow scrolling
        }
      }

    
    render(){
        const { EmpData } = this.state;
    return(
        <>
        <h1 style={{textAlign:"center"}}>EMPLOYEE FEEDBACK FORM</h1>
        <form>
            <div className="main">
            <div className="inp">
        <label htmlFor='name'>Name :</label>
        <input id="name" className="field" type="text" placeholder='Enter' name="Name" value={this.state.Name} onChange={this.changeHandler}required></input></div><br></br>
        <div className="inp"><label htmlFor='department'>Department :</label>
        <input id="department" className="field" type="text" placeholder="Enter Department" name="Department" value={this.state.Department} onChange={this.changeHandler}required></input></div><br></br>
       <div className="inp"> <label htmlFor='rating'>Rating :</label>
        <input id="rating" className="field" type="text" placeholder="Enter Rating" name="Rating" value={this.state.Rating} onChange={this.changeHandler}required></input></div>
        <div className="inp"><button type="button" className="submit" onClick={this.clickHandler}>Submit</button></div></div>
        </form>
        {EmpData.length > 0 ? (
        <div className="abc" > 
        {this.state.EmpData.map((item,index)=>{
           return(
            <>  <div key={index} className="inner-box">     
                <span className="display">Name: {item.name} || Department :{item.department} || Rating :{item.rating}</span>
                </div> 
            </>

           )
        })}
        
        </div>
        
        ) : (
            <hr style={{ margin: "80px auto", width: "80%" ,border:"3px solid black"}} />
        )}
            </>   
    )
    
    }
}
export default Form