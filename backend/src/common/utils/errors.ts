export const parseStringError = (message: string, field = 'general') => {
  return {
    errors: [
      {
        field: field,
        message: message,
      },
    ],
  };
};

export const parseValidationErrors = (messages: string[]) => {
  return {
    errors: messages.map((message) => {
      return {
        field: message.split(' ')[0] || 'general',
        message: message,
      };
    }),
  };
};
