import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import {useReadingList} from '../context/ReadingListContext.tsx';

interface Book {
  id: number;
  title: string;
  author: string;
  readingLevel: string;
  coverPhotoURL: string;
}

type GridViewProps = {
  book: Book;
  index: number;
};


export function GridView({book, index}: GridViewProps) {
  const {getBookQuantity, addBook, removeBook} = useReadingList();
  const quantity = getBookQuantity(index);
  return (
    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index}>
      <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        {book.coverPhotoURL && (
          <CardMedia
            height="180"
            loading="lazy"
            component="img"
            image={book.coverPhotoURL}
            alt={book.title}
          />
        )}
        <CardContent>
          <Typography variant="h6" component="p">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.readingLevel}
          </Typography>
        </CardContent>
        <CardActions sx={{mt: 'auto'}}>
          {quantity == 0 ? (
            <Button variant={'contained'} size="small" color="info" fullWidth={true} onClick={() => addBook(index)}>
              Add to reading list
            </Button>
          ) : (
            <Button variant={'contained'} size="small" color="error" fullWidth={true} onClick={() => removeBook(index)}>
              Remove from reading list
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}