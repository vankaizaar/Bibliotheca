import theme from './theme/theme.ts';
import {Container, CssBaseline, ThemeProvider} from '@mui/material';
import '@fontsource-variable/mulish';
import bannerImage from './assets/banner.png';
import {CallToAction} from './components/CallToAction.tsx';
import {Navbar} from './components/Navbar.tsx';
import {Books} from './components/Books.tsx';
import {ReadingListProvider} from './context/ReadingListContext.tsx';
import {Footer} from './components/Footer.tsx';

function App() {

  return (
    <ReadingListProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme/>
        <Container maxWidth={false} disableGutters={true} sx={{height: '100vh'}}>
          <Navbar/>
          <CallToAction
            title="Confident, Independent Reading"
            description="Ello is your child’s read-along companion who listens, teaches, and transforms them into an enthusiastic reader. For Kindergarten to 3rd Grade."
            buttonText="Learn More"
            imageUrl={bannerImage}
          />
          <Books/>
          <Footer/>
        </Container>
      </ThemeProvider>
    </ReadingListProvider>
  );
}

export default App;
