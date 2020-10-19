import React, { Component } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { updateRecord } from '../graphql/mutations'


class EditPost extends Component {

    state = {
        show: false,
        id: "",
     //    postOwnerId: "",
     //    postOwnerUsername: "",
        companyName: "",
        executiveFirstName: "",
        postData: {
             companyName: this.props.companyName,
             executiveFirstName: this.props.executiveFirstName
        }

    }

    

    

    handleModal = () => {
         console.log('23- Edit post -- this.props =', this.props); 

         this.setState({ show: !this.state.show})
         document.body.scrollTop = 0
         document.documentElement.scrollTop = 0
    }

    handleUpdatePost = async (event) => {
         event.preventDefault()

         const input = {
              id: this.props.id,
          //     postOwnerId: this.state.postOwnerId,
          //     postOwnerUsername: this.state.postOwnerUsername,
              companyName: this.state.postData.companyName,
              executiveFirstName: this.state.postData.executiveFirstName

         }

         console.log('46--- input = ', input );
         await API.graphql(graphqlOperation(updateRecord, { input }))

         //force close the modal 
         this.setState({ show: !this.state.show})

    }
     
    handleTitle = event => {
          console.log('54- this.state= ', this.state );
         this.setState({
             postData: {...this.state.postData, companyName: event.target.value}
              
             
         })
    }
    handleBody = event => {
         this.setState({ postData: {...this.state.postData,
          executiveFirstName: event.target.value}})
    }
    componentWillMount = async () => {

        // await Auth.currentUserInfo()
        //     .then(user => {
        //          this.setState({
        //              postOwnerId: user.attributes.sub,
        //              postOwnerUsername: user.username 
        //          })
        //     })

        console.log(' 73- componentWillMount '); 
    }

    render() {
         console.log(' 70-  Edit Post props =', this.props );
         return (
             <>
             { this.state.show && (
                 <div className="modal">
                      <button className="close"
                         onClick={this.handleModal}>
                          X
                      </button>

                      <form className="add-post"
                         onSubmit={(event) => this.handleUpdatePost(event)}>

                             <input style={{fontSize: "19px"}}
                                  type="text" placeholder="Title"
                                  name="companyName"
                                  value={this.state.postData.companyName}
                                  onChange={this.handleTitle} />

                             <input 
                                style={{height: "150px", fontSize: "19px"}}
                                type="text"
                                name="executiveFirstName"
                                value={this.state.postData.executiveFirstName}
                                onChange={this.handleBody}
                                />

                             <button>Update Post</button>

                      </form>

                      
                 </div>
             )
             }
   
                <button onClick={this.handleModal}>Edit</button>
             </>

             
         )
    }
}

export default EditPost;
