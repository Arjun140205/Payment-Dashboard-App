import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  getStats() {
    return {
      totalPaymentsToday: 12,
      totalRevenue: 27500,
      failedTransactions: 3,
      revenueChart: [3000, 4000, 3500, 2000, 4500, 4000, 5500], // 7 days
    };
  }
}