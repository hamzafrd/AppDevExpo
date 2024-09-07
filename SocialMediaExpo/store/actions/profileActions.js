export const createProfile = value => {
  return {
    type: 'CREATE_PROFILE',
    payload: value,
  };
};

export const loginUser = value => {
  return {
    type: 'LOGIN',
    payload: value,
  };
};
