import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ShoppingListProps {
  name: string;
}

class ShoppingList extends React.Component<ShoppingListProps> {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

