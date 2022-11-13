import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './types'
import { getAllSubs } from "./services/getAllSubs";


interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

const INITIAL_STATE = [
   {
     nick: 'Pepelu',
     subMonths: 5,
     avatar: 'https://i.pravatar.cc/150?u=pepelu',
     description: 'Pepelu is a great guy',
   },
   {
     nick: 'Jojordan',
     subMonths: 3,
     avatar: 'https://i.pravatar.cc/150?u=jojordan',
   }
  ]


function App() {
  // const [subs, setSubs] = useState([
  //   {
  //     nick: 'Pepelu',
  //     subMonths: 5,
  //     avatar: 'https://i.pravatar.cc/150?u=pepelu',
  //     description: 'Pepelu is a great guy',
  //   },
  //   {
  //     nick: 'Jojordan',
  //     subMonths: 3,
  //     avatar: 'https://i.pravatar.cc/150?u=jojordan',
  //   }
  // ]);

  //const [subs, setSubs] = useState<Array<Sub>>([]);
  //const [subs, setSubs] = useState<Sub[]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);
  
  //useEffect( () => { setSubs(INITIAL_STATE) }, [] )
  
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  useEffect( () => {
    getAllSubs().then(setSubs)
  }, [] )
  
  const handleNewSub = (newSub: Sub) => {
    setSubs([...subs, newSub]);
    setNewSubsNumber(newSubsNumber + 1);
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Twitch subs ({newSubsNumber}) </h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub} /> 
    </div>
  );
}

export default App;
