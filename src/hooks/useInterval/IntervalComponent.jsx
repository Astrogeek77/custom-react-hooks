const App = () => {
  // Grabs user data every 7500ms or when user changes
    
    // a dummy component to showcase realtime usecase
  useInterval(() => {
    if (user) {
      getUserInfo(user);
    }
  }, 7500, true, [user]);
};
