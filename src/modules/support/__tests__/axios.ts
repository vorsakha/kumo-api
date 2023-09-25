import { Intervals } from "@/modules/resources/interfaces/resources.interface";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mockData = [
  1567382400000,
  "10000",
  "10412.65",
  "10000",
  "10391.63",
  "3096.291",
  1567987199999,
  "32096280.44997",
  3754,
  "0.039",
  "393.35627",
  "0",
];

const ticketResponse = new Array(10).fill(mockData);

const mockSymbol = [{ pair: "BTCUSDT" }];

const createApiTicketMock = (intervals: Intervals[]) => {
  const mock = new MockAdapter(axios);

  intervals.forEach((interval) => {
    mock
      .onGet(
        `https://fapi.binance.com/fapi/v1/klines?symbol=BTCUSDT&limit=320&interval=${interval}`,
      )
      .reply(200, ticketResponse);
  });

  return mock;
};

const createApiSymbolMock = () => {
  const mock = new MockAdapter(axios);
  mock
    .onGet("https://fapi.binance.com/fapi/v1/exchangeInfo")
    .reply(200, { symbols: mockSymbol });
  return mock;
};

export { createApiTicketMock, createApiSymbolMock };
