import {ChangeEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectAppDecode, selectAppEncode, selectAppError} from '../store/appSlice';
import {Message} from '../types';
import {decodeMessage, encodeMessage} from '../store/appThunks';
import {Box, Button, Container, Grid, TextField, Typography} from '@mui/material';

const CodeForm = () => {
  const dispatch = useAppDispatch();
  const encodedMessage = useAppSelector(selectAppEncode);
  const decodedMessage = useAppSelector(selectAppDecode);
  const error = useAppSelector(selectAppError);

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
        <Typography variant="h4" align="center" mb={4}>
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
            >
              Encode
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleDecode}
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
              value={encodedMessage || decodedMessage}
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

export default CodeForm;