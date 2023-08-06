import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import { useState } from "react";

function App() {
  //name, function
  const maxLoanSize = 250000;
  const [data, setData] = useState({
    homeValue: maxLoanSize,
    downPayment: maxLoanSize * 0.2,
    loanAmount: maxLoanSize * 0.8,
    loanTerm: 30,
    interestRate: 6,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="x1" sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
