const memoizedValue = useMemo(() => {
  return computeExpensiveValue(의존성변수1, 의존성변수2);
}, [의존성변수1, 의존성변수2]);
