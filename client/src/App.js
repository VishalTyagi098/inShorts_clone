import Header from './Components/Header'
import InfoHeader from './Components/InfoHeader'
import {Box,styled} from '@mui/material';
import Articles from './Components/Articles';


// styled components

const StyledContainerBox=styled(Box)`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:100%;
`;

const StyledBox=styled(Box)`
  width:60%;
  margin-top:2%
`;

function App() {
  return (
    <StyledContainerBox>

      <Header/>

      <StyledBox>
        <InfoHeader/>
      </StyledBox>

      <Articles/>

    </StyledContainerBox>
  );
}

export default App;
