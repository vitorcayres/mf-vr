import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getProducts } from "../Backend";
import { URL_BACKEND } from "../../constants";

describe("Service get products", () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
    jest.clearAllMocks();
  });

  it("should fetch products successfully", async () => {
    const queryParams = "?limit=10";
    const mockData = {
      products: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
      ],
    };

    mock.onGet(`${URL_BACKEND}/products${queryParams}`).reply(200, mockData);

    const response = await getProducts(queryParams);

    expect(response).toEqual(mockData);
  });

  it("should handle errors correctly", async () => {
    const queryParams = "?limit=10";

    mock.onGet(`${URL_BACKEND}/products${queryParams}`).reply(500);

    const response = await getProducts(queryParams);

    expect(response).toEqual([]);
  });
});
