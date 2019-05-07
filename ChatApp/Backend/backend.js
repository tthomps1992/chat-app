export default {

    addNewMessage: function (message, eventID) {
        return fetch(
            `http://localhost:3001/event/message/${eventID}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(message),
            },
        )
    },


    getAllMessages: function (eventID) {
        return fetch(
            `http://localhost:3001/event/message/${eventID}`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            },
        )
    },

    createUserId: function ( user ) {
        return fetch(`http://localhost:3001/user`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        });
    }

//     getEvent: function (){
//         return fetch(`http://localhost:3001/event`);
//     }
}
