import React from "react";

class ProfileClassBase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userinfo: {
                name:"Dummy Name",
                location : "Dummy location",
                bio: "Dummy bio"
            }
        }
    
    }
async componentDidMount(){
            const data = await fetch("https://api.github.com/users/onkar717")
            const json = await data.json()
            console.log(json);
            this.setState({
                userinfo: json
            })
        }
    render(){
        return(
            <div>
                {/* <h1>Hello World From Class Component</h1>
                <h1>{this.props.name}</h1>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => 
                this.setState({count:1})
                }>Count</button> */}
                <h1>Profile Data of User from Github</h1>
                <h2>Name :{this.state.userinfo.name}</h2>
                <h2>bio:{this.state.userinfo.bio}</h2>
                <h2>Location :{this.state.userinfo.location}</h2>
                <img src={this.state.userinfo.avatar_url}></img>
                <h2></h2>
            </div>
        )
    }
}

export default ProfileClassBase;