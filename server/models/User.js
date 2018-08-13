const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate')

const userSchema = new Schema({
	name : {
		type : String,
		required : true
	},
	email : {
		type : String,
		required : true
	},
	number : {
		type : String,
		required : true
	}
})

userSchema.plugin(mongoosePaginate)

const User = mongoose.model("user", userSchema);

module.exports = User;