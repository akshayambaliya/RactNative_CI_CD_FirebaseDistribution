const actionTypePrefix = 'ALBUMS/';

export const Actions = {
  ADD_REMOVE_VAR: `${actionTypePrefix}ADD_REMOVE_VAR`,
};

export const addRemoveVar = (payload) => {
  return {
    type: Actions.ADD_REMOVE_VAR,
    payload: payload,
  };
};
