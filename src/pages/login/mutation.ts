// import { User } from "./login";
// import Axios from "axios";

// export const postData = async (user: User) => {
//   console.log(
//     `From mutations: | username: ${user.username} | password: ${user.password}`
//   );
//   const res = await fetch(`http://localhost:4500/users/login`, {
//     method: "POST",
//     body: `{"username": ${user.username}, "password": ${user.password}}`,
//   });
//   console.log(res.json());
// };

// // export const postData = (user: User) => {
//   Axios.post("http://localhost:4500/users/login", {
//     username: user.username,
//     password: user.password,
//   })
//     .then(function (response) {
//       console.log(response);
//       return response;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// // };

// // export const postData = async (user: User) => {
// //   return await Axios.post("http://localhost:4500/users/login", {
// //     username: user.username,
// //     password: user.password,
// //   });
// // };
