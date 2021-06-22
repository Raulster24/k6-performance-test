import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10, //number of virtual users
    duration: '5s', //duration of the load
  };

  export default function () {
    const res = http.put('https://reqres.in/api/users/2', {
        "name": "morpheus",
        "job": "zion resident"
    });
  
    check(res, {
      "status is 200": (r) => r.status === 200,
      "is name correct": (r) => r.json("name") === "morpheus",
      "is job title correct": (r) => r.json("job") === "zion resident"
  });
    sleep(1);
  }