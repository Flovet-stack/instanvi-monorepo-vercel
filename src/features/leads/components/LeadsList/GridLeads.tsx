import React, { useState, Fragment } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface Task {
  content: string;
  id: string;
  name: string;
  phone: string;
  number: string;
  sign: string;
  date: string;
}

interface Card {
  id: string;
  title: string;
  taskIds: string[];
}

interface Dataset {
  tasks: { [key: string]: Task };
  cards: { [key: string]: Card };
  cardOrder: string[];
}

const ITEM_TYPES = {
  CARD: 'card',
  TASK: 'task',
};

const DATASET: Dataset = {
  tasks: {
    'task-1': {
      id: 'task-1',
      name: 'water plants',
      phone: '+237 692-483-605',
      number: '1234',
      sign: 'number',
      date: '12 june 2015',
      content: 'Test content',
    },
    'task-2': {
      id: 'task-2',
      name: 'buy oat milk',
      phone: '+237 692-483-605',
      number: '02x4',
      sign: 'code',
      date: '12 june 2015',
      content: 'Test content',
    },
    'task-3': {
      id: 'task-3',
      name: 'build a trello board',
      phone: '+237 692-483-605',
      number: '#123#',
      sign: 'dial',
      date: '12 june 2015',
      content: 'Test content',
    },
    'task-4': {
      id: 'task-4',
      name: 'have a beach day',
      phone: '+237 692-483-605',
      number: '#123#',
      sign: 'dial',
      date: '12 june 2015',
      content: 'Test content',
    },
    'task-5': {
      id: 'task-5',
      name: 'build tic tac toe',
      phone: '+237 692-483-605',
      number: '#123#',
      sign: 'number',
      date: '12 june 2015',
      content: 'Test content',
    },
    'task-6': {
      id: 'task-6',
      name: 'build tic tac toe',
      phone: '+237 692-483-605',
      number: '#123#',
      sign: 'number',
      date: '12 june 2015',
      content: 'Test content',
    },
    'task-7': {
      id: 'task-7',
      name: 'build tic tac toe',
      phone: '+237 692-483-605',
      number: '#123#',
      sign: 'number',
      date: '12 june 2015',
      content: 'Test content',
    },
    'task-8': {
      id: 'task-8',
      name: 'build tic tac toe',
      phone: '+237 692-483-605',
      number: '#123#',
      sign: 'number',
      date: '12 june 2015',
      content: 'Test content',
    },
    'task-9': {
      id: 'task-9',
      name: 'build tic tac toe',
      phone: '+237 692-483-605',
      number: '#123#',
      sign: 'number',
      date: '12 june 2015',
      content: 'Test content',
    },
    'task-10': {
      id: 'task-10',
      name: 'build tic tac toe',
      phone: '+237 692-483-605',
      number: '#123#',
      sign: 'number',
      date: '12 june 2015',
      content: 'Test content',
    },
  },
  cards: {
    'card-1': {
      id: 'card-1',
      title: 'New Leads',
      taskIds: ['task-1', 'task-2'],
    },
    'card-2': {
      id: 'card-2',
      title: 'Qualifications',
      taskIds: ['task-3', 'task-4'],
    },
    'card-3': {
      id: 'card-3',
      title: 'Negotiations',
      taskIds: ['task-5', 'task-6'],
    },
    'card-4': {
      id: 'card-4',
      title: 'Close Wons',
      taskIds: ['task-7', 'task-8'],
    },
    'card-5': {
      id: 'card-5',
      title: 'Close LOST',
      taskIds: ['task-9', 'task-10'],
    },
  },
  cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'],
};

const Container = styled.div`
  margin: 2em;
  display: flex;
  @media (max-width: 720px) {
    flex-direction: column;
  }
  align-items: center;
  justify-items: center;
`;
const Menu = styled.div`
  margin: 2em;
  display: flex;
  flex-direction: column;
`;
const Note = styled.div`
  font-size: 0.8em;
  margin: 20px 0;
`;
const NewCard = styled.div`
  font-size: 1em;
  color: grey;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
`;

export default function GridLeads() {
  const [dataset, _] = useState<Dataset>(() => {
    //   const savedDataset = localStorage.getItem("aleka-trello-board-dataset");
    const initialValue = DATASET;
    return initialValue || DATASET;
  });

  const [tasks, setTasks] = useState<any>(dataset.tasks);
  const [cards, setCards] = useState<any>(dataset.cards);
  const [cardOrder, setCardOrder] = useState<string[]>(dataset.cardOrder);

  const onAddNewCard = () => {
    const newCard: Card = {
      id: 'card-' + genRandomID(),
      title: '**New**',
      taskIds: [],
    };
    const newCardOrder = Array.from(cardOrder);
    newCardOrder.unshift(newCard.id);
    setCards({
      ...cards,
      [newCard.id]: newCard,
    });
    setCardOrder(newCardOrder);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex justify-center w-full">
          <DragDropCards
            cards={cards}
            tasks={tasks}
            cardOrder={cardOrder}
            setCards={setCards}
            setTasks={setTasks}
            setCardOrder={setCardOrder}
          />
        </div>
      </div>
    </>
  );
}

