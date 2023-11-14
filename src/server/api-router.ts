import express from 'express';
import cors from 'cors';

import { connectClient } from './db';


const router = express.Router();
router.use(cors());
router.use(express.json());

router.get('/contests', async (req, res) => {
    const client = await connectClient();

    const contests = await client.collection('contests')
        .find()
        .project({
            id: 1,
            categoryName: 1,
            contestName: 1,
            _id: 0 // remove unnecessary field from request
        })
        .toArray();
    res.send({ contests });
});

router.get('/contest/:contestId', async (req, res) => {
    const client = await connectClient();
    const id = req.params.contestId;
    console.log(id)
    const contest = await client.collection('contests')
        .findOne({id});

    res.send({ contest })
});

router.post('/contest/:contestId', async (req, res) => {
    const client = await connectClient();
    const {newName} = req.body;

    const document = await client.collection('contests')
        .findOneAndUpdate({
            id: req.params.contestId
        }, {
            $push: {
                names: {
                    id: newName.toLowerCase().replace(/\s/g, '-'),
                    name: newName,
                    timestamp: new Date(),
                }
            }
        }, {
            returnDocument: 'after'
        });
    res.send({ updatedContest: document.value });
});

export default router;