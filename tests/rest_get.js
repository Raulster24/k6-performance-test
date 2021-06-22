import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10, //number of virtual users
  duration: '30s', //duration of the load
};

export default function () {
  const res = http.get('https://reqres.in/api/users?page=2');

  check(res, {
    "status is 200": (r) => r.status === 200,
    "is page number correct": (r) => r.json("page") === 2,
});
  sleep(1);
}