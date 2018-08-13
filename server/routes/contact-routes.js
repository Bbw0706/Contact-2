const router = require("express").Router();
const User = require("../models/User.js");

router.get('/', (req,res) => {
	const {page,perpage,sort} = req.query;

	User.paginate({}, {page : parseInt(page), limit: parseInt(perpage), sort:{name : parseInt(sort)}})
	.then(result => res.send(result.docs))
})

router.post('/', (req,res) => {
	User.create(req.body)
	.then(data => res.send(data))
})

router.get('/person/:id', (req,res) => {
	const id = req.params.id

	User.findById(id)
	.then(data => res.send(data))
})

router.put('/person/:id', (req,res) => {
	const id = req.params.id;
	const {name, email, number} = req.body

	User.findByIdAndUpdate(id, {$set : {name, email, number}})
	.then(data => {
		User.find({}).sort({name : 1})
		.then(data => res.send(data))
	})
})

router.delete('/person/:id', (req,res) => {
	const id = req.params.id;

	User.findByIdAndDelete(id)
	.then(data => res.send(data))
})


module.exports = router;

