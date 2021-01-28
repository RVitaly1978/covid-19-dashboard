import React from 'react';
import { connect } from 'react-redux';

import Notification from '../notification';

import st from './notification-list.module.scss';

const NotificationList = ({ notifications }) => {
  const NotificationList = notifications
    .map(({ id, type, notification }) => {
      return (
        <li key={id} className={st.view_item}>
          <Notification
            id={id}
            type={type}
            notification={notification} />
        </li>
      );
    });

  if (!notifications.length) {
    return null;
  }

  return (
    <div className={st.view_container}>
      <ul className={st.view_list}>
        {NotificationList}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ notifications=[] }) => {
  return {
    notifications: [...notifications.slice(0, 3)],
  };
};

export default connect(mapStateToProps)(NotificationList);
