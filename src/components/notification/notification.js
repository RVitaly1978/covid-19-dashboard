import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { deleteNotification } from '../../store';
import { identifiers, DEFAULT_CLOSE_NOTIFICATION_DELAY as DELAY } from '../../constants';

import { CloseButton } from '../buttons';

import st from './notification.module.scss';

const Notification = ({
  id, type, notification, delay = DELAY, deleteNotification,
}) => {
  useEffect(() => {
    let canceled = false;
    setTimeout(() => !canceled && deleteNotification(id), delay);
    return () => canceled = true;
  }, [deleteNotification, id, delay]);

  const handleClick = () => {
    deleteNotification(id);
  };

  return (
    <div className={st.view_container}>

      <div className={st.view_header}>
        <h3 className={st.view_title}>{type}</h3>

        <CloseButton
          styleClass={st.close_button}
          id={identifiers.notificationCloseBtn}
          onClick={handleClick} />
      </div>

      <div className={st.view_content}>
        {notification}
      </div>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteNotification: (id) => dispatch(deleteNotification(id))
});

export default connect(null, mapDispatchToProps)(Notification);
