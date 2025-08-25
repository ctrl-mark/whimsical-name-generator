import { useEffect, useState } from 'react'; 
import NamePanel from './components/name-panel';
import NamesTable from './components/names-table';
import Button from './components/button'; 
import './assets/styles/styles.css'
import { generateNames } from './utils/generateNames';

function App() {
  
const [name, setName] = useState('');
const [namesList, setNamesList] = useState([]);


const generate = () => {
fetch('./data/syllables.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch names.json');
      }
      return response.json();
    })
    .then(data => {
      setNamesList(generateNames(data));
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

useEffect(() => {
  generate();
}, []); 


  useEffect(() => {
    if (namesList.length > 0) {
      setName(namesList[0]);
    }
  }, [namesList]);

  function pickName(chosenName){
    let updatedNamesList = [...namesList];
    let chosenIndex = updatedNamesList.indexOf(chosenName);
    let currIndex = updatedNamesList.indexOf(name);

    updatedNamesList[chosenIndex] = updatedNamesList[currIndex];
    updatedNamesList[currIndex] = chosenName; 

    setNamesList(updatedNamesList)
    setName(chosenName)
  }


  return (
    <div className="container">
      <div className="panel">
      <NamePanel name={name} /> 
      <NamesTable namesList={namesList} pickName={pickName}/>
      <Button generate={generate} /> 
      </div>
    </div>
  );
}

export default App;

