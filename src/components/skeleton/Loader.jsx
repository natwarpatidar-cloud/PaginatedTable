import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Loader() {
  return (
    <Box sx={{ width: 800 }}>
      <Skeleton height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={70} />
    </Box>
  );
}