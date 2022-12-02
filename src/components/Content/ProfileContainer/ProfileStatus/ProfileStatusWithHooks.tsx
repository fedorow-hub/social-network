import React, { useEffect, useState } from 'react';

type ProfilePropsType ={
  status: string
  updateUserStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<ProfilePropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <b>Status:</b>
          <span onDoubleClick={activateEditMode}>{status || '-------'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onChangeStatus}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
