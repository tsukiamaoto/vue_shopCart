const getProduct = (productId) => {
  return fetch(`http://localhost:8080/api/v1/product/${productId}`, {
    method: 'GET',
    headers: {"content-type": "application/json"}
  })
    .then(async function(res) {
      const result = await res.json()
      return result.data
    })
    .catch(function(err) {
      console.error(err)
    }) 
}

const getProducts = (query = {}) => {
  return fetch("http://localhost:8080/api/v1/product?" + new URLSearchParams({ ...query }), {
    method: 'GET',
    headers: {"content-type": "application/json"},
  })
    .then(async function(res) {
      const result = await res.json()
      return result
    })
    .catch(function(err) {
      console.error(err)
    })
}

const getTypes = () => {
  return fetch("http://localhost:8080/api/v1/product/types", {
    method: 'GET',
    headers: {"content-type": "application/json"},
  })
    .then(async function(res) {
      const result = await res.json()
      return result.data
    })
    .catch(function(err){
      console.error(err)
    })
}

export {
  getProduct,
  getProducts,
  getTypes,
}