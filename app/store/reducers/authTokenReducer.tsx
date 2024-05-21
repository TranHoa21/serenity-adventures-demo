

// Định nghĩa reducer cho trạng thái đăng nhập
const authTokenReducer = (state = { userId: null, token: null }, action: any) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return { ...state, userId: action.payload.userId, token: action.payload.token };
    default:
      return state;
  }
};

export default authTokenReducer