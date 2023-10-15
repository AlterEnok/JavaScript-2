function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  return {
    setMessage: (newMessage) => {
      message = newMessage;
    },
    setSender: (newSender) => {
      sender = newSender;
    },
    sendMessage: (name) => {
      console.log(
        `Hello, ${name}! ${message}! This message was sent by ${sender}`
      );
    },
  };
}

export default createMessenger;

const messenger1 = createMessenger();
messenger1.sendMessage('Anna');
messenger1.setMessage('Just learn it!');
messenger1.sendMessage('Anna');

const messenger2 = createMessenger();
messenger2.setMessage('You are learning JS and you do it well');
messenger2.sendMessage('Michael');

const messenger3 = createMessenger();
messenger3.setMessage('The weather is amazing today');
messenger3.setSender('Anna');
messenger3.sendMessage('Alex');
