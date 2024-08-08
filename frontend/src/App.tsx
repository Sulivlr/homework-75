import {Box, Button, Container, Grid, TextField, Typography} from '@mui/material';

const App = () => {
  return (
    <>
      <Container maxWidth="md">
        <Box mt={5}>
          <Typography variant="h4" align="center" mb={2}>
            Vigenere Cipher
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained">
                Encode
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained">
                Decode
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Text"
                multiline
                rows={4}
                disabled
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default App;
