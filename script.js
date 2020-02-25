import http from 'k6/http';
import { sleep, check, fail } from 'k6';
// import faker from 'faker';

const randomizer = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let userIdArr = [500000, 3023020, 2488029, 458366, 23786];
let listingIdArr = ['f3ddf2be-0e43-4ef9-956a-0027793d5c52', '4e60ae60-8d75-42e8-88ab-9ded18814a98', 'ad629252-7540-4a4a-875f-77e7babd85b5', '8e5db477-b567-41b0-b7f5-c6767bfa6b50', '1ec654ed-9098-4a0f-94fe-abe51994aec4'];

const photos = `{0: 'abc@google.com, I love hippos', 2: 'def@google.com, I love giraf'}`;
const title = 'title';
const user = 'alex';

export let options = {
  vus: 1500,
  duration: '60s',
};

// export default function() {
//   let random = randomizer(0, 5);
//   http.get(`http://localhost:1337/user?userId=${userIdArr[random]}&listingId=${listingIdArr[random]}`);
//   sleep(1);
// }

export default function () {
  const postUserId = 5000000;
  const url = `http://localhost:1337/user?userId=${postUserId}`;
  let body = {
    photos: `{0: 'abc@google.com, I love hippos', 2: 'def@google.com, I love giraf'}`,
    title: 'title',
    user: 'alex',
  };

  let data = JSON.stringify(body);
  const headers = { headers: {'Content-Type': 'application/json'} };

  let res = http.post(url, data, headers);
  sleep(1);

  check(res, {
    'post succeeded': (res) => res.status == 201,
  }) || fail('post failed');
}