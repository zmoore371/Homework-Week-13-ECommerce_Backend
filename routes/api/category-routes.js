const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const data = await Category.findAll(
    {include: {model: Product}}).catch((err) => { 
      res.json(err)
    })
    res.json(data)

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const data = await Category.findByPk(req.params.id,
    {include: {model: Product}}).catch((err) => { 
      res.json(err)
    })
    res.json(data)

});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then((newCategory) => {
      res.json(newCategory)
    })
    .catch((err) => {
      res.json(err) 
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
