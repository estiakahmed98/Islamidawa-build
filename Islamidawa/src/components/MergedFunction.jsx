export const aggregateUserData = (users, allData) => {
  const aggregatedData = {
    TallyData: [],
    AmoliChartData: [],
    TalimDonutChartData1: [],
    TalimDonutChartData2: [],
  };

  // Aggregate TallyData
  const tallyDataMap = {};
  users.forEach((user) => {
    const userTallyData = allData[user]?.TallyData || [];
    userTallyData.forEach((tally) => {
      if (!tallyDataMap[tally.title]) {
        tallyDataMap[tally.title] = [];
      }
      tally.data.forEach((item, index) => {
        if (!tallyDataMap[tally.title][index]) {
          tallyDataMap[tally.title][index] = { ...item, value: 0, max: 0 };
        }
        tallyDataMap[tally.title][index].value += item.value;
        tallyDataMap[tally.title][index].max += item.max;
      });
    });
  });

  Object.keys(tallyDataMap).forEach((title) => {
    aggregatedData.TallyData.push({
      title,
      data: tallyDataMap[title],
    });
  });

  // Helper function to normalize chart data to 100%
  const normalizeTo100Percent = (chartData) => {
    const total = chartData.reduce((sum, item) => sum + item.value, 0);
    return chartData.map((item) => ({
      ...item,
      value: total > 0 ? Math.round((item.value / total) * 100) : 0,
    }));
  };

  // Aggregate and normalize AmoliChartData
  aggregatedData.AmoliChartData = normalizeTo100Percent(
    users
      .flatMap((user) => allData[user]?.AmoliChartData || [])
      .reduce((acc, item) => {
        const existing = acc.find((entry) => entry.name === item.name);
        if (existing) {
          existing.value += item.value;
        } else {
          acc.push({ ...item });
        }
        return acc;
      }, [])
  );

  // Aggregate and normalize TalimDonutChartData1 and TalimDonutChartData2
  ["TalimDonutChartData1", "TalimDonutChartData2"].forEach((key) => {
    aggregatedData[key] = normalizeTo100Percent(
      users
        .flatMap((user) => allData[user]?.[key] || [])
        .reduce((acc, item) => {
          const existing = acc.find((entry) => entry.name === item.name);
          if (existing) {
            existing.value += item.value;
          } else {
            acc.push({ ...item });
          }
          return acc;
        }, [])
    );
  });

  return aggregatedData;
};
