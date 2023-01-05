/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Store } from 'react-notifications-component';

export const showAlert = ({ message, type }) => {
  Store.addNotification({
    message,
    type,
    dismiss: {
      duration: 4000,
    },
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    content: (
      <div className="w-100">
        <div className={`alert alert-${type}`} role="alert">
          <img src="/assets/images/cancel.svg" alt="error" />
          <span className="content ms-3">{message}</span>
        </div>
      </div>
    ),
  });
};
