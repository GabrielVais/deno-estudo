import { Router } from "https://deno.land/x/oak/mod.ts";
import { getProduct, getProducts, addProduct, updateProduct, deleteProduct } from 'controllers/products.ts';
const router = new Router();

//GET
router.get('/api/v1/products', getProducts);

router.get('/api/v1/product/:id', getProduct);

// ---------------------------------------- //

//POST
router.post('/api/v1/products', getProducts)

// ---------------------------------------- //

//PUT
router.put('/api/v1/products/:id', updateProduct);

// ---------------------------------------- //

//DELETE
router.delete('/api/v1/products/:id', deleteProduct);

// ---------------------------------------- //

export default router;