import axios from 'axios';


const request = axios.create({
  baseURL:"http://192.168.1.175:8000",
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(
  (config) => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiMzM5YzFkNDM2NjVkYmJlZmRjMTY2NzU3ZTQzNzc3MjY0YmVkMGZjNTA2MzA5OGUyZWMzZGM3ODZjYjBkODczNDI5ODVkNDk3ODQyZjI0NzQiLCJpYXQiOjE2NTgyOTI0MTQuMTkyMDcxLCJuYmYiOjE2NTgyOTI0MTQuMTkyMDc2LCJleHAiOjE2ODk4Mjg0MTQuMDk4MTc1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.i6XsA2O2x33XHa06PeafAV5HfRdLayntNx5_p98Dv5tGdM98H5ta6A7Y-RjHY3vfta6vjwMAhoYJgEL-KlpZpiAD9yDDqDW9hdt1X1pzdhKT8-JHb05dl56eUNfXR4qN8zj3cgH5MrSKaNaVGBOEtiDpF4U6CwOxTB-a0DhB98YhLNSqVso4xsGFAQFORsZR21mpjFGgKzISjYngs5PoBWYkos-ae8q9YyuGXI2Yf2HzyITaAFy56MZTnBaTQOjgrifXVe551cr58RuJQ5JdTsi6RIPi4I7k2th-i-d6t6hBSmQrKbXcCo3nBF3C-NqHXwm1UVueGWhee_M82wQbKoNXT0Rnq0Jp8XEp0sNSGie_JS-8KSdtLqhYWN5AlZQOjsalgcoEU6z20OALkp0S5sifvJ51Xn1dVLOh_RnuXxTrCd7ysV4G4OTWIAiSMyegj5gUSigk4wdggaXkVMt6ZngiX1BfejWHzjuyVNPWWNlUbVK9mQIgwLrKGoK8Yk_AZ4pQUhqPmiLiVZ1Z7z3ZN-60gX-SfpEjVm3xX2j9vcqRGuO2nsLoc95OZ5JZQ2svWDEwnSeIwBTfAIy7mJM58fQKAfGb0qX4fIp0DZ-hqA9L2pud0nkynRUxAXJGN28qVLoHqiibOls2HEumFxzKG_EF24XH1cIHWgYp7Oxa9QE";
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ''}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


request.interceptors.response.use(
    (response) => response,
    (error) => {
        if (
            (error.response && error.response.status === 401) ||
            (error.response && error.response.status === 403) ||
            (error.response &&
                error.response.data.message === ':)')
        ) {
            console.log("Attack")
            // Cookies.remove(AUTH_TOKEN_KEY);
            // Router.reload();
        }
        return Promise.reject(error);
    }
);

export default request;
