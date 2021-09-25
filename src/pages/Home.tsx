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
  IonButton,
  IonIcon,
} from '@ionic/react';
import { trash } from 'ionicons/icons';
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
            <IonList style={{ marginTop: '20px', padding: '15px' }}>
              {todos?.map((todo) => (
                <div className='todo' key={todo.id}>
                  <IonItem style={{ width: '100%' }}>
                    <IonLabel className={todo.checked ? 'checked-todo' : ''}>
                      {todo.value}
                    </IonLabel>
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
                  <IonButton
                    onClick={() => {
                      const newTodos = todos.filter(
                        (todoItem) => todoItem.id !== todo.id
                      );
                      setTodos(newTodos);
                    }}
                    color='danger'
                  >
                    <IonIcon icon={trash} />
                  </IonButton>
                </div>
              ))}
            </IonList>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
