// Despite the name "useApi", this is a class-based API client, not a React hook

interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

interface ApiError {
  message: string;
  status?: number;
  data?: any;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions<T = any> {
  method: HttpMethod;
  endpoint: string;
  data?: T;
  headers?: Record<string, string>;
}

class useApi {
  private baseUrl: string;
  private debug: boolean;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    this.debug = process.env.IS_PRODUCTION === 'true' ? false : true;
  }

  public async request<RequestData = any, ResponseData = any>(
    options: RequestOptions<RequestData>
  ): Promise<ResponseData> {
    const { method, endpoint, data, headers = {} } = options;
    const url = `${this.baseUrl}${endpoint}`;

    try {
      const requestOptions: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      };

      if (method !== 'GET' && data) {
        const requestData = this.debug ? { ...data } : data;
        requestOptions.body = JSON.stringify(requestData);
      }

      const response = await fetch(url, requestOptions);
      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        const error: ApiError = {
          message:
            responseData?.message ||
            `Request failed with status ${response.status}`,
          status: response.status,
          data: responseData,
        };
        throw error;
      }

      return responseData;
    } catch (error) {
      if ((error as ApiError).status) {
        throw error;
      } else {
        console.error('API request error:', error);
        throw {
          message:
            error instanceof Error
              ? error.message
              : 'Unknown API error occurred',
          status: 0,
        };
      }
    }
  }
}

// Create and export a singleton instance
export default new useApi();
