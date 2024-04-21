import React, { ReactNode } from 'react';

interface ActionProviderProps {
  createChatBotMessage: any; // Change 'any' to the appropriate type if possible
  setState: any; // Change 'any' to the appropriate type if possible
  children: ReactNode;
}

const ActionProvider: React.FC<ActionProviderProps> = ({ createChatBotMessage, setState, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          actions: {}, // You may want to define the type for 'actions'
        });
      })}
    </div>
  );
};

export default ActionProvider;