import { useState } from 'react';
import { IonInput, IonButton } from '@ionic/react';

interface Props {
  addTodo: (value: string) => void;
}

export default function TodoInput({ addTodo }: Props) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;

    setValue('');
    addTodo(value);
  };

  return (
    <form onSubmit={handleSubmit} className='todo-input-container'>
      <IonInput
        placeholder='Enter new todo'
        value={value}
        onIonChange={(e: any) => setValue(e.target?.value)}
        className='todo-input'
      />
      <IonButton size='large' disabled={!value} type='submit'>
        Add Todo
      </IonButton>
    </form>
  );
}
