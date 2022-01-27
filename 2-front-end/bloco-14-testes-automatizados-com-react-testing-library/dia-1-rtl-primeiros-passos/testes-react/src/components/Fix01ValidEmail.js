// ValidEmail.js
// Fixação 01 - Não exibir a mensagem caso o email ainda não tenha sido enviado. Para isso foi adicionada a renderização condicional na linha 17.
// Fixação 02 - Mude a cor do texto caso o email seja válido ou inválido.

import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      { (email) && <h3>{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3> } 
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
