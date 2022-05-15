const loginUser = (payload = {}) => {
  return fetch("/api/v1/user/login", {
    method: 'POST',
    headers: {"content-type": "application/json"},
    body: JSON.stringify(payload)
  })
    .then(async function(res) {
      const result = await res.json()
      return result
    })
    .catch(function(err) {
      console.error(err)
    })
}

const logoutUser = () => {
  return fetch("/api/v1/user/logout", {
    method: 'POST',
    headers: {"content-type": "application/json"}
  })
    .then(async function(res) {
      const result = await res.json()
      return result
    })
    .catch(function(err) {
      console.error(err)
    })
}

const signupUser = (payload) => {
  return fetch("/api/v1/user/signup", {
    method: 'POST',
    headers: {"content-type": "application/json"},
    body: JSON.stringify(payload)
  })
    .then(function(res) {
      return res.data
    })
    .catch(function(err) {
      console.error(err)
    })
}

export {
  loginUser,
  logoutUser,
  signupUser
}