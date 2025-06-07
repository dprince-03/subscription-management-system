import { SERVER_URL } from '../config/env.js';
import { workflowClient } from '../config/upstash.js';
import Subscription from '../models/subscription.models.js';

const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionID: subscription.id,
            },
            headers: {
                'Content-Type': 'application/json',
            },
            retries: 0,
        });

        res.status(201).json({
            success: true,
            data: subscription,
        });
    } catch (error) {
        next(error);
    }
};

const getUserSubscription = async (req, res, next) => {
    try {
        if (req.user._id != req.params.id) {
            const error = new Error('You are not authorized to access this account');
            error.status = 401;
            throw error;
        }

        const subscription = await Subscription.find({ user: req.params.id });
        res.status(200).json({
            success: true,
            data: subscription,
        });
    } catch (error) {
        next(error);
    }
};

export { createSubscription, getUserSubscription};