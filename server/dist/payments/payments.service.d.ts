export declare class PaymentsService {
    getStats(): {
        totalPaymentsToday: number;
        totalRevenue: number;
        failedTransactions: number;
        revenueChart: number[];
    };
}
