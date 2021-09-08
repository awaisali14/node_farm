import React, { useState } from "react";
import AddNote from "./components/AddNote";
import DisplayLastNode from "./components/DisplayLastNode";
import DisplayNotes from "./components/DisplayNotes";

const initial_data = [
  {
    id: "1",
    note: "Learn React",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    note: "Learn React Native",
    date: new Date(2021, 2, 12),
  },
];
function App() {
  const [data, setNewData] = useState(initial_data);
  const [searchResults, setSearchResults] = useState("");
  const [searchTerms, setSearchTerms] = useState(null);
  const [lastNode, setLastNode] = useState(false);

  const onSaveDataHandler = (data) => {
    console.log(data);
    const newdata = {
      ...data,
      id: Math.random().toString(),
    };

    setNewData((prevdata) => {
      const updatedData = [newdata, ...prevdata];
      console.log(updatedData);
      return updatedData;
    });
    if(lastNode === true){
      setLastNode(false);
    }
    
  };
  const LastNodeHandler = () => {
    // console.log(Node);
    // const getlastNode = Node[0];
    // setLastNode([getlastNode]);
    // console.log(lastNode);
    if(lastNode === true){
      setLastNode(false);
    }
    else {
      setLastNode(true);
    }

    console.log(lastNode);


  }
  const searchNoteHandler = (searchValue) =>{
    console.log(searchValue);
    setSearchTerms(searchValue);
    if (searchValue.trim() !== ""){
      const newNoteData= data.filter((data_value)=>{
        return data_value.note.toLowerCase().includes(searchValue.toLowerCase())
      })
    setSearchResults(newNoteData);
    

    }
    else {
      setSearchResults(data);
    }


  }
  return (
    <React.Fragment>
      <AddNote onSaveData={onSaveDataHandler} />
      {
        !lastNode && (<DisplayNotes data={searchTerms.length < 1 ?  data: searchResults }  LastNodeHandler={LastNodeHandler} searchNote={searchNoteHandler} />)
      }
      {
        lastNode && (<DisplayLastNode data={data}/>)
      }
      
    </React.Fragment>
  );
}

export default App;
