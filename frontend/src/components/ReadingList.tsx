import {Box, Drawer, Stack, Typography} from '@mui/material';
import {useReadingList} from '../context/ReadingListContext.tsx';
import {ReadingListItem} from './ReadingListItem.tsx';
import theme from '../theme/theme.ts';


type ReadingListProps = {
  isOpen: boolean;
};


export function ReadingList({isOpen}: ReadingListProps) {
  const {closeReadingList, readingListItems} = useReadingList();

  return (
    <Drawer open={isOpen} anchor={'right'} onClose={closeReadingList}>
      <Typography variant="h5" color={'white'} gutterBottom sx={{fontWeight: 'bold', textAlign: 'center', padding: '10px', background: theme.palette.secondary.main}}>
        Reading List
      </Typography>
      <Stack spacing={2}>
        {readingListItems.length > 0 ? (
          <Box>
            {readingListItems.map(item => (
              <ReadingListItem key={item.id} {...item} />
            ))}
          </Box>
        ) : (
          <Box>
            <Typography variant="body1" sx={{textAlign: 'center', padding: '10px'}}>You have no books in the reading list</Typography>
          </Box>
        )}
      </Stack>
    </Drawer>
  );
}