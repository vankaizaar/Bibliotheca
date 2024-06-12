import BooksData from '../data/BooksData.tsx';
import {GridView} from './GridView.tsx';
import theme from '../theme/theme.ts';
import {Box, Container, Grid, TextField, FormControlLabel, Checkbox, FormControl, Typography} from '@mui/material';
import React, {useState} from 'react';

export function Books() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReadingLevels, setSelectedReadingLevels] = useState<string[]>([]);

  const updatedBooks = BooksData();

  if (updatedBooks === null) return null;

  const filteredBooks = updatedBooks.filter((book) => {
    // Filter by search term
    if (searchTerm.trim() !== '' && !book.title.toLowerCase().includes(searchTerm.toLowerCase()) && !book.author.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Filter by reading level
    if (selectedReadingLevels.length > 0 && !selectedReadingLevels.includes(book.readingLevel)) {
      return false;
    }

    return true;
  });

  const handleReadingLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, checked} = event.target;
    if (checked) {
      setSelectedReadingLevels([...selectedReadingLevels, value]);
    } else {
      setSelectedReadingLevels(selectedReadingLevels.filter((level) => level !== value));
    }
  };

  const uniqueReadingLevels = [...new Set(updatedBooks.map((book) => book.readingLevel))];

  return (
    <Box sx={{background: theme.palette.common.lightBgColor, display: 'flex', py: 2}}>
      <Container maxWidth="lg" sx={{background: theme.palette.common.white, py: 3, borderRadius: 2}}>
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold',}}>
          Search books by title or author
        </Typography>
        <TextField
          label="Search Books by Title or Author"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{mb: 2, width: '100%'}}
        />
        <Typography variant="h5" gutterBottom sx={{fontWeight: 'bold',}}>
          Filter books by reading level
        </Typography>
        <FormControl sx={{mb: 4, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          {uniqueReadingLevels.map((level) => (
            <FormControlLabel
              key={level}
              control={
                <Checkbox
                  checked={selectedReadingLevels.includes(level)}
                  onChange={handleReadingLevelChange}
                  value={level}
                />
              }
              label={level}
            />
          ))}
        </FormControl>
        <Grid container spacing={3}>
          {filteredBooks.map((book) => (
            <GridView key={book.id} book={book} index={book.id}/>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}