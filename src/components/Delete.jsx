import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Delete = () => {
    const [isDelete, setDelete] = useState(false);

    const handleDelete = () => {
        setDelete(true);
    };

    return (
      <div>
        {!isDelete && (
          <button onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>
    );
}

export default Delete;