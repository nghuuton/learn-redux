// import store from "./store";
// import { bugAdded, bugResolved, bugDelete } from "./actions";

// // const unsubcribe = store.subscribe(() => {
// //   console.log("store change", store.getState());
// // });
// store.dispatch(bugAdded("BUG1"));
// store.dispatch(bugResolved(1));
// store.dispatch(bugDelete(1));
// // unsubcribe();
// // store.dispatch({
// //   type: "bugRemoved",
// //   payload: {
// //     id: 1,
// //   },
// // });

// console.log(store.getState());

import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  getUnResolved,
  bugAssignedToUser,
  getBugUser,
} from "./store/bugs";
import { addProject } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.subscribe(() => {
  console.log("Store change");
});
store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(bugAdded({ description: "BUG 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(addProject({ name: "Project 1" }));

const bugsUnresolved = getUnResolved(store.getState());
console.log(bugsUnresolved);
const bugUsers = getBugUser(1)(store.getState());
console.log(bugUsers);