const CardsContainer = styled.div`
  margin: 2em;
  display: flex;
  max-width: 100%;
  min-width: 100%;
  min-height: 70vh;
  @media (max-width: 720px) {
    flex-direction: column;
  }
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

interface DragDropCardsProps {
  cards: Card[];
  tasks: Task[];
  cardOrder: string[];
  setCards: (cards: Card[]) => void;
  setTasks: (tasks: Task[]) => void;
  setCardOrder: (cardOrder: string[]) => void;
}

function DragDropCards({
  cards,
  tasks,
  cardOrder,
  setCards,
  setTasks,
  setCardOrder,
}: DragDropCardsProps) {
  const [editing, setEditing] = useState<string | null>(null);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    if (type === ITEM_TYPES.CARD) {
      reorderCards(source, destination, draggableId);
    } else {
      // type === tasks
      const start = cards[source.droppableId];
      const finish = cards[destination.droppableId];
      if (start.id === finish.id) {
        reorderTasksWithinCard(
          start,
          source.index,
          destination.index,
          draggableId
        );
      } else {
        moveTask(start, finish, source.index, destination.index, draggableId);
      }
    }
  };

  const reorderCards = (source: any, destination: any, draggableId: string) => {
    const newCardOrder = Array.from(cardOrder);
    newCardOrder.splice(source.index, 1);
    newCardOrder.splice(destination.index, 0, draggableId);
    setCardOrder(newCardOrder);
  };

  const reorderTasksWithinCard = (
    card: Card,
    sourceIdx: number,
    destinationIdx: number,
    draggableId: string
  ) => {
    const newTaskIds = Array.from(card.taskIds);
    newTaskIds.splice(sourceIdx, 1);
    newTaskIds.splice(destinationIdx, 0, draggableId);
    setCards({
      ...cards,
      [card.id]: {
        ...card,
        taskIds: newTaskIds,
      },
    });
  };

  const moveTask = (
    start: Card,
    finish: Card,
    sourceIdx: number,
    destinationIdx: number,
    draggableId: string
  ) => {
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(sourceIdx, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destinationIdx, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    setCards({
      ...cards,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    });
  };

  const onAddNewTask = (cardID: any, content: string) => {
    const newTask: any = {
      id: 'task-' + genRandomID(),
      content,
    };
    setTasks({
      ...tasks,
      [newTask.id]: newTask,
    });
    const newTaskIds = Array.from(cards[cardID].taskIds);
    newTaskIds.push(newTask.id);
    setCards({ ...cards, [cardID]: { ...cards[cardID], taskIds: newTaskIds } });
  };

  const onRemoveCard = (cardID: any) => {
    const newCardOrder = cardOrder.filter((id) => id !== cardID);
    setCardOrder(newCardOrder);

    const cardTaskIds = cards[cardID].taskIds;
    cardTaskIds.forEach((taskID: any) => delete tasks[taskID]);
    delete cards[cardID];
    setCards(cards);
    setTasks(tasks);
  };

  const onRemoveTask = (taskID: any, cardID: any) => {
    const newTaskIds = cards[cardID].taskIds.filter((id) => id !== taskID);
    setCards({ ...cards, [cardID]: { ...cards[cardID], taskIds: newTaskIds } });
    delete tasks[taskID];
    setTasks(tasks);
  };

  const onSaveTitleEdit = (cardID: any, newTitle: any) => {
    if (newTitle !== cards[cardID].title) {
      setCards({
        ...cards,
        [cardID]: {
          ...cards[cardID],
          title: newTitle,
        },
      });
    }
    setEditing(null);
  };

  const onSaveTaskEdit = (taskID: any, cardID: string, newContent: string) => {
    if (newContent.trim() === '') {
      onRemoveTask(taskID, cardID);
    } else if (newContent !== tasks[taskID].content) {
      setTasks({
        ...tasks,
        [taskID]: { ...tasks[taskID], content: newContent },
      });
    }
    setEditing(null);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-cards" direction="horizontal" type="card">
        {(provided: any) => (
          <CardsContainer {...provided.droppableProps} ref={provided.innerRef}>
            {cardOrder.map((id: any, index: any) => {
              const card = cards[id];
              const cardTasks = card.taskIds.map(
                (taskId: any) => tasks[taskId]
              );
              function onFocusClick(id: any): void {
                throw new Error('Function not implemented.');
              }

              return (
                <Card
                  key={card.id}
                  card={card}
                  tasks={cardTasks}
                  index={index}
                  onFocusClick={() => onFocusClick(card.id)}
                  onSaveTitleEdit={(title) => onSaveTitleEdit(card.id, title)}
                  onRemoveCard={() => onRemoveCard(card.id)}
                  onAddNewTask={(content) => onAddNewTask(card.id, content)}
                  onSaveTaskEdit={(taskID, newContent) =>
                    onSaveTaskEdit(taskID, card.id, newContent)
                  }
                  onTitleDoubleClick={() => setEditing(card.id)}
                  onTaskDoubleClick={(task) => setEditing(task.id)}
                  isTitleEditing={editing === card.id}
                  isTaskEditing={(task) => editing === task.id}
                />
              );
            })}
            {provided.placeholder}
          </CardsContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h3`
  padding: 8px;
  font-size: 1.2em;
  text-overflow: ellipsis;
