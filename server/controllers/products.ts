interface Product {

	id: string;
	name: string;
	description: string;
	price:number;

}

let products: Product[] = [
{
	id:"1",
	name:"Product One",
	description:"This is product One",
	price:29.99,
},
{
	id:"2",
	name:"Product Two",
	description:"This is product Two",
	price:29.99,
},
{
	id:"3",
	name:"Product Three",
	description:"This is product Three",
	price:29.99,
},
{
	id:"4",
	name:"Product Four",
	description:"This is product Four",
	price:29.99,
},
{
	id:"5",
	name:"Product Five",
	description:"This is product Five",
	price:29.99,
}

];


//@add single product
//@route POST /api/v1/products
const addProduct = ({ response }: {response:any}) =>{

	response.body = 'add'

}

//@get multiple product
//@route POST /api/v1/products
const getProducts = ({ response }: {response:any}) =>{

	response.body = {

		success:true,
		data:products

	}

}

const getProduct = ({ response }: {response:any}) =>{

	response.body = {

		success:true,
		data:products

	}

}

const updateProduct = ({ response }: {response:any}) =>{

	response.body = 'update';

}


const deleteProduct = ({ response }: {response:any}) =>{

	
	response.body = 'delete';
}


export { getProducts, addProduct, deleteProduct, updateProduct }