const logger = (store) => (next) => (action) => {
  console.log("store", store);
  console.log("next", next);
  next(action);
};

export default logger;
