import { Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomUserMenu = styled(Stack)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px;
`;

export const NavButton = styled(Button)`
  width: 100px;
  margin: 0;

  :hover {
    background-color: black;
  }
`;
