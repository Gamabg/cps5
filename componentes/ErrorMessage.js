import React from 'react';

const ErrorMessage = ({ message }) => (
  <div style={{ color: 'red', margin: '16px 0' }}>
    <strong>Erro:</strong> {message}
  </div>
);

export default ErrorMessage;
