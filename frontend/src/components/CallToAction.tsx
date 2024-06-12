import {Box, Button, Container, Grid, Typography} from '@mui/material';
import theme from '../theme/theme.ts';

type CallToActionProps = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
};


export function CallToAction({title, description, buttonText, imageUrl}: CallToActionProps) {
  return (
    <Box sx={{background: theme.palette.common.softColor,display: 'flex', }}>
      <Container maxWidth="lg" sx={{background: theme.palette.common.softColor, borderRadius: '32px',}}>
        <Grid container spacing={2} sx={{display: 'flex', alignItems: 'center', minHeight: '50vh'}}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" sx={{mb: 2, color: theme.palette.info.main}}>
              {title}
            </Typography>
            <Typography component="p" variant="h6" sx={{mb: 4}}>
              {description}
            </Typography>
            <Button size="large" variant="contained" color="secondary"
                    sx={{borderRadius: '32px', letterSpacing: '2px'}}>
              {buttonText}
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={imageUrl} alt="Hero Image" style={{width: '100%'}}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}