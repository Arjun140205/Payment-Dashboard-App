import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    getStats(): {
        totalPaymentsToday: number;
        totalRevenue: number;
        failedTransactions: number;
        revenueChart: number[];
    };
}
