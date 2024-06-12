import {useReadingList} from '../context/ReadingListContext.tsx';
import BooksData from '../data/BooksData.tsx';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import {Fragment} from 'react';

type ReadingListItemProps = {
  id: number;
  quantity: number;
};


export function ReadingListItem({id}: ReadingListItemProps) {
  const {removeBook} = useReadingList();
  const updatedBooks = BooksData();
  if (updatedBooks === null) return null;
  const book = updatedBooks.find(book => (book.id) === id);
  if (book === undefined) return null;

  return (
    <Box>
      <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        <ListItem alignItems="flex-start" secondaryAction={
          <IconButton edge="end" aria-label="remove from reading list" onClick={() => removeBook(id)}>
            <DeleteIcon/>
          </IconButton>
        }>
          <ListItemAvatar>
            <Avatar alt={book.title} src={book.coverPhotoURL}/>
          </ListItemAvatar>
          <ListItemText
            primary={book.title + ' by ' + book.author}
            secondary={
              <Fragment>
                <Typography
                  sx={{display: 'inline', fontSize: '0.8rem'}}
                  component="span"
                  variant="body2"
                  color="primary"
                >
                  Reading level: {book.readingLevel}
                </Typography>
              </Fragment>
            }
          />

        </ListItem>
        <Divider variant="inset" component="li"/>
      </List>
    </Box>
  );

}