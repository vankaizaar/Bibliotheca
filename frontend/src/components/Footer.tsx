import theme from '../theme/theme.ts';
import {Box, Container, Typography} from '@mui/material';


export function Footer() {
  return (
    <Box sx={{background: theme.palette.info.main, display: 'flex',}}>
      <Container maxWidth="lg">
        <Box display="flex" p={1} alignItems="center" justifyContent={'center'}>
          <Typography color={'white'} variant="caption" sx={{textTransform: 'uppercase', mr: 2}}>
            Ello @copyright 2024
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}