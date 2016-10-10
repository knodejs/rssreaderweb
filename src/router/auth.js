export default {
  login(token,userdata) {
      localStorage.setItem('token',token)
      localStorage.setItem('user', JSON.stringify(userdata))
  },
  logout (cb){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  loggedIn () {
    return !!localStorage.token
  }
}
