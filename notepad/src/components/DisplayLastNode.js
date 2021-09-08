import React from "react";
import DisplayNotes from "./DisplayNotes";

const DisplayLastNode = (props) => {
    console.log(props.data);
    const lastNode = [props.data.shift()];
    console.log(lastNode);

    return (
        <React.Fragment>
            <DisplayNotes data={lastNode} />
        </React.Fragment>
      );
}
 
export default DisplayLastNode;