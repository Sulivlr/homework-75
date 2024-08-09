import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Decoded, Encoded, Message} from '../types';

export const encodeMessage = createAsyncThunk<Encoded, Message>(
  'encode/message',
  async (messageData: Message) => {
    const { data: messages } = await axios.post<Encoded>(`/encode`, messageData);
    return messages;
  }
);

export const decodeMessage = createAsyncThunk<Decoded, Message>(
  'decode/message',
  async (messageData: Message) => {
    const {data: messages} = await axios.post<Decoded>('/decode', messageData);
    return messages;
  }
);