`;
const Cross = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  text-align: right;
  color: grey;
`;
const CardContainer = styled.div`
  border: 1px solid lightgrey;
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props: any) =>
    props.isDraggingOver ? 'skyblue' : 'inherit'};
  min-height: 100px;
  height: 100%;
`;
const NewTaskBar = styled.div`
  display: flex;
`;

interface CardProps {
  card: Card;
  tasks: Task[];
  index: number;
  onFocusClick: () => void;
  onSaveTitleEdit: (title: string) => void;
  onRemoveCard: () => void;
  onAddNewTask: (content: string) => void;
  onSaveTaskEdit: (taskID: string, newContent: string) => void;
  onTitleDoubleClick: () => void;
  onTaskDoubleClick: (task: Task) => void;
  isTitleEditing: boolean;
  isTaskEditing: (task: Task) => boolean;
}

function Card(props: CardProps) {
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);
  const onSaveTask = (content: string) => {
    if (content.trim() !== '') {
      props.onAddNewTask(content);
    }
    setIsAddingNewTask(false);
  };

  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided: any) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          id={props.card.id}
          className="mx-2"
        >
          <TitleBar>
            <Title
              onDoubleClick={props.onTitleDoubleClick}
              {...provided.dragHandleProps}
              onClick={() => {
                alert(props.card.id);
              }}
              className="cursor-pointer flex justify-center w-full"
            >
              <span>{props.card.title}</span>
            </Title>
          </TitleBar>
          <Droppable droppableId={props.card.id} type="task">
            {(provided: any, snapshot: any) => (
              <Fragment>
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {props.tasks.map((task, index) => (
                    <Task
                      key={task.id}
                      task={task}
                      index={index}
                      onSaveTaskEdit={(content) =>
                        props.onSaveTaskEdit(task.id, content)
                      }
                      onTaskDoubleClick={() => props.onTaskDoubleClick(task)}
                      isTaskEditing={props.isTaskEditing(task)}
                    />
                  ))}
                </TaskList>
                {provided.placeholder}
              </Fragment>
            )}
          </Droppable>
        </CardContainer>
      )}
    </Draggable>
  );
}

const TaskContainer = styled.div`
  display: flex;
  width: 100%;
`;
const TaskContent = styled.div`
  border: 1px solid lightgrey;
  padding: 18px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: ${(props: any) =>
    props.isDragging ? 'lightgreen' : 'white'};
  width: 100%;
`;

interface TaskProps {
  task: Task;
  index: number;
  content?: string;
  onSaveTaskEdit: (content: string) => void;
  onTaskDoubleClick: () => void;
  isTaskEditing: boolean;
}

function Task(props: TaskProps) {
  return (
    <div>
      <TaskContainer>
        <Draggable draggableId={props.task.id} index={props.index}>
          {(provided: any, snapshot: any) => (
            <TaskContent
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
              onDoubleClick={props.onTaskDoubleClick}
            >
              <div className="w-full">
                <div className="flex justify-between">
                  <div className="">
                    <h3>{props.task.name}</h3>
                    <div className="border rounded mt-1 px-0.5 text-sm">
                      <p>{props.task.phone}</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex">
                      <div className="px-2 h-5 text-sm  flex rounded-lg bg-yellow-600 text-white">
                        <div className="px-1 border-r border-white">
                          <p>
                            <i className="ri-phone-line"></i>
                          </p>
                        </div>
                        <p>{props.task.number}</p>
                      </div>
                      <div className="h-7 w-7 ml-2 rounded-full items-center flex justify-center bg-green-500 text-white">
                        <i className="ri-user-add-line"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <hr />
                <div className="flex justify-between mt-1">
                  <div className="flex">
                    <i className="ri-calender-line text-green-500 mr-2"></i>
                    <p>{props.task.date}</p>
                  </div>
                  <div className="flex">
                    <div className="h-5 w-5 mt-1.5 flex justify-center rounded-md bg-green-500 items-center">
                      <i className="ri-chat-1-fill text-white"></i>
                    </div>
                    <i className="ri-whatsapp-fill text-green-500 text-2xl mx-2"></i>
                    <i className="ri-mail-open-fill  text-blue-500 text-2xl"></i>
                  </div>
                </div>
              </div>
            </TaskContent>
          )}
        </Draggable>
      </TaskContainer>
    </div>
  );
}

function genRandomID() {
  return (Math.random() + 1).toString(36).substring(7);
}
