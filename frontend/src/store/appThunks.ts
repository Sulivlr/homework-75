import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Message} from '../types';

export const encodeMessage = createAsyncThunk<Message[], Message>(
  'encode/message',
  async (messageData: Message) => {
    const { data: messages } = await axios.post(`/encode`, messageData);
    return messages;
  }
);

export const decodeMessage = createAsyncThunk<Message[], Message>(
  'decode/message',
  async (messageData: Message) => {
    const {data: messages} = await axios.post('/decode', messageData);
    return messages;
  }
);
