
import express from 'express';
import authroute from './authroute';
import diaryrouter from './diaryroutes';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from './../swagger.json';


const router = express.Router();
router.get("/", (req, res) => {
    return res.send({message: 'Welcome to MYDiary'});
})
router.get("/api/v1", (req, res) => {
    return res.send({message: 'Welcome to MYDiary API'});
})

//route for swagger documentation
router.use('/api-docs',  (req, res) => { 
    swaggerUI.serve, swaggerUI.setup(swaggerDocument)
    res.status(200).json({message: 'api-doc successfull'})
});

router.use("/api/v1/auth/" , authroute );
router.use("/api/v1/entries/" , diaryrouter);


router.use((req, res) => {
	res.status(404);
	return res.status(404).json({error: 'Page Not Found'});
});

/* istanbul ignore next */
router.use(( req, res) => {
	res.status(500);
	return res.status(500).json({error: 'Server error'});
});

export default router;

