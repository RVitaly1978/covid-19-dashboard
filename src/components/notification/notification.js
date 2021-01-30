import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { deleteNotification } from '../../store';
import { identifiers, DEFAULT_CLOSE_NOTIFICATION_DELAY as DELAY } from '../../constants';

import Button from '../button';
import { CloseIcon } from '../icons';

import st from './notification.module.scss';

const Notification = ({
  id, type, notification, delay = DELAY, deleteNotification,
}) => {

  useEffect(() => {
    const timeout = setTimeout(() => deleteNotification(id), delay);
    return () => clearTimeout(timeout);
  }, [deleteNotification, id, delay]);

  const handleClick = () => {
    deleteNotification(id);
  };

  return (
    <div className={st.view_container}>

      <div className={st.view_header}>
        <h3 className={st.view_title}>{type}</h3>

        <Button
          styleClass={st.close_button}
          id={identifiers.notificationCloseBtn}
          onClick={handleClick}
          icon={<CloseIcon styleClass={st.close_button_icon} />} />
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
