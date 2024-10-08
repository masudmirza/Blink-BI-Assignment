import { Router } from 'express';
import { Service } from 'typedi';
import CustomerRoute from './customer.route';

@Service()
export default class AppRoutes {
    public router: Router;

    constructor(private customerRoute: CustomerRoute) {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use('/customers', this.customerRoute.router);
    }
}
