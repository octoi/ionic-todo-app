import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import TodoInput from '../components/Input';
import './Home.css';

const Home: React.FC = () => {
  const [todoInputValue, setTodoInputValue] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='p'>
          <TodoInput addTodo={(v) => {}} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
