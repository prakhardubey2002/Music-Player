import React from "react";

const Action = () => {
  const fav=()=>{
    console.log('Music log')
  }
  return (
    <div className="actions">
      <img src="https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=486&q=80" />
      <div className="album_meta">
        <span className="alb_label">ALBUM</span>
        <h1>Delva sanctim in photo</h1>
      </div>
      <div className="action_btns">
        <button onClick={() => fav()} className="fav_btn">
          <i className="far fa-heart fa-2x"></i>
        </button>
        <button onClick={() => fav()} className="fav_btn">
          <i className="far fa-arrow-alt-circle-down fa-2x"></i>
        </button>
        <button onClick={() => fav()} className="fav_btn">
          <i className="fas fa-ellipsis-h fa-2x"></i>
        </button>
      </div>
    </div>
  );
};

export default Action;
