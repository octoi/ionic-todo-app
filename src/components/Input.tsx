import { useState } from 'react';
import { IonInput, IonButton } from '@ionic/react';

interface Props {
  addTodo: (value: string) => void;
}

export default function TodoInput({ addTodo }: Props) {
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
