import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10, //number of virtual users
    duration: '5s', //duration of the load
  };

  export default function () {
    const res = http.post('https://reqres.in/api/users?page=2', {
        "name": "morpheus",
        "job": "leader"
    });
  
    check(res, {
      "status is 200": (r) => r.status === 201,
      "is name correct": (r) => r.json("name") === "morpheus",
      "is job title correct": (r) => r.json("job") === "leader"
  });
    sleep(1);
  }