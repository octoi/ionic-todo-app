import { useState } from 'react';
import { IonInput, IonButton } from '@ionic/react';

interface props {
  addTodo: (value: string) => void;
}

export default function TodoInput({ addTodo }: props) {
  const [value, setValue] = useState('');

  return (
    <div className='todo-input-container'>
      <IonInput
        placeholder='Enter new todo'
        value={value}
        onIonChange={(e: any) => setValue(e.target?.value)}
        className='todo-input'
      />
      <IonButton size='large' disabled={!value} onClick={() => addTodo(value)}>
        Add Todo
      </IonButton>
    </div>
  );
}
