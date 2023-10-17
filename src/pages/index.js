import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { TableOne } from "../sections/table-one";
import { DataViewOne } from "../sections/data-view1";
import { BarChart } from "../sections/bar-chart";
import { DataViewThree } from "../sections/dataView3";
import { DataViewTwo } from "../sections/data-view2";
import { DataViewFour } from "../sections/dataView4";
import { DonutChart } from "../sections/donut-chart";

const now = new Date();

const Page = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        backgroundColor: "#F5F6F8",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} lg={3}>
            <DataViewOne
              difference={12}
              positive
              sx={{ height: "fit-content", borderRadius: 1 }}
              value="$198k"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <DataViewTwo
              difference={2}
              positive={false}
              sx={{ height: "fit-content", borderRadius: 1 }}
              value="$2.4k"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <DataViewThree
              difference={2}
              positive={false}
              sx={{ height: "fit-content", borderRadius: 1 }}
              value="$2.4k"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <DataViewFour
              difference={11}
              positive={true}
              sx={{ height: "fit-content", borderRadius: 1 }}
              value="$89k"
            />
          </Grid>
          <Grid xs={12} lg={8}>
            <BarChart
              chartSeries={[
                {
                  name: "This year",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <DonutChart
              chartSeries={[15, 46, 35]}
              labels={["A", "B", "C"]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <TableOne
              orders={[
                {
                  id: "f69f88012978187a6c12897f",
                  ref: "DEV1049",
                  amount: "32 in stock",
                  price: "$ 45.99",
                  sales: 20,
                },
                {
                  id: "9eaa1c7dd4433f413c308ce2",
                  ref: "DEV1048",
                  amount: "32 in stock",
                  price: "$ 45.99",
                  sales: 20,
                },
                {
                  id: "01a5230c811bd04996ce7c13",
                  ref: "DEV1047",
                  amount: "32 in stock",
                  price: "$ 45.99",
                  sales: 20,
                  createdAt: 1554930000000,
                  status: "refunded",
                },
                {
                  id: "1f4e1bd0a87cea23cdb83d18",
                  ref: "DEV1046",
                  amount: "32 in stock",
                  price: "$ 45.99",
                  sales: 20,
                },
                {
                  id: "9f974f239d29ede969367103",
                  ref: "DEV1045",
                  amount: "32 in stock",
                  price: "$ 45.99",
                  sales: 20,
                },
                {
                  id: "ffc83c1560ec2f66a1c05596",
                  ref: "DEV1044",
                  amount: "32 in stock",
                  price: "$ 45.99",
                  sales: 20,
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Page;
