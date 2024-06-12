import {
  Badge,
  Box,
  Button,
  Container,
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import theme from '../theme/theme.ts';
import logo from '../assets/logo.svg';
import {useReadingList} from '../context/ReadingListContext.tsx';


export function Navbar() {
  const {openReadingList, readingListQuantity} = useReadingList();

  return (
    <Box sx={{background: theme.palette.common.softColor, display: 'flex',}}>
      <Container maxWidth="lg">
        <Box display="flex" p={2} alignItems="center" justifyContent={'center'}>
          <img src={logo} alt="Ello" width={'62px'}/>
          <Box>
            <Button color="primary">Link</Button>
            <Button color="primary">Link</Button>
          </Box>
          <Box flexGrow={1} textAlign="right">
            <Badge badgeContent={readingListQuantity} color="secondary" anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}>
              <AutoStoriesIcon color="action" onClick={openReadingList}/>
            </Badge>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}