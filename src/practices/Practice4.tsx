export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    const tatal = num * 1.1;
    console.log(tatal);
  };
  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題：設定ファイる</p>
      <button onClick={onClickPractice}>練習4</button>
    </div>
  );
};
