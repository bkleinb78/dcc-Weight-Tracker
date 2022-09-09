import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries'
import AddEntryForm from './Components/AddEntry/AddEntryform';
import EntriesChartTracker from './Components/EntriesCharttracker/EntriesChartTracker';
import './App.css';
function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 178, date: '11-24-2021'}])

  function addNewEntry(entry){
    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

  return (
    <div>
      <div className='container-lg'>
        <div className='row'>
          <h3>Weight<small className='text-muted'>Tracker</small></h3>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='border-box'>
              <h3>Past Entries</h3>
              <DisplayEntries parentEntries={entries} />
            </div>
            <div className='border-box'>
              <h3>Add New Entry</h3>
              <AddEntryForm addNewEntryProperty={addNewEntry}/>
            </div>
          </div>
          <div className='col'>
            <div className='border-box'>
              <h3 className='center-text'>Weight Graph</h3>
              <EntriesChartTracker entries={entries}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
