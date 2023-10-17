import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const DataViewTwo = (props) => {
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
            <SvgIcon sx={{height:56,width:56}} >
              <UsersIcon/>
            </SvgIcon>
          </Avatar>
        <Stack spacing={.2} paddingTop="20px">
          <Typography
            color="text.secondary"
          fontSize="15px"
          >
            Orders
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

DataViewTwo.propTypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  value: PropTypes.string.isRequired,
  sx: PropTypes.object
};

