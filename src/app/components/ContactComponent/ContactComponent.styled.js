import styled from 'styled-components';
import { Link as linkContact } from 'react-router-dom';
import { LinkedIn } from 'react-icons/fa';

export const Contact = styled.li`
  display: flex;
  flex-direction: column;
  gap: 11px;
  line-height: 1.4;

  h4 {
    white-space: nowrap;
    font-size: 18px;
    font-weight: 800;
  }

  p {
    font-size: 18px;
  }
`;

// export const StyledLinkedInIcon = styled(LinkedIn)`
//   width: 32px;
//   height: 32px;
//   color: #0076b2;
//   display: block;
//   svg {
//     width: 100%;
//     height: 100%;
//   }
// `;
