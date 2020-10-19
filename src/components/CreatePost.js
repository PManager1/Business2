import React, { Component } from 'react'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createRecord } from '../graphql/mutations'


class CreatePost extends Component {

    state = {
        // postOwnerId: "1",
        // postOwnerUsername: "Jay",
        // postTitle: "",
        // postBody: "", 
        companyName: "",   //title
        executiveFirstName: "",  // blog body

    }

    componentDidMount = async () => {
       //Todo: Auth
       await Auth.currentUserInfo()
            .then(user => {
                this.setState({
                      // postOwnerId: user.attributes.sub,
                      // postOwnerUsername: user.username

                })
                // console.log("Curr: User: ", user.username);
                 //console.log("Attr.Sub: User: ", user.attributes.sub);
                 
            })
    }


    handleChangePost = event => this.setState({
         [event.target.name] : event.target.value 
         })

    handleAddPost = async event => {
         event.preventDefault()

         const input = {
              // postOwnerId: this.state.postOwnerId,
              // postOwnerUsername: this.state.postOwnerUsername,
              companyName: this.state.companyName,
              executiveFirstName: this.state.executiveFirstName,
              createdAt: new Date().toISOString() 
         }

         await API.graphql(graphqlOperation(createRecord, { input }))

         this.setState({ companyName: "", executiveFirstName: ""})

    }

    
    render() {
        return (
            <form className="add-post" 
            onSubmit={this.handleAddPost} >

                <input style={{ font: '19px'}} 
                  type="text" placeholder="companyName"
                  name="companyName"
                  required
                  value={this.state.companyName}
                  onChange={this.handleChangePost}
                  />

                <textarea 
                  type="text"
                  name="executiveFirstName"
                  rows="3"
                  cols="40"
                  required
                  placeholder="executiveFirstName"
                  value={this.state.postBody}
                  onChange={this.handleChangePost}
                  />

                <input  type="submit"
                  className="btn"
                  style={{ fontSize: '19px'}}/>
            </form>
        )
    }
}
export default CreatePost;
