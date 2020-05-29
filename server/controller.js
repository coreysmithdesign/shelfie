module.exports = {
  allProducts: (req, res) => {
    const dbInstance = req.app.get('db') 
    
    dbInstance.get_inventory()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send(err)
        console.log(err)
      })
  },
  
  addProduct: (req, res) => {
    const {img, name, price} = req.body
    const dbInstance = req.app.get('db')

    dbInstance.create_product([img, name, price])
      .then(products => {
        res.status(200).send(products)
      })
      .catch(err => {
        res.status(500).send(err)
        console.log(err)
      })
  }
}
