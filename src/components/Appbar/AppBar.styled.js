import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

export const CustomBox = styled(Box)`
  width: 75%;
  margin: auto;
`;
export const CustomStack = styled(Stack)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-content: center;

`;

export const CustomAppBar = styled(AppBar)`
  background-color: #5fb259;
`;
