import { Paper, Typography } from '@mui/material';
import { capitalize } from 'lodash';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getBooksByTitles, moviesSearch } from '../../api/Api';

import { Doc } from '../../types/types';
import { BookDetails } from '../../templates/BookDetails/BookDetails';
import { MovieDetails } from '../../templates/MovieDetails/MovieDetails';

/*
The component below runs the details page of an object when clicking on books or movies. 
*/

export const Details = () => {
  const location = useLocation();
  const locState = location.state;
  const pathname = location.pathname;
  let searchValue = pathname.split('/')[2];
  const detailType = pathname.split('/')[1];
  if (searchValue.includes('%20')) {
    searchValue = searchValue.replaceAll('%20', ' ');
  }
  const bookRowData = locState?.rowData as Doc;
  console.log('location state', locState?.rowData as Doc);
  if (detailType === 'books') {
    return <BookDetails rowState={bookRowData} />;
  } else if (detailType === 'movies') {
    return <MovieDetails />;
  } else {
    return <></>;
  }
};
