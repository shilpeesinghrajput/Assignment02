import PropTypes from 'prop-types';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';

import {
  Avatar,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';

export const DataViewThree = (props) => {
  const { difference, positive = false, sx, value } = props;

  return (
    <Card sx={sx}>
    <CardContent>
      <Stack
        direction="row"
        justifyContent="flex-start"
        spacing={1}
      >
      <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 100,
              width: 100
            }}
          >
       <SvgIcon sx={{height:56,width:56}}>
              <ListBulletIcon />
            </SvgIcon>
          </Avatar>
        <Stack spacing={.2} paddingTop="20px">
          <Typography
            color="text.secondary"
          fontSize="15px"
          >
           Balance
          </Typography>
          <Typography variant="h5">
            {value}
          </Typography>
          <Stack
            alignItems="center"
            direction="row"
            spacing={0.5}
            sx={{fontSize:10}}
          >
            <SvgIcon
              color={'error'}
              fontSize="inherit"
            >
              {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </SvgIcon>
            <Typography
              color={positive ? 'success.main' : 'error.main'}
              variant="inherit"
            >
              {difference}%
            </Typography>
            <Typography
            color="text.secondary"
            variant="inherit"
            noWrap="true"
          >
            this month
          </Typography>
          </Stack>
        </Stack>
       
      </Stack>
      
    </CardContent>
  </Card>
  );
};

DataViewThree.propTypes = {
  value: PropTypes.number.isRequired,
  sx: PropTypes.object
};
