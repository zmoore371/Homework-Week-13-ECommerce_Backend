const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const data = await Tag.findAll( {include: {model: Product}}).catch((err) => {
    res.json(err);
  })
  res.json(data)
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const data = await Tag.findByPk(req.params.id, { include: {model: Product}}).catch((err) => {
    res.json(err);
  })
  res.json(data);
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then((newTag) => {
      res.json(newTag)
    })
    .catch((err) => {
      res.json(err)
    })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag)  
    })
    .catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then((deletedTag) => {
      res.json(deletedTag)
    })
    .catch((err) => res.json(err))
});

module.exports = router;
