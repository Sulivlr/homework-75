import {createAsyncThunk} from '@reduxjs/toolkit';
import {Decoded, Encoded, Message} from '../types';
import axiosApi from '../axiosApi';

export const encodeMessage = createAsyncThunk<Encoded, Message>(
  'encode/message',
  async (messageData: Message) => {
    const { data: messages } = await axiosApi.post(`/encode`, messageData);
    return messages;
  }
);

export const decodeMessage = createAsyncThunk<Decoded, Message>(
  'decode/message',
  async (messageData: Message) => {
    const {data: messages} = await axiosApi.post('/decode', messageData);
    return messages;
  }
);
