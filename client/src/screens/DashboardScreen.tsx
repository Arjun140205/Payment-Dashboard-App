import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import API from '../services/api';
import { getToken } from '../utils/auth';

const screenWidth = Dimensions.get('window').width;

export default function DashboardScreen() {
  const [stats, setStats] = useState<any>(null);

  const fetchStats = async () => {
    try {
      const token = await getToken();
      const res = await API.get('/payments/stats', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStats(res.data);
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to fetch dashboard data.');
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (!stats) return <Text style={styles.loading}>Loading dashboard...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.card}>
        <Text>Total Payments Today: {stats.totalPaymentsToday}</Text>
        <Text>Total Revenue: ₹{stats.totalRevenue}</Text>
        <Text>Failed Transactions: {stats.failedTransactions}</Text>
      </View>

      <Text style={styles.chartTitle}>Revenue (Last 7 Days)</Text>

      <LineChart
        data={{
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          datasets: [{ data: stats.revenueChart }],
        }}
        width={screenWidth - 20}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: () => '#000',
          labelColor: () => '#555',
        }}
        bezier
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  loading: { marginTop: 50, textAlign: 'center', fontSize: 18 },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  chartTitle: { fontSize: 18, fontWeight: '600', marginBottom: 5 },
});