import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const NavStack = styled(Stack)`
  gap: 10px;
`;

export const NavButton = styled(Button)`
  width: 100px;
  margin: 0;

  :hover {
    background-color: black;
  }
`;
