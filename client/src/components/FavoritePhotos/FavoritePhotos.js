import React from "react";

import { Input, FormBtn } from "../../components/TravelForm";

const FavoritePhotos = props => {
  const noteId = `${props.id}`;
      return (
      <form>
      <FormBtn
        onClick={(event) => props.handleFormSubmit(event, props.id)}
      >
        Save Note
      </FormBtn>
      {/* <button
        style={{ float: "right", margin: 7, color: "#2F4F4F" }} className="btn btn-danger" onClick={(event) => props.deleteNoteFromArticle(event, props._id)}
      > */}

        Delete Note

      {/* </button> */}
      <Input
        value={props.note}
        onChange={props.handleInputChange}
        name={props.notes}
        placeholder="Add your fashion note here"
      />     
      </form>
      )
    }


export default FavoritePhotos;