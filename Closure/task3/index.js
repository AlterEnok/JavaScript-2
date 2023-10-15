export const createLogger = () => {
  const messages = [];

  const addMessage = (type, message) => {
    messages.unshift({
      message: message,
      dateTime: new Date(),
      type: type,
    });
  };

  return {
    warn: (message) => {
      addMessage('warn', message);
    },
    error: (message) => {
      addMessage('error', message);
    },
    log: (message) => {
      addMessage('log', message);
    },
    getRecords: (type) => {
      if (type) {
        return messages.filter((msg) => msg.type === type);
      }
      return messages.slice();
    },
  };
};

const logger1 = createLogger();
logger1.warn('This is a warning message');
logger1.log('This is a log message');
logger1.error('This is an error message');

const logger2 = createLogger();
logger2.log('Another log message');
logger2.warn('Another warning message');

console.log(logger1.getRecords());
console.log(logger1.getRecords('warn'));
console.log(logger2.getRecords());
