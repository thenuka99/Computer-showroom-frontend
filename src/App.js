import React, { useEffect, useState } from 'react';
import { getComputers } from '../src/services/taskServices';
import ComputerCard from './components/ComputerCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const App = () => {

  const [computers, setComputers] = useState([]);
  const [page, setPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  // Effects
  // when loading page
  useEffect(() => {
    loadComputers();
  }, []);

  // load posts
  const loadComputers = async () => {
    try {
      const response = await getComputers(page);
      console.log(response.data.data);
      setComputers(response.data.data.docs);
      setPageNumber(response.data.data.totalPages);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {
        computers.map((computer) => {
          <Grid item key={computer._id} xs={12} sm={6} md={4} lg={3}>
            <ComputerCard Computer={computer} />
          </Grid>
        })
      }
      <ComputerCard />

      <div className="pagination_container">
        <div className="pagination">
          <Stack spacing={2}>
            <Pagination
              onChange={(e, value) => setPage(value - 1)}
              shape="rounded"
              variant="outlined"
              count={pageNumber}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default App;
