import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Scrollbar } from "../components/scrollbar";
import React from "react";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";

export const TableOne = (props) => {
  const { orders = [], sx } = props;
  const [frame, setTimeFrame] = React.useState("quaterly");

  const handleChange = (event) => {
    setTimeFrame(event.target.value);
  };
  return (
    <Card sx={sx}>
      <CardHeader
        action={
          <>
            {" "}
            <FormControl
              sx={{ m: 0, p: 0, backgroundColor: "white" }}
              variant="standard"
            >
              <OutlinedInput
                id="standard-adornment-amount"
                placeholder="Search"
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <SvgIcon fontSize="small">
                        <MagnifyingGlassIcon />
                      </SvgIcon>
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={frame}
                label="frame"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"quaterly"}>Monthly</MenuItem>
                <MenuItem value={"monthly"}>Quaterly</MenuItem>
                <MenuItem value={"yearly"}>Yearly</MenuItem>
              </Select>
            </FormControl>
          </>
        }
        title="Product Sell"
      />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 800 }}>Product Name</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell sortDirection="desc">Price</TableCell>
                <TableCell>Total Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                return (
                  <TableRow hover key={order.id}>
                    <TableCell>
                      <ListItem divider={false}>
                        <ListItemAvatar>
                          {
                            <Box
                              sx={{
                                borderRadius: 1,
                                backgroundColor: "neutral.200",
                                height: 48,
                                width: 48,
                              }}
                            />
                          }
                        </ListItemAvatar>
                        <ListItemText
                          primary={"Abstract 3D"}
                          primaryTypographyProps={{ variant: "subtitle1" }}
                          secondary={`idhar ka udhar se udhar ka idhar`}
                          secondaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                    </TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>{order.price}</TableCell>
                    <TableCell>{order.sales}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
    </Card>
  );
};

TableOne.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};
