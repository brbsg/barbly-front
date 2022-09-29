import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";

export default function Url() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <LogoText>Barbly</LogoText>
      </Toolbar>
    </AppBar>
  );
}

export const LogoText = styled.div`
  font-size: 40px;
  font-family: "Audiowide";
  margin: 25px 15px;
`;
