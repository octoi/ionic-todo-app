import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
} from '@ionic/react';
import TodoInput from '../components/Input';
import './Home.css';

interface Todo {
  value: string;
  id: string;
  checked: boolean;
}

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='p'>
          <TodoInput
            addTodo={(v) =>
              setTodos([
                ...todos,
                {
                  id: Date.now().toString(),
                  value: v,
                  checked: false,
                },
              ])
            }
          />
          {todos.length !== 0 && (
            <IonList style={{ marginTop: '20px' }}>
              {todos?.map((todo) => (
                <IonItem key={todo.id}>
                  <IonLabel>{todo.value}</IonLabel>
                  <IonCheckbox
                    checked={todo.checked}
                    mode='ios'
                    onIonChange={(e) => {
                      const editedTodos = todos.filter((todoItem) => {
                        if (todoItem.id === todo.id) {
                          todoItem.checked = !todo.checked;
                        }
                        return todoItem;
                      });
                      setTodos(editedTodos);
                    }}
                  />
                </IonItem>
              ))}
            </IonList>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
