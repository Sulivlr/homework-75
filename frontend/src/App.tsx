import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectAppDecode, selectAppEncode, selectAppError, selectAppIsLoading } from './store/appSlice';
import { ChangeEvent, useState } from 'react';
import { Message } from './types';
import { encodeMessage, decodeMessage } from './store/appThunks';
import Spinner from './components/Spinner/Spinner';

const App = () => {
  const dispatch = useAppDispatch();
  const encodedMessage = useAppSelector(selectAppEncode);
  const decodedMessage = useAppSelector(selectAppDecode);
  const error = useAppSelector(selectAppError);
  const isLoading = useAppSelector(selectAppIsLoading);

  const [inputText, setInputText] = useState<Message>({
    message: '',
    password: '',
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputText((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEncode = async () => {
    if (!inputText.message || !inputText.password) {
      return;
    }
    await dispatch(encodeMessage(inputText));
  };

  const handleDecode = async () => {
    if (!inputText.message || !inputText.password) {
      return;
    }
    await dispatch(decodeMessage(inputText));
  };

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Vigenere Cipher
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={inputText.password}
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={inputText.message}
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleEncode}
              disabled={isLoading}
            >
              Encode
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleDecode}
              disabled={isLoading}
            >
              Decode
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Encoded/Decoded Text"
              multiline
              rows={4}
              value={isLoading ? <Spinner/> : (encodedMessage || decodedMessage)}
              disabled
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography color="error" align="center">
                {error}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
