import React from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../../Backend/backend'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: 1,
            user: '5ccdf852720df265a0bbcb39',
            name: this.props.data,
            message: '',
            messages: []
        }

    }
    // state = {
    //     user: '',
    //     name: '',
    //     message: '',
    //     messages: []
    // }


    componentWillMount() {

    }

    componentDidMount() {
        console.log('State before messages', this.state)
        const testID = '5cc88bf7358cd52db165aa57';
        Backend.getAllMessages(testID)
            .then((response) => response.json())
            .then((data) => {
                this.setState((currentState) => {
                    console.log('This: ', data)
                    return {
                        messages: GiftedChat.append(currentState, data)
                    }
                }, () => {
                    console.log('State after messages: ', this.state)
                })

            });

    };
    // componentWillMount() {
    //     Backend.closeChat()
    // }
    handleSend(message) {
        //send message to backend
        Backend.addNewMessage({
            name: this.state.name,
            message,
        }, this.state.eventID)
            .then(response => {
                response.json()
                console.log(response)
            })
            .then((data) => {
                this.setState((currentState) => {
                    console.log('This line 66: ', data)
                    return {
                        messages: GiftedChat.append(currentState, data)
                    }
                }, () => {
                    console.log('State after messages sent: ', this.state)
                })

            });
        console.log(message)
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(message) => {
                    //send message to backend
                    Backend.addNewMessage({
                        name: this.state.name,
                        message,
                    }, '5ccb7d48c3c78ecef4a8f5dd')
                    console.log(message)
                }}
                user={{
                    _id: this.state._id,
                    name: this.state.name
                }}
            />
        )
    }


}


// Chat.defaultProps = {
//     name: '',
// };

// Chat.propTypes = {
//     name: React.propTypes.string
// }

export default Chat;
