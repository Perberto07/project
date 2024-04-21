import React, { ReactNode } from 'react';

interface MessageParserProps {
  children: ReactNode;
  actions: any; // Change 'any' to the appropriate type if possible
}

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: string) => {
    console.log(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          parse: parse,
          actions: {}, // You may want to define the type for 'actions'
        });
      })}
    </div>
  );
};

export default MessageParser;