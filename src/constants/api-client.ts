/**
 * @type {'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'connect' | 'options' | 'trace'}
 * Possibles http request methods
 */
export type HttpMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'head'
  | 'connect'
  | 'options'
  | 'trace';

/**
 * @interface ApiRequestOptions
 * Define the options for a request.
 * Default options are defined in the ApiService class.
 */
export interface ApiRequestOptions {
  // body of the request
  body?: unknown;

  // headers of the request
  headers?: { [key: string]: string };
}

/**
 * @class
 * Centralize all api requests
 */
class ApiService {
  private static instance: ApiService;

  /**
   * Singleton method to get the only one instance of the class
   * @returns {ApiService} instance of the api service
   */
  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  /**
   * Global api request with options
   * @param {HttpMethod} method http request method
   * @param {string} endpoint api endpoint
   * @param {ApiRequestOptions} options options of the request
   * @returns {Promise<unknown>} A promise resolving result of the api request
   */
  public request<T>(
    method: HttpMethod,
    endpoint: string,
    options: ApiRequestOptions = {}
  ): Promise<T> {
    const url = `https://api.le-systeme-solaire.net/rest/${endpoint}`;

    return new Promise((resolve, reject) => {
      fetch(url, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...(!!options.body && { body: JSON.stringify(options.body) }),
      })
        .then(async (response: Response) => {
          const resJson = await response.json();
          // response.ok is true if the http code is in the range 200 - 299
          if (!response.ok) {
            reject(resJson);
            return;
          }
          return resJson;
        })
        // Success return json of body
        .then((value) => {
          resolve(value as T);
        })
        // Catch error
        .catch(reject);
    });
  }
}

export default ApiService;
