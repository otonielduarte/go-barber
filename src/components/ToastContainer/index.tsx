import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast>
        <FiAlertCircle size={20} />
        <div>
          <strong>Error</strong>
          <p>Error mensagem</p>
        </div>
      </Toast>
      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default ToastContainer;
