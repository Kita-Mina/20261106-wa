Vue.createApp({
  // データの定義
  data() {
    return {
      height: 170,
      weight: 65,
      // BMIの判定基準とアドバイス
      standards: [
        {
          min: 0,
          max: 18.5,
          range: "18.5未満",
          result: "低体重",
          advice: "バランスのよい食事を心がけ、適切な体重管理を意識しましょう。"
        },
      ]
    };
  },

  // 算出プロパティ
  computed: {
    // 身長をメートルに変換
    heightInMeter() {
      return this.height / 100;
    },

    // BMIを計算
    bmi() {
      if (this.height <= 0 || this.weight <= 0) return 0;
      return this.weight / (this.heightInMeter ** 2);
    },

    // 小数点第三位以下を切り捨て
    formattedBmi() {
      return (Math.floor(this.bmi * 100) / 100).toFixed(2);
    },

    // BMIに該当する判定基準を取得
    currentStandard() {
      return this.standards.find(item =>
        this.bmi >= item.min && this.bmi < item.max
      );
    },

    // 判定結果を取得
    result() {
      return this.currentStandard?.result || "計算できません";
    },

    // 該当するアドバイスを取得
    advice() {
      return this.currentStandard?.advice || "身長と体重を正しく入力してください。";
    }
  }
}).mount("#app");