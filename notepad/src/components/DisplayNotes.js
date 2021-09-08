import React, { useState } from "react";
import DisplayDate from "./DisplayDate";

const DisplayNotes = (props) => {
  const [searchNote, setSearchNote] = useState("");
  const searchNoteHandler = (event) => {
    setSearchNote(event.target.value);
    console.log(searchNote);
    props.searchNote(event.target.value);
  };

  // const filteredNotes = props.data.filter((data_elements) => {
  //   if (searchNote === "") {
  //     return data_elements;
  //   } else if (
  //     data_elements.note.toLowerCase().includes(searchNote.toLowerCase())
  //   ) {
  //     return data_elements;
  //   }
  // });
  // console.log(filteredNotes);

  return (
    <React.Fragment>
      <div className="diplay_note_container">
        <div>
          <div>
            <label htmlFor="">
              <input
                type="text"
                placeholder="Search Note..."
                onChange={searchNoteHandler}
              />
            </label>
          </div>
          {/* <div><button onClick={props.LastNodeHandler}>Last Note</button></div> */}
        </div>
        {props.data.map((data_elements) => {
          return (
            <div className="diplay_note_data" key={data_elements.id}>
              <DisplayDate dateData={data_elements.date} />
              <div className="note_description">
                <h2>{data_elements.note}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default DisplayNotes;
